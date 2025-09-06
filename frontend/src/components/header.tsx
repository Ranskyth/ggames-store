"use client";

import { CartContext } from "@/context/cart-context";
import { SheetContext } from "@/context/sheet-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export const Header = () => {
	const pathname = usePathname();
	const { OpenSheet } = useContext(SheetContext);
	const { qtProdutos } = useContext(CartContext);

	console.log("path -> ", pathname);

	return (
		<header className="flex border-b-2 mb-10 bg-[#131313] justify-between items-center">
			<div className="flex items-center gap-60">
				<div className="relative flex items-center">
					<div className="w-36">
						<img
							className="w-full h-full inline"
							src="https://i.pinimg.com/736x/a4/5f/fd/a45ffd6f34b69392087382ad5e617885.jpg"
							alt=""
						/>
					</div>
					<h1 className="absolute left-28 font-bold text-[1.5rem]">
						Ggame Store
					</h1>
				</div>
				<div>
					<nav className="bg-black overflow-hidden w-[420px] py-3 px-12 rounded-4xl">
						<ul className="flex relative justify-between">
							<div
								className={`bg-amber-400 w-34 rounded-4xl h-[47px] ${
									pathname == "/produtos"
										? `left-[84px] ease-in-out duration-500`
										: "left-[-47px] ease-in-out duration-500"
								} top-[-10px] absolute`}
							></div>
							<li>
								<Link className="font-semibold relative z-1" href={"/"}>
									Inicio
								</Link>
							</li>
							<li>
								<Link className="font-semibold relative z-1" href={"/produtos"}>
									Produtos
								</Link>
							</li>
							<li>
								<a className="font-semibold" href={"https://discord.com"}>
									Discord
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="flex items-center gap-5 mx-14">
				<button
					onClick={() => OpenSheet()}
					className="p-3 rounded-2xl relative bg-[#4B4B4B]"
				>
					{qtProdutos != 0 ? (
						<h1 className="bg-[#FFB900] text-[14px] text-center px-3 py-1 absolute -top-2 rounded-2xl -right-2">
							{qtProdutos}
						</h1>
					) : null}
					<img src="/icon/compra.svg" alt="" />
				</button>
				<Link href={"/login"}>Entrar</Link>
			</div>
		</header>
	);
};
