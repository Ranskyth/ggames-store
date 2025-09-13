import Link from "next/link";

export default function Login() {
	return (
		<div className="w-full h-fit flex justify-center">
			
			<div className="bg-[#131313] flex flex-col p-5 gap-5 rounded-2xl w-[500px] h-[390px]">
				<div className="flex flex-col">
					<label className="text-amber-400" htmlFor="">Email</label>
					<input className="bg-[#fff] px-5 h-10 rounded-2xl" placeholder="example@gmail.com" />
				</div>
				<div className="flex flex-col">

					<label className="text-amber-400" htmlFor="">Password</label>
					<input className="bg-[#fff] px-5 h-10 rounded-2xl" placeholder="password" />
				</div>
				<button className="bg-[#ffffff] py-2 rounded-2xl">Login</button>
				<p className="text-white">Ainda não tem conta <Link className="text-amber-200" href={"/register"}>Cadastra-se</Link></p>
			</div>
		</div>
	);
}
