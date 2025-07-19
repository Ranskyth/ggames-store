"use client"
import { list } from "@/components/card-compra";
import { ProdutoID } from "@/components/pages/produto_id";
import { ProdutosPage } from "@/components/pages/produtos";
import { useParams } from "next/navigation";

export default function Produtos() {
    const {id} = useParams()
    const lista = list.filter(l => l.id === id)
    console.log(lista)
  return (
    <ProdutoID produto={lista}/>
  );
}
