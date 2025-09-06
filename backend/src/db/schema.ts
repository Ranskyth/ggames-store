import {
	decimal,
	int,
	mysqlTable,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/mysql-core";

export const produtoTable = mysqlTable("produto", {
	id: int().primaryKey().autoincrement(),
	title: varchar({ length: 255 }).notNull(),
	img: varchar({ length: 1000 }).notNull(),
	estoque: int().notNull(),
	price: decimal({ precision: 10, scale: 2 }).notNull(),
	created_at: timestamp("created_at").defaultNow().notNull(),
	updated_at: timestamp("updated_at").defaultNow().notNull().onUpdateNow(),
});

export const userTable = mysqlTable("user", {
	id: int().primaryKey().autoincrement(),
	nome: varchar({ length: 150 }).notNull(),
	email: varchar({ length: 150 }).notNull().unique(),
	senha: varchar({ length: 50 }).notNull(),
	role: text(),
	created_at: timestamp("created_at").defaultNow().notNull(),
	updated_at: timestamp("updated_at").defaultNow().notNull().onUpdateNow(),
});
