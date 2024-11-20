import { db } from '$lib/server/database/index';
import { categorias, eventos, usuarios } from '$lib/server/database/schema';
import { gte, eq, asc } from 'drizzle-orm';
import { transformarDatos } from './utils';

export async function events() {
	const hoy = new Date().getTime();

	const events = await db
		.select({
			idCat: categorias.id,
			nombreCat: categorias.nombre,
			descripcionCat: categorias.descripcion,
			id: eventos.id,
			titulo: eventos.titulo,
			descripcionEve: eventos.descripcion,
			fecha: eventos.fechaEvento,
			nombreUsu: usuarios.nombre,
			apelldoUsu: usuarios.apellido
		})
		.from(categorias)
		.innerJoin(eventos, eq(categorias.id, eventos.categoriaId))
		.innerJoin(usuarios, eq(eventos.usuarioId, usuarios.id))
		.where(gte(eventos.fechaEvento, hoy))
		.orderBy(asc(categorias.id), asc(eventos.fechaEvento));

	const result = transformarDatos(events);

	return result;
}

export async function categoriasEventos() {
  return await db.select({ id: categorias.id, nombre: categorias.nombre }).from(categorias);
}

export async function eventosUsuario(id: number) {
  const events = await db.select().from(eventos)
    .where(eq(eventos.usuarioId, id))
    .orderBy(asc(eventos.fechaEvento));
  return events;
}

export async function eventosId(id: number) {
  const events = await db.select().from(eventos)
    .where(eq(eventos.id, id))
  return events[0];
}
