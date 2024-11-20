import { createEvent } from '$lib/server/database/query/create';
import { categoriasEventos } from '$lib/server/database/query/read';
import  { crudSchema } from "$lib/types/appTypes"

export const load = async ({locals}) => {
  const categorias = await categoriasEventos();

	return { categorias, usuarioId: locals.user.id };
};

export const actions = {
  guardarEvento: async ({ request }: { request: Request }) => {
    const formData = Object.fromEntries(await request.formData());
    const result = crudSchema.safeParse(formData);

    if (!result.success) return { message: "problemas con los datos" }

    const parameter = {categoriaId: Number(result.data.categoriaId), titulo: result.data.titulo, descripcion: result.data.descripcion, usuarioId: Number(result.data.usuarioId), fechaEvento: new Date(result.data.fecha).getTime()}

    await createEvent(parameter);

  }
}
