import Elysia from "elysia";
import { client } from "../drizzle/client";
import { eq } from "drizzle-orm";
import { produtoTable } from "../db/schema";

export const ProdutosRoutes = (app: Elysia) =>
	app
		.get("/produto", async () => await client.select().from(produtoTable))
		.get(
			"/produto/:id",
			async ({ params }) =>
				await client
					.select()
					.from(produtoTable)
					.where(eq(produtoTable.id, Number(params.id))),
		);
