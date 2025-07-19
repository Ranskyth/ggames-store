import { Button } from "@heroui/button";

export const ProdutoID = ({
  produto,
}: {
  produto: {
    id: string;
    title: string;
    img: string;
    price: string;
    estoque: number;
  }[];
}) => {
  return (
    <div>
      <div className="flex px-50">
        <div className="flex flex-col flex-1">
          <div className="flex mx-auto h-[250px] overflow-hidden rounded-2xl justify-self-center w-[450px] object-cover">
            <img className="w-full h-full" src={produto[0].img} alt="" />
          </div>
          <h1>{produto[0].title}</h1>
        </div>

        <div>
          <div className="w-[320px] bg-[#131313] flex flex-col gap-5 p-5 border-2 rounded-3xl">
            <h1 className="text-2xl font-semibold">Preço:</h1>
            <p className="text-[#fff] text-[22px]">{produto[0].price}</p>
            <p>({produto[0].estoque} itens no estoque)</p>
            <Button className="w-full bg-amber-400 text-black font-semibold cursor-pointer rounded-2xl" size={"lg"}>Comprar</Button>
            <Button className="w-full bg-amber-400 text-black font-semibold rounded-2xl" size={"lg"}>Adicionar ao carrinho</Button>
            <p className="text-center">
              Ao efetuar a compra, você vai receber acesso as informações do
              item adquirido.
            </p>
          </div>
          <div className="w-[320px] bg-[#131313] h-[180px] mt-5 border-2 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};
