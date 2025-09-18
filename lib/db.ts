// lib/db.ts
import { neon } from '@neondatabase/serverless';

const connStr = process.env.NEON_DATABASE_URL!;
export const sql = neon(connStr);
