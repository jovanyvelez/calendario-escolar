import { db } from '$lib/server/database/index';
import { eventos } from '$lib/server/database/schema';
import type { InsertEvent } from '$lib/types/appTypes';


export async function createEvent(datos: InsertEvent) {

  await db.insert(eventos).values(datos);
}
