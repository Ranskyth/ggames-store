"use client"

import { ProdutoID } from "@/components/pages/produto_id";
import { getProdutosByid } from "@/hooks/Produtos";

import { useParams } from "next/navigation";

export default function Produtos() {
    const {id} = useParams()
    const list = getProdutosByid(Number(id))
  return (
    <ProdutoID produto={list}/>
  );
}
