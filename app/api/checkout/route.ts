import { sql } from '@/lib/db';
import { runTx } from '@/lib/tx';

export async function POST(req: Request) {
  const { customer, pickup, items } = await req.json().catch(() => ({}));
  if (!customer?.name || !customer?.email || !pickup?.option || !Array.isArray(items) || !items.length) {
    return new Response('Bad request', { status: 400 });
  }
  if (!['pickup','dropoff','event'].includes(pickup.option)) {
    return new Response('Invalid pickup option', { status: 400 });
  }

  try {
    const orderId = await runTx(async (tx) => {
      const { rows } = await (tx as any)`
        INSERT INTO orders (customer_name, email, phone, pickup_option, pickup_note)
        VALUES (${customer.name}, ${customer.email}, ${customer.phone || null}, ${pickup.option}, ${pickup.note || null})
        RETURNING id`;
      const id = rows[0].id as number;

      for (const it of items) {
        const { rows: vRows } = await (tx as any)`
          SELECT pv.id, pv.stock, p.price_cents
          FROM product_variant pv JOIN product p ON p.id=pv.product_id
          WHERE pv.id=${it.variantId} FOR UPDATE`;
        const v = vRows[0];
        if (!v) throw new Error('Variant not found');
        if (v.stock < it.qty) throw new Error('Insufficient stock');

        await (tx as any)`UPDATE product_variant SET stock = stock - ${it.qty} WHERE id=${it.variantId}`;
        await (tx as any)`
          INSERT INTO order_item(order_id, variant_id, qty, price_cents)
          VALUES (${id}, ${it.variantId}, ${it.qty}, ${v.price_cents})`;
      }
      return id;
    });

    return Response.json({ ok: true, orderId });
  } catch (e: any) {
    const msg = (e?.message || '').includes('Insufficient') ? 'Insufficient stock' : 'Checkout failed';
    return new Response(JSON.stringify({ ok:false, error: msg }), { status: 409 });
  }
}
