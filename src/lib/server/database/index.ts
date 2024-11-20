import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL no existe ');
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL no existe ');

const client = createClient({ url: process.env.DATABASE_URL, authToken: process.env.TURSO_AUTH_TOKEN });

export const db = drizzle(client, { schema, casing: 'snake_case' });
