import { sql } from '@/lib/db';

export async function GET() {
  try {
    // products
    await sql`CREATE TABLE IF NOT EXISTS product(
      id SERIAL PRIMARY KEY,
      sku TEXT UNIQUE,
      name TEXT NOT NULL,
      brand TEXT,
      category TEXT NOT NULL CHECK (category IN ('shoe','sock','disposable')),
      price_cents INTEGER NOT NULL,
      color_random BOOLEAN NOT NULL DEFAULT true,
      event_only BOOLEAN NOT NULL DEFAULT false,
      active BOOLEAN NOT NULL DEFAULT true,
      notes TEXT
    );`;

    // variants
    await sql`CREATE TABLE IF NOT EXISTS product_variant(
      id SERIAL PRIMARY KEY,
      product_id INTEGER NOT NULL REFERENCES product(id) ON DELETE CASCADE,
      size TEXT NOT NULL,
      stock INTEGER NOT NULL DEFAULT 0,
      UNIQUE (product_id, size)
    );`;

    // orders + items
    await sql`CREATE TABLE IF NOT EXISTS orders(
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      customer_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      pickup_option TEXT NOT NULL CHECK (pickup_option IN ('pickup','dropoff','event')),
      pickup_note TEXT
    );`;
    await sql`CREATE TABLE IF NOT EXISTS order_item(
      id SERIAL PRIMARY KEY,
      order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
      variant_id INTEGER NOT NULL REFERENCES product_variant(id) ON DELETE RESTRICT,
      qty INTEGER NOT NULL CHECK (qty>0),
      price_cents INTEGER NOT NULL
    );`;

    // upsert helpers
    const upsertProduct = async (p: {
      sku: string, name: string, brand?: string, category: 'shoe'|'sock'|'disposable',
      price_cents: number, color_random?: boolean, event_only?: boolean, active?: boolean, notes?: string
    }) => {
      const { rows } = await sql`
        INSERT INTO product(sku,name,brand,category,price_cents,color_random,event_only,active,notes)
        VALUES (${p.sku},${p.name},${p.brand||null},${p.category},${p.price_cents},${p.color_random??true},${p.event_only??false},${p.active??true},${p.notes||null})
        ON CONFLICT (sku) DO UPDATE
        SET name=EXCLUDED.name, brand=EXCLUDED.brand, category=EXCLUDED.category,
            price_cents=EXCLUDED.price_cents, color_random=EXCLUDED.color_random,
            event_only=EXCLUDED.event_only, active=EXCLUDED.active, notes=EXCLUDED.notes
        RETURNING id`;
      return rows[0].id as number;
    };
    const upsertVariant = async (product_id: number, size: string, stock: number) => {
      await sql`
        INSERT INTO product_variant(product_id,size,stock)
        VALUES (${product_id},${size},${stock})
        ON CONFLICT (product_id,size) DO UPDATE SET stock=EXCLUDED.stock;`;
    };

    // DOG SHOES 0–9 ($10)
    const shoeId = await upsertProduct({
      sku: 'SHOE-MIXED',
      name: 'Dog Shoes (Mixed brand/colors)',
      brand: 'Various',
      category: 'shoe',
      price_cents: 1000,
      color_random: true,
      notes: 'Choose size only; colors/brand vary.'
    });
    for (let i = 0; i <= 9; i++) await upsertVariant(shoeId, String(i), 0);

    // SOCKS S/M/L ($5)
    const socksId = await upsertProduct({
      sku: 'SOCKS-PAVEMENT',
      name: 'Dog Socks (pavement helper)',
      brand: 'Various',
      category: 'sock',
      price_cents: 500,
    });
    for (const s of ['S','M','L']) await upsertVariant(socksId, s, 0);

    // DISPOSABLE One-size ($2), event-only
    const dispId = await upsertProduct({
      sku: 'SHOE-DISPOSABLE',
      name: 'Disposable Dog Shoes (event only)',
      brand: 'Various',
      category: 'disposable',
      price_cents: 200,
      event_only: true,
      notes: 'Sold at events; tracked here.'
    });
    await upsertVariant(dispId, 'One-size', 0);

    return Response.json({ ok: true });
  } catch (e: any) {
    return new Response(e.message || 'Seed error', { status: 500 });
  }
}
