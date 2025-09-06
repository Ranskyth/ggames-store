import { Elysia, t } from "elysia";
import { client } from "../drizzle/client";
import { produtoTable } from "../db/schema";
import { eq } from "drizzle-orm";
import { ACESS_TOKEN_MERCADO_PAGO } from "../config/config";

export const PagamentRoutes = (app: Elysia) =>
	app.post(
		"/pagament",
		async ({ body }) => {
			const [produto] = await client
				.select()
				.from(produtoTable)
				.where(eq(produtoTable.id, body.produtoId));

			if (!produto) {
				return { Error: "id do Produto Invalido" };
			}

			console.log("res ->", produto);

			const data = await fetch("https://api.mercadopago.com/v1/payments", {
				method: "POST",
				headers: {
					"X-Idempotency-Key": `${Math.random().toString(35).slice(2)}`,
					Authorization: `Bearer ${ACESS_TOKEN_MERCADO_PAGO}`,
				},
				body: JSON.stringify({
					transaction_amount: Number(produto.price),
					payment_method_id: "pix",
					payer: {
						email: "ga.lima2205@gmail.com",
					},
				}),
			});

			const datajson = await data.json();

			console.log(datajson.point_of_interaction.transaction_data.ticket_url);

			return {
				data: datajson.point_of_interaction.transaction_data.ticket_url,
			};
		},
		{
			body: t.Object({
				produtoId: t.Number(),
			}),
		},
	);
