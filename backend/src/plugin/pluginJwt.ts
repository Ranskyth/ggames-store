import jwt from "@elysiajs/jwt";

export const JWT = jwt({
	name: "jwt",
	secret: "secret",
	exp: "1d",
});
