
interface DatoEntrada {
  idCat: number;
  nombreCat: string;
  descripcionCat: string | null;
  id: number | null;
  titulo: string | null;
  descripcionEve: string | null;
  fecha: number | null;
  nombreUsu: string;
  apelldoUsu: string;
}

// Interfaces para la estructura de salida
interface Usuario {
  nombre: string;
  apellido: string;
}

interface Evento {
  id: number | null;
  titulo: string | null;
  descripcion: string;
  fecha: string;
  usuario: Usuario;
}

interface CategoriaTransformada {
  idCat: number;
  nombreCat: string;
  descripcionCat: string;
  eventos: Evento[];
}

export const transformarDatos = (datos: DatoEntrada[]): CategoriaTransformada[] => {
  // Crear un Map para agrupar por categoría
  const categoriaMap = new Map<number, CategoriaTransformada>();

  datos.forEach(item => {
    const categoriaId = item.idCat;

    if (!categoriaMap.has(categoriaId)) {
      // Si la categoría no existe, crear nueva entrada
      categoriaMap.set(categoriaId, {
        idCat: item.idCat,
        nombreCat: item.nombreCat,
        descripcionCat: item.descripcionCat ?? '',
        eventos: []
      });
    }

    // Agregar el evento a la categoría correspondiente
    const categoria = categoriaMap.get(categoriaId);
    if (categoria) {
      categoria.eventos.push({
        id: item.id,
        titulo: item.titulo,
        descripcion: item.descripcionEve ?? '',
        fecha: item.fecha ? new Date(item.fecha).toISOString().split('T')[0] : '', // Convertir timestamp a formato YYYY-MM-DD
        usuario: {
          nombre: item.nombreUsu,
          apellido: item.apelldoUsu
        }
      });
    }
  });

  // Convertir el Map a array
  return Array.from(categoriaMap.values());
};
