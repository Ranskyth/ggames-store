import { HomeIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";

const ItensSidebar = [
	{
		text: "Home",
		url: "/admin/dashboard",
		icon: HomeIcon,
	},
	{
		text: "Produto",
		url: "/admin/produto",
		icon: ShoppingCart,
	},
];

export const SidebarAdmin = () => {
	return (
		<div className="w-60 h-screen relative bg-[#222]">
			<div className="w-screen justify-between items-center flex bg-[#222222] h-15">
				<div className="flex items-center">
					<img className="w-20" src="/logo.png" alt="" />
					<h1 className="text-[#fff]">GGames Dashboard</h1>
				</div>
				<div className="flex items-center mr-30">
					<h1 className="text-[#fff] mr-20">User : {}</h1>
					<div className="avatar mr-5">
						<div className="w-10 h-10 rounded-full">
							<Link href={"/admin/perfil"}>
								<img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
							</Link>
						</div>
					</div>
					<button className="bg-[#000] p-2 rounded-[5px] text-white">
						Logout
					</button>
				</div>
			</div>
			<div className="bg-[#000] m-2 h-[88%] rounded-2xl">
				<div className="flex flex-col gap-2 items-center p-3">
					{ItensSidebar.map((x) => (
						<div key={x.text} className="flex w-full pl-5 gap-2 text-start">
							<x.icon className="text-white" />
							<Link className="text-white w-full" href={x.url}>
								{x.text}
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
