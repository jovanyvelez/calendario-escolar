import { redirect } from '@sveltejs/kit';
import { events } from '$lib/server/database/query/read';

export async function load({ locals }) {
	if (!locals.user) {
		redirect(302, '/login');
	}

	try {
		const actividades = await events();
		return { actividades };
	} catch (error) {
		console.error(error);
		throw new Error('Ocurrio un error con la base de datos');
	}
}
