import { createEvent } from '$lib/server/database/query/create';
import { eventosUsuario } from '$lib/server/database/query/read';
import  { crudSchema } from "$lib/types/appTypes"

export const load = async ({locals}) => {

  const eventos  = await eventosUsuario(locals.user.id);
  console.log(eventos)
	return { eventos };
};
