"use client"

import { CartContext } from "@/context/cart-context";
import { getProdutosByid } from "@/hooks/Produtos";
import { Button } from "@heroui/button";

import { useParams } from "next/navigation";
import { useContext, useState } from "react";

export default function Produtos() {
    const {id} = useParams()
    const list = getProdutosByid(Number(id))
    const {qtProdutos} = useContext(CartContext)

    const [quantity, setQuantity] = useState(1);
  return (
        <div>
      <div className="flex px-50">
        <div className="flex flex-col flex-1">
          <div className="flex mx-auto h-[250px] overflow-hidden rounded-2xl justify-self-center w-[450px] object-cover">
            <img className="w-full h-full object-cover" src={list[0]?.img} alt="" />
          </div>
          <h1>{list[0]?.title}</h1>
        </div>

        <div>
          <div className="w-[320px] bg-[#131313] flex flex-col gap-5 p-5 border-2 rounded-3xl">
            <h1 className="text-2xl font-semibold">Preço:</h1>
            <p className="text-[#fff] text-[22px]">{list[0]?.price}</p>
            <p>({list[0]?.estoque} itens no estoque)</p>
            <div className="flex flex-col gap-2">
              <div className="flex border-2 text-white overflow-hidden items-center rounded-2xl w-full justify-between">
                <Button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity((prev) => prev - 1);
                    }
                  }}
                  className="py-2 text-white px-6 rounded-2xl flex items-center font-bold text-3xl border-2"
                >
                  -
                </Button>
                <p>{quantity}</p>
                <Button
                  onClick={() => {
                    if (quantity < list[0].estoque) {
                      setQuantity((prev) => prev + 1);
                    }
                  }}
                  className="py-2 text-white px-6 rounded-2xl flex items-center font-bold text-3xl border-2"
                >
                  +
                </Button>
              </div>
              <Button
                className="w-full bg-amber-400 text-black font-semibold cursor-pointer rounded-2xl"
                size={"lg"}
              >
                Comprar
              </Button>
              <Button
                className="w-full bg-amber-400 text-black font-semibold rounded-2xl"
                size={"lg"}
              >
                Adicionar ao carrinho
              </Button>
            </div>
            <p className="text-center">
              Ao efetuar a compra, você vai receber acesso as informações do
              item adquirido.
            </p>
          </div>
          <div className="w-[320px] p-5 bg-[#131313] h-[180px] mt-5 border-2 rounded-3xl">
            <h1>Precisa de ajuda?</h1>
            <p>
              Ao efetuar a compra, você vai receber acesso as informações
              credenciais da conta adquirida.
            </p>
            <a href="">
              <img src="" alt="" />
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
