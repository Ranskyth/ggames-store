"use client"
import { Image } from "@heroui/image"
import { Card, CardBody, CardFooter } from "@heroui/card"

const list = [
    {
      title: "Orange",
      img: "https://picsum.photos/800",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://picsum.photos/800",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://picsum.photos/800",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://picsum.photos/800",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://picsum.photos/800",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://picsum.photos/800",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://picsum.photos/800",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "https://picsum.photos/800",
      price: "$12.20",
    },
  ];


export const CardCompra = () => {
    return (
    <>
      {list.map((item, index) => (
        <Card key={index} className="bg-[#333333] flex flex-col rounded-2xl overflow-hidden">
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
          <CardFooter className="text-small px-5 py-2 justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}