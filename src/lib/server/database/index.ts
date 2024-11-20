import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import  * as schema from './schema';

if(!env.DATABASE_URL) throw new Error('DATABASE_URL no existe ')
if(!env.DATABASE_URL) throw new Error('DATABASE_URL no existe ')

console.log(env.DATABASE_URL)
console.log(env.TURSO_AUTH_TOKEN)

if (!dev && !env.DATABASE_TOKEN) throw new Error('DATABASE_AUTH_TOKEN no fue definida en entorno');

const client = createClient({ url: env.DATABASE_URL,
                              authToken: env.TURSO_AUTH_TOKEN });

export const db = drizzle(client, {schema, casing: 'snake_case' });
