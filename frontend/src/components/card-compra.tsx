/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import { getProdutos } from "@/hooks/Produtos";


export const CardCompra = () => {
  const list = getProdutos()
  return (
    <>
      {list.map((item, index) => (
        <Link href={`/produtos/${item.id}`} key={index}>
        
        <Card
          className="bg-[#333333] border-2 hover:scale-110 hover:duration-300 duration-300 flex w-full flex-col rounded-2xl overflow-hidden"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="items-start flex-col px-5 py-2">
            <p className="text-[#181818] font-semibold">{item.title}</p>
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center mt-3 w-12 h-12 rounded-2xl bg-[#4b4b4b]">
                <img src="/icon/compra.svg" alt="" />
              </div>
              <p className="text-default-500 font-semibold text-[#fff] text-[19px]">{item.price}</p>
            </div>
          </CardFooter>
        </Card>
        </Link>
      ))}
    </>
  );
};
