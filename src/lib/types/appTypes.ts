import {z} from 'zod'

export const credentials = z.object({
  email: z.string({required_error:"Se requiere email"}).email({message:"Email:no es un correo válido"}).trim(),
  password: z.string().min(8,{message:"Password: Mìnimo 8 caracteres"}).max(100)
})

export type Credentials = z.infer<typeof credentials>

const event = z.object({
    id: z.number({required_error:"Se requiere id"}),
    categoriaId: z.string({required_error:"Se requiere categoriaId"}),
    titulo: z.string({required_error:"Se requiere descripcion"}),
    descripcion: z.string({required_error:"Se requiere descripcion"}),
    usuarioId: z.string({required_error:"Se requiere usuarioId"}),
    fecha: z.string({required_error:"Se requiere fechaEvento"}),
})

  export const crudSchema1 = event.extend({
    id: event.shape.id.optional(),
  });

  export const crudSchema = event.extend({
      id: z.union([z.number(), z.undefined()]),
  });


  export type InsertEvent = {
    categoriaId: number;
    titulo: string;
    descripcion: string;
    usuarioId: number;
    fechaEvento: number
  }

  export type UpdateEvent = {
    id: number;
    categoriaId: number;
    titulo: string;
    descripcion: string;
    usuarioId: number;
    fechaEvento: number
  }
