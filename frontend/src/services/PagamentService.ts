/* eslint-disable react-hooks/rules-of-hooks */
import { BACKEND_API } from "@/config/config";
import { useEffect, useState } from "react";

export const PagamentService = (produto_id: number) => {
	const [pagament, setPagament] = useState();
	console.log(pagament);

	useEffect(() => {
		(async () => {
			const data = await fetch(`${BACKEND_API}/pagament`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ produtoId: Number(produto_id) }),
			});
			console.log(data.body);
			const datajson = await data.json();
			console.log("datajson", datajson);
			setPagament(datajson.data);
		})();
	}, []);

	return { pagament };
};
