// lib/tx.ts
import { sql } from './db';

export async function runTx<T>(work: (q: typeof sql) => Promise<T>) {
  // neon() returns a tagged-template function; we'll manage BEGIN/COMMIT manually
  await (sql as any)`BEGIN`;
  try {
    const result = await work(sql);
    await (sql as any)`COMMIT`;
    return result;
  } catch (e) {
    await (sql as any)`ROLLBACK`;
    throw e;
  }
}
