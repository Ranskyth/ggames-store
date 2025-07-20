import Elysia from "elysia"
import { client } from "../drizzle/client"
import { eq } from "drizzle-orm"
import { produtoTable } from "../db/schema"
import { ClientConfig } from "../redis/cliente"

export const produtosRoutes = new Elysia()
produtosRoutes.get("/produtos", async () => await client.select().from(produtoTable))

produtosRoutes.get("/produtos/:id", async ({params}) => await client.select().from(produtoTable).where(eq(produtoTable.id, Number(params.id))))

produtosRoutes.post("/a", async() => await ClientConfig.set(`produto:1`, JSON.stringify({id:1,nome:"momo"}), 'EX', 120))