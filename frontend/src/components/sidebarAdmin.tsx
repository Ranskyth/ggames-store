import Link from "next/link"

export const HeaderAdmin = () =>{
    return(
        <div></div>
    )
}
export const SidebarAdmin = () => {
    return (
        <div>
            <div className="w-60 h-screen relative bg-[#222]">
                <div className="w-screen justify-between items-center px-25 flex bg-[#222222] h-15">
                    <div className="flex items-center">
                        <img className="w-20" src="/logo.png" alt="" />
                        <h1 className="text-[#fff]">GGames Dashboard</h1>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-[#fff] p-2 rounded-[5px]">Logout</button>
                        <h1 className="text-[#fff] ml-5">User : { }</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center p-2">
                    <Link className="bg-[#fff] w-full p-2 rounded-2xl text-center" href={"/admin/dashboard"}>Home</Link>
                    <Link className="bg-[#fff] w-full p-2 rounded-2xl text-center" href={"/admin/produtos"}>Produtos</Link>
                </div>
            </div>
        </div>
    )
}