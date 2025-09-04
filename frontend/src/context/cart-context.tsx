"use client"

import { createContext, ReactNode, useState } from "react";

interface Props {
  qtProdutos: number;
  addProduto: (id: number) => void;
  removerProduto: (id: number) => void;
}

export const CartContext = createContext({} as Props);

export const CartProvider = ({children}: {children:ReactNode}) => {
  const [qtProdutos, setQtProdutos] = useState<number>(0);

  const addProduto = () => {
    setQtProdutos((prev) => prev + 1);
  };

  const removerProduto = () => {
    setQtProdutos((prev) => prev - 1);
  };

  return (
    <CartContext value={{ addProduto, removerProduto, qtProdutos }}>{children}</CartContext>
  );
};
