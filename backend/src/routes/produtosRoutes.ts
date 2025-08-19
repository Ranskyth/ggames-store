import Elysia from "elysia"
import { client } from "../drizzle/client"
import { eq } from "drizzle-orm"
import { produtoTable } from "../db/schema"

export const produtosRoutes = new Elysia()
.get("/produtos", async () => await client.select().from(produtoTable))

.get("/produtos/:id", async ({params}) => await client.select().from(produtoTable).where(eq(produtoTable.id, Number(params.id))))