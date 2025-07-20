import { decimal, int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const produtoTable = mysqlTable('produto', {
  id: serial().primaryKey().autoincrement(),
  title: varchar({ length: 255 }).notNull(),
  img: varchar({length: 1000}).notNull(),
  estoque: int().notNull(),
  price: decimal({precision:10, scale:2}).notNull(),
});