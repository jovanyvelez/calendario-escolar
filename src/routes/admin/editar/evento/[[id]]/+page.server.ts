import { eventosId, categoriasEventos } from "$lib/server/database/query/read"
import { updateEvent } from "$lib/server/database/query/update";
import  { crudSchema } from "$lib/types/appTypes"
import { redirect } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const evento = await eventosId(params.id);
  const categorias = await categoriasEventos();
  return { evento, categorias };
}


export const actions = {
  editar: async ({ request, params }: { request: Request }) => {
    const formData = Object.fromEntries(await request.formData());
    const result = crudSchema.safeParse(formData);

    if (!result.success) return { message: "problemas con los datos" }

    const parameter = {id:params.id ,categoriaId: Number(result.data.categoriaId), titulo: result.data.titulo, descripcion: result.data.descripcion, usuarioId: Number(result.data.usuarioId), fechaEvento: new Date(result.data.fecha).getTime()}

    await updateEvent(parameter);

    redirect(302, "/")

  }
}
