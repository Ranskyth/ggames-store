"use client";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";

export const list = [
  {
    id: "1",
    title: "Orange",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$5.50",
  },
  {
    id: "2",
    title: "Tangerine",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$3.00",
  },
  {
    id: "3",
    title: "Raspberry",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$10.00",
  },
  {
    id: "4",
    title: "Lemon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$5.30",
  },
  {
    id: "5",
    title: "Avocado",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$15.70",
  },
  {
    id: "6",
    title: "Lemon 2",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$8.00",
  },
  {
    id: "7",
    title: "Banana",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$7.50",
  },
  {
    id: "8",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "9",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "10",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "11",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "12",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "13",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "14",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "15",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "16",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "17",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "18",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "19",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
  {
    id: "20",
    title: "Watermelon",
    img: "https://picsum.photos/800",
    estoque:100,
    price: "$12.20",
  },
];

export const CardCompra = () => {
  return (
    <>
      {list.map((item, index) => (
        <Link href={`/produtos/${item.id}`} key={index}>
        
        <Card
          className="bg-[#333333] hover:scale-110 hover:duration-300 duration-300 flex w-full flex-col rounded-2xl overflow-hidden"
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
                <img src="./icon/compra.svg" alt="" />
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
