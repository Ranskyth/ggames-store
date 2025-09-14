import { ShoppingCart, X } from "lucide-react";

export const ProdutoCart = () => {
	return (
		<div className="bg-[#222222] rounded-2xl justify-between p-5 flex">
			<div className="flex gap-5">
				<img
					className="w-20 h-full object-cover"
					src="https://s2-techtudo.glbimg.com/1Z4nsLSERFvPv5H91noM-oabvYU=/0x0:1280x750/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/C/T/px9C5WSAKri5yFHECBZw/subway-surfers-revenue.jpg"
					alt=""
				/>
				<div>
					<h1>Nome</h1>
					<p>Valor</p>
				</div>
			</div>
			<button className="bg-[#333333] rounded-2xl p-5">
				<ShoppingCart className="text-white" />
				<X className="text-red-700 mt-2" />
			</button>
		</div>
	);
};
