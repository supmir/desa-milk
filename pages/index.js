import ItemCard from "@/components/itemCard";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Fresh / Segar",
      image: "FRESH-MILK-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mℓ", price: "RM5" },
        { desc: "1000mℓ", price: "RM10" },
      ],
    },
    // {
    //   id: "2",
    //   name: "Henry Jones",
    //   image: "HENRY-JONES-1L-FRONT-VIEW-300x300.png",
    //   options: [
    //     { desc: "200mℓ", price: "RM5" },
    //     { desc: "1000mℓ", price: "RM10" },
    //   ],
    // },
    // {
    //   id: "3",
    //   name: "Low Fat",
    //   image: "LOW-FAT-1L-SIDE-VIEW-300x300.png",
    //   options: [{ desc: "1000mℓ", price: "RM10" }],
    // },
    // {
    //   id: "4",
    //   name: "Cafe Latte",
    //   image: "UHT-CAFE-LATTE-200ML-SIDE-VIEW-300x300.png",
    //   options: [
    //     { desc: "200mℓ", price: "RM5" },
    //     { desc: "1000mℓ", price: "RM10" },
    //   ],
    // },
    {
      id: "5",
      name: "Chocolate",
      image: "UHT-CHOCOLATE-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mℓ", price: "RM5" },
        { desc: "1000mℓ", price: "RM10" },
      ],
    },
    // {
    //   id: "6",
    //   name: "Soy Chocolate",
    //   image: "UHT-CHOCOLATE-SOY-FRONT-VIEW-300x300.png",
    //   options: [
    //     { desc: "200mℓ", price: "RM5" },
    //     { desc: "1000mℓ", price: "RM10" },
    //   ],
    // },
    {
      id: "7",
      name: "Dates / Kurma",
      image: "UHT-KURMA-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mℓ", price: "RM5" },
        { desc: "1000mℓ", price: "RM10" },
      ],
    },
  ];
  const [cart, setCart] = useState({});
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-2 gap-x-2">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </Head>
      <div className="flex flex-col mx-auto max-h-screen">
        <img
          src="page-1.png"
          className="object-contain h-5/6 sm:h-screen mx-auto"
        />
        <div className="text-center visible block sm:hidden">
          Select quantity & click <span className="italic">Order Now:</span>
        </div>
        <div className="text-center visible block sm:hidden">
          Pilih kuantiti & klik <span className="italic">Pesan Sekarang:</span>
        </div>
      </div>
      <div className="flex flex-col w-full m-auto h-screen sm:overflow-y-scroll">
        <div className="text-center visible hidden sm:block">
          Select quantity & click <span className="italic">Order Now:</span>
        </div>
        <div className="text-center visible hidden sm:block">
          Pilih kuantiti & klik <span className="italic">Pesan Sekarang:</span>
        </div>
        <div className="h-4"></div>
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
        <button
          className="rounded-xl px-2 py-1 mx-auto w-full flex justify-center bg-gray-600 text-white gap-x-2 my-3"
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
          <span className="inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
              fill="currentColor"
            >
              <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" />
            </svg>
          </span>

          <div className="my-auto">Order Now / Pesan Sekarang</div>
        </button>
      </div>
    </div>
  );
}
