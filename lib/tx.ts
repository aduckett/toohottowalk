import { sql } from "./db";
export async function runTx<T>(work: (q: typeof sql) => Promise<T>) {
  await (sql as any)`BEGIN`;
  try {
    const res = await work(sql);
    await (sql as any)`COMMIT`;
    return res;
  } catch (e) {
    await (sql as any)`ROLLBACK`;
    throw e;
  }
}