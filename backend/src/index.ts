import { Elysia } from "elysia";

import 'dotenv/config';
import cors from "@elysiajs/cors";
import { LoginRoutes } from "./routes/loginRoutes";
import { jwt } from "@elysiajs/jwt";
import { ProdutosRoutes } from "./routes/produtosRoutes";
import { UserRoutes } from "./routes/userRoutes";

const app = new Elysia()
  .use(jwt({
    name: "jwt",
    secret: "secret",
    exp: "1d"
  }))
  .use(LoginRoutes)
  .use(ProdutosRoutes)
  .use(UserRoutes)

  .use(cors({ origin: "*", methods: "*" }))
  .get("/", () => "Hello")

  .listen(3333);



console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
