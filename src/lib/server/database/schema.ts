import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { relations } from 'drizzle-orm/relations';

export const categorias = sqliteTable("categorias", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	nombre: text().notNull(),
	descripcion: text(),
});

export const eventos = sqliteTable("eventos", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	titulo: text(),
	descripcion: text(),
	fechaEvento: integer(),
	categoriaId: integer().references(()=>categorias.id),
	usuarioId: integer().references(()=>usuarios.id),
	createdAt: integer(),
});

export const usuarios = sqliteTable("usuarios", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	nombre: text().notNull(),
	apellido: text().notNull(),
	email: text().notNull(),
	rol: text().notNull(),
	passwordHash: text(),
	tokenAuth: text(),
});

export const usersRelations = relations(usuarios, ({ many }) => ({
  eventos: many(eventos)
}));


export const eventsRelations = relations(eventos, ({ one }) => ({
	categoria: one(categorias, {
		fields: [eventos.categoriaId],
		references: [categorias.id]
	}),
	usuario: one(usuarios, {
		fields: [eventos.usuarioId],
		references: [usuarios.id]
	})
}));

export const categoriesRelations = relations(categorias, ({ many }) => ({
	eventos: many(eventos)
}));
