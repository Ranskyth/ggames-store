"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import { BACKEND_API } from "@/config/config";
import { useEffect, useState } from "react";

export const PagamentService = () => {
	const [pagament, setPagament] = useState({
		qrcode:"",
		value:0
	});
	console.log(pagament);

		const Pagar = async(produto_id: number, quantidade: number) => {
			const data = await fetch(`${BACKEND_API}/pagament`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ produtoId: Number(produto_id) , quantidade}),
			});
			console.log(data.body);
			if(!data.ok){
				throw new Error("Error em PagamentService")
			}
			const datajson = await data.json();
			console.log("datajson", datajson);
			setPagament(datajson);
		}
	

	return {pagament, Pagar}
};
