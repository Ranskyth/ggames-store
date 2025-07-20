import { Elysia } from "elysia";
import { produtosRoutes } from "./routes/produtosRoutes";
import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import cors from "@elysiajs/cors";
import { ClientConfig, initializeRedis } from "./redis/cliente";

const db = drizzle(process.env.DATABASE_URL!);

const app = new Elysia()
app.use(cors({origin:"*", methods:"*"}))

app.get("/", () => "Hello")
app.use(produtosRoutes)
app.listen(3333);

initializeRedis()

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
