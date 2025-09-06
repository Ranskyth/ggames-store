"use client";

import { getCookie, setCookie } from "cookies-next";
import { createContext, ReactNode, useState } from "react";

interface Props {
	qtProdutos: number;
	addProduto: (ProdutoId: string, quantity?: number) => void;
	removerProduto: () => void;
	clearProduto: () => void;
}

interface CartItem {
	produtoId: string;
	quantity?: number | undefined;
}

export const CartContext = createContext({} as Props);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [qtProdutos, setQtProdutos] = useState<number>(0);
	const [qtCarrinho, setQtCarrinho] = useState<number>(0);

	const addProduto = (produtoId: string, quantity?: number) => {
		setQtProdutos((prev) => prev + quantity!);
		if (!getCookie("cart")) {
			setCookie("cart", []);
		}
		const cart: CartItem[] = JSON.parse(String(getCookie("cart")) || "[]");

		const existeProduto = cart.find((item) => item.produtoId == produtoId);

		if (existeProduto) {
			console.log("produto já existe");
			existeProduto.quantity! += quantity!;
		} else {
			console.log("produto novo");
			cart.push({ produtoId, quantity });
		}
		setCookie("cart", cart);
	};

	const removerProduto = () => {
		setQtProdutos((prev) => prev - 1);
	};

	const clearProduto = () => {
		setQtProdutos(0);
	};

	const cartProducts = () => {};

	return (
		<CartContext
			value={{ addProduto, removerProduto, qtProdutos, clearProduto }}
		>
			{children}
		</CartContext>
	);
};
