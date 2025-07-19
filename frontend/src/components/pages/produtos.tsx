import { CardCompra } from "../card-compra";

export const ProdutosPage = () => {
  return (
    <div className="flex gap-11 px-12 py-7 w-full h-full">
      <div className="w-[25rem] p-5 bg-[#131313] border-2 h-[35rem] rounded-3xl border-amber-700">
        <h1 className="text-2xl">Categorias</h1>
      </div>
      <div className="grid w-full grid-cols-4 gap-5">
        <CardCompra />
      </div>
    </div>
  );
};
