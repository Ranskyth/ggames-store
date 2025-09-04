import { SheetContext } from "@/context/sheet-context";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useContext } from "react";

export const Sheet = () => {
  const { CloseSheet, status} = useContext(SheetContext);

  return (
    
    <div className={`w-[580px] flex flex-col justify-between p-5 h-screen bg-[#1b1b1b] z-20 absolute right-0`}>
      <div>
        <div className="flex justify-between items-center mt-5 px-2 mb-5">
          <h1 className="text-3xl text-white">Carrinho de compras</h1>
          <button
            onClick={() => CloseSheet()}
            className="w-16 p-5 h-16 bg-[#222222] rounded-4xl"
          >
            <X className="text-white" />
          </button>
        </div>
        <p className="text-[#616161] font-light">
          Ao efetuar a compra, você vai receber acesso as informações
          credenciais da conta adquirida.
        </p>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="flex justify-between px-15 mb-5">
        <button className="border border-[#df8f60] px-8 py-2 rounded-2xl text-[19px]">Esvaziar Carrinho</button>
        <button>Comprar</button>
      </div>
    </div>
  );
};
