import type { Handle } from '@sveltejs/kit';
import { db } from '$lib/server/database/index';
import { usuarios } from '$lib/server/database/schema';
import { eq } from 'drizzle-orm';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	const user = await db
		.select({ id: usuarios.id, role: usuarios.rol })
		.from(usuarios)
		.where(eq(usuarios.tokenAuth, session));

	if (!user || user.length === 0) {
		// Si no existe el usuario, quitar la cookie sesion  y cargue la página normal
		event.cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});
		return await resolve(event);
	}

	event.locals.user = user[0];

	return await resolve(event);
};
