import { db } from '$lib/server/database/index';
import { eventos } from '$lib/server/database/schema';
import type { InsertEvent } from '$lib/types/appTypes';
import { eq } from 'drizzle-orm';


export async function updateEvent(datos: InsertEvent) {
 console.log(datos)
  await db.update(eventos).set(datos).where(eq( eventos.id, datos.id ));
}
