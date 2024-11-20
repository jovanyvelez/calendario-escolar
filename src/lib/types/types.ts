export type Actividades = {
	idCat: number;
	nombreCat: string;
	descripcionCat: string | null;
	eventos: Event[];
}[];

export type Event = {
	id?: number;
	titulo: string;
	descripcion: string | null;
	fecha: string;
  usuario: { nombre: string, apellido: string}
};
