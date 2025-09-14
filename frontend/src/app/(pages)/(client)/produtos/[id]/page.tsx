"use client";

import { CartContext } from "@/context/cart-context";
import { PagamentService } from "@/services/PagamentService";
import { getProdutosByid } from "@/services/ProdutoService";
import { Button } from "@heroui/button";

import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";

export default function Produtos() {
  const { id } = useParams();
  const list = getProdutosByid(Number(id));
  const { addProduto } = useContext(CartContext);
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const { pagament, Pagar } = PagamentService();
  let quantityAtual = quantity;
  console.log("pagament url ->", pagament);
  console.log("id", id);
  return (
    <div>
      <div className="flex px-50">
        <div className="flex flex-col flex-1">
          <div className="flex mx-auto h-[250px] overflow-hidden rounded-2xl justify-self-center w-[450px] object-cover">
            <img
              className="w-full h-full object-cover"
              src={list[0]?.img}
              alt=""
            />
          </div>
          <h1>{list[0]?.title}</h1>
        </div>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Pagamento</h3>
			<div className="flex items-center flex-col w-full">
			<p className="text-white text-center text-2xl">{pagament?.value}</p>

			<img
              className="w-86"
              src={`data:image/png;base64,${pagament.qrcode}`}
              alt=""
            />
			</div>
            
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <div>
          <div className="w-[320px] bg-[#131313] flex flex-col gap-5 p-5 border-2 rounded-3xl">
            <h1 className="text-2xl font-semibold">Preço:</h1>
            <p className="text-[#fff] text-[22px]">{list[0]?.price}</p>
            <p>({list[0]?.estoque} itens no estoque)</p>
            <div className="flex flex-col gap-2">
              <div className="flex border-2 h-16 text-white overflow-hidden items-center rounded-2xl w-full justify-between">
                <Button
                  onPress={() => {
                    if (quantity > 1) {
                      const newValue = quantity - 1;
                      quantityAtual = newValue;
                      setQuantity(newValue);
                    }
                  }}
                  className="py-2 text-white h-full px-6 rounded-2xl flex items-center font-bold text-3xl border-2"
                >
                  -
                </Button>
                <p>{quantity}</p>
                <Button
                  onPress={() => {
                    if (quantity < list[0].estoque) {
                      const newValue = quantity + 1;
                      quantityAtual = newValue;
                      setQuantity(newValue);
                    }
                  }}
                  className="py-2 text-white h-full px-6 rounded-2xl flex items-center font-bold text-3xl border-2"
                >
                  +
                </Button>
              </div>
              <Button
                onPress={async () => {
                  await Pagar(Number(id), quantityAtual);
                  document.getElementById("my_modal_1")?.showModal();
                }}
                className="w-full bg-amber-400 text-black font-semibold cursor-pointer rounded-2xl"
                size={"lg"}
              >
                Comprar
              </Button>
              <Button
                className="w-full bg-amber-400 text-black font-semibold rounded-2xl"
                size={"lg"}
                onPress={() => addProduto(String(id), quantity)}
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
