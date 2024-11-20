
import { eventosUsuario } from '$lib/server/database/query/read';


export const load = async ({locals}) => {

  const eventos  = await eventosUsuario(locals.user.id);
	return { eventos };
};
