/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { BACKEND_API } from "@/config/config"
import axios from "axios"
import { useEffect, useState } from "react"

export const getProdutos = () => {
    const [produto, setProduto] = useState<{ id: string; title: string; img: string; price: string; estoque: number; }[]>([])
    useEffect(() => {
        (async() => {
            const res = await axios(`${BACKEND_API}/produto`)
            console.log("res -> ",res.data)
            setProduto(res.data)
        })()
    },[])

    return produto
}

export const getProdutosByid = (id: number) => {
        const [produto, setProduto] = useState<{ id: string; title: string; img: string; price: string; estoque: number; }[]>([])
    useEffect(() => {
        (async() => {
            const res = await axios(`${BACKEND_API}/produto/${id}`)
            console.log("res -> ", res.data)
            setProduto(res.data)
        })()
    },[])

    return produto
}