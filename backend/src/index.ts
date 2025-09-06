import { Elysia } from "elysia";

import "dotenv/config";
import cors from "@elysiajs/cors";
import { LoginRoutes } from "./routes/loginRoutes";
import { ProdutosRoutes } from "./routes/produtosRoutes";
import { UserRoutes } from "./routes/userRoutes";
import { PagamentRoutes } from "./routes/pagementRoutes";
import { PORT } from "./config/config";

const app = new Elysia()
	.use(cors({ origin: "*", methods: "*" }))
	.use(LoginRoutes)
	.use(ProdutosRoutes)
	.use(UserRoutes)
	.use(PagamentRoutes)
	.get("/", () => "Hello")
	.listen(Number(PORT));

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
