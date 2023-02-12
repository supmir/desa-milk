import ItemCard from "@/components/itemCard";
import { useState } from "react";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Fresh Milk",
      image: "FRESH-MILK-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mℓ", price: "RM5" },
        { desc: "1ℓ", price: "RM10" },
      ],
    },
    // {
    //   id: "2",
    //   name: "Henry Jones",
    //   image: "HENRY-JONES-1L-FRONT-VIEW-300x300.png",
    //   options: [
    //     { desc: "200mℓ", price: "RM5" },
    //     { desc: "1ℓ", price: "RM10" },
    //   ],
    // },
    // {
    //   id: "3",
    //   name: "Low Fat",
    //   image: "LOW-FAT-1L-SIDE-VIEW-300x300.png",
    //   options: [{ desc: "1ℓ", price: "RM10" }],
    // },
    // {
    //   id: "4",
    //   name: "Cafe Latte",
    //   image: "UHT-CAFE-LATTE-200ML-SIDE-VIEW-300x300.png",
    //   options: [
    //     { desc: "200mℓ", price: "RM5" },
    //     { desc: "1ℓ", price: "RM10" },
    //   ],
    // },
    {
      id: "5",
      name: "Chocolate",
      image: "UHT-CHOCOLATE-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mℓ", price: "RM5" },
        { desc: "1ℓ", price: "RM10" },
      ],
    },
    // {
    //   id: "6",
    //   name: "Soy Chocolate",
    //   image: "UHT-CHOCOLATE-SOY-FRONT-VIEW-300x300.png",
    //   options: [
    //     { desc: "200mℓ", price: "RM5" },
    //     { desc: "1ℓ", price: "RM10" },
    //   ],
    // },
    {
      id: "7",
      name: "Kurma",
      image: "UHT-KURMA-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mℓ", price: "RM5" },
        { desc: "1ℓ", price: "RM10" },
      ],
    },
  ];
  const [cart, setCart] = useState({});
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-2 gap-x-2">
      <div className="flex flex-col mx-auto max-h-screen">
        <img
          src="page-1.jpg"
          className="object-contain h-5/6 sm:h-screen mx-auto"
        />
        <div className="text-center visible block sm:hidden">
          Select your quantity and click order
        </div>
      </div>
      <div className="flex flex-col w-full m-auto h-screen sm:overflow-y-scroll">
        <div className="text-center visible hidden sm:block">
          Select your quantity and click order:
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {products.map((product) => (
            <ItemCard
              product={product}
              key={product.id}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
        <div className="h-10"></div>
        <button
          className="border-2 border-black rounded-xl px-2 py-1 mx-auto w-full"
          onClick={() => {
            let text = "Hello, I would like to order:\n";
            for (let [key, value] of Object.entries(cart)) {
              const { qty } = value;
              text += `${qty} x ${key}\n`;
            }
            window.location = `https://wa.me/60138603366?text=${encodeURIComponent(
              text
            )}`;
          }}
        >
          Order now
        </button>
        <div className="h-10"></div>
      </div>
    </div>
  );
}
