"use client"
import { getProdutos } from "@/hooks/Produtos"
import { Banner } from "../banner"
import { CardCompra } from "../card-compra"

export const HomePage = () => {
    getProdutos()
    return(
        <div>
            <div className="flex mt-5 justify-center">
                <Banner/>
            </div>
            <div className="px-20 mt-20">
                <h1 className="text-[2rem]">Contas</h1>
                <div className="grid mt-10 max-[1220px]:grid-cols-5 max-[920px]:grid-cols-3 max-[720px]:grid-cols-2 max-[450px]:grid-cols-1 grid-cols-5 gap-5">
                    <CardCompra/>
                </div>
            </div>
        </div>
    )
}