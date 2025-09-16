import { CartContext } from "@/context/cart-context";
import { SheetContext } from "@/context/sheet-context";
import { X } from "lucide-react";
import { useContext } from "react";
import { ProdutoCart } from "./produto-cart";

export const Sheet = () => {
	const { CloseSheet, status } = useContext(SheetContext);
	const {carrinho} = useContext(CartContext)
	console.log("::: products --->>", carrinho)
	return (
		<div
			className={`w-[580px] flex flex-col justify-between p-5 h-screen bg-[#1b1b1b] z-20 absolute right-0 ${status ? "" : "translate-x-full"} duration-700`}
		>
			<div>
				<div className="flex justify-between items-center mt-5 px-2 mb-5">
					<h1 className="text-3xl text-white">Carrinho de compras</h1>
					<button
						onClick={() => CloseSheet()}
						className="w-16 p-5 h-16 bg-[#222222] rounded-4xl"
					>
						<X className="text-white" />
					</button>
				</div>
				<p className="text-[#616161] font-light">
					Ao efetuar a compra, você vai receber acesso as informações
					credenciais da conta adquirida.
				</p>
				<ul className="mt-10">
					<li className="flex flex-col gap-5">
						{carrinho.map((carrinho) => <ProdutoCart key={carrinho.produtoId}/>)}
					</li>
				</ul>
			</div>
			<div className="flex gap-2 justify-between px-15 mb-5">
				<button className="border border-[#df8f60] px-5 py-2 rounded-2xl text-[19px]">
					Esvaziar Carrinho
				</button>
				<button className="bg-[#fff] w-[180px] px-5 py-2 rounded-2xl text-[19px]">
					Comprar
				</button>
			</div>
		</div>
	);
};
