import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between items-center">
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
          <nav className="border-2 border-red-600 w-[420px] py-3 px-12 rounded-4xl">
            <ul className="flex justify-between">
                <li><Link href={"/"}>Inicio</Link></li>
                <li><Link href={"/contas"}>Contas</Link></li>
                <li><a href={"https://discord.com"}>Discord</a></li>
            </ul>

          </nav>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};
