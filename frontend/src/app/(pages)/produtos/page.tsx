import { CardCompra } from "@/components/card-compra";

export default function Produtos() {
  return (
    <div className="flex gap-11 px-12 py-7 w-full h-full">
      <div className="w-[25rem] flex flex-col justify-between p-5 bg-[#131313] border-2 h-[35rem] rounded-3xl border-amber-700">
        <div>
        <h1 className="text-2xl">Categorias</h1>
        <ul className="mt-5">
          <li>
            <a href="">Jogos steam</a>
          </li>
          <li>
            <a href="">Assinaturas e steam key</a>
          </li>
          <li>
            <a href="">Grift cards</a>
          </li>
        </ul>

        </div>
        <div className="border-t flex flex-col gap-5 border-[#BB4D00]">
          <h2>Filtrar por valor</h2>
          <input type="text"  className="w-full p-2 border rounded-2xl"/>
          <input type="text"  className="w-full p-2 border rounded-2xl"/>
          <button>Filtrar</button>

        </div>
        
      </div>
      <div className="grid w-full grid-cols-4 gap-5">
        <CardCompra />
      </div>
    </div>
  );
}
