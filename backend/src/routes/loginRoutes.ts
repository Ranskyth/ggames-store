import { eq, and } from 'drizzle-orm';
import Elysia, { t } from "elysia";
import { client } from "../drizzle/client";
import { userTable } from "../db/schema";

export const LoginRoutes = (app: Elysia) => (
    app.post("/login", async function ({ body, jwt }) {
        const [user] = await client.select().from(userTable).where(and(eq(userTable.email, body.email), eq(userTable.senha, body.senha)));

        if (!user) {
            return { mensagem: "Usuario ou Senha Invalidos" };
        }

        const token = await jwt.sign({ id: user.id });
        

        return {token: token}
    }, {
        body: t.Object({
            email: t.String(),
            senha: t.String()
        }),

    })
    
    .post("/register", async ({ body }) => {
        await client.insert(userTable).values(body)

    }, {
        body: t.Object({
            nome: t.String(),
            email: t.String(),
            senha: t.String(),
            role: t.String()
        })
    })
)