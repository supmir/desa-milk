import ItemCard from "@/components/itemCard";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Fresh Milk",
      image: "FRESH-MILK-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mL", price: "RM 5" },
        { desc: "1L", price: "RM 10" },
      ],
    },
    {
      id: "2",
      name: "Henry Jones",
      image: "HENRY-JONES-1L-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mL", price: "RM 5" },
        { desc: "1L", price: "RM 10" },
      ],
    },
    {
      id: "3",
      name: "Low Fat",
      image: "LOW-FAT-1L-SIDE-VIEW-300x300.png",
      options: [{ desc: "1L", price: "RM 10" }],
    },
    {
      id: "4",
      name: "Cafe Latte",
      image: "UHT-CAFE-LATTE-200ML-SIDE-VIEW-300x300.png",
      options: [
        { desc: "200mL", price: "RM 5" },
        { desc: "1L", price: "RM 10" },
      ],
    },
    {
      id: "5",
      name: "Chocolate",
      image: "UHT-CHOCOLATE-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mL", price: "RM 5" },
        { desc: "1L", price: "RM 10" },
      ],
    },
    {
      id: "6",
      name: "Soy Chocolate",
      image: "UHT-CHOCOLATE-SOY-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mL", price: "RM 5" },
        { desc: "1L", price: "RM 10" },
      ],
    },
    {
      id: "7",
      name: "Kurma",
      image: "UHT-KURMA-FRONT-VIEW-300x300.png",
      options: [
        { desc: "200mL", price: "RM 5" },
        { desc: "1L", price: "RM 10" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="grid m-auto">
        <img
          src="page-1.jpg"
          className="object-contain h-5/6 sm:h-screen mx-auto"
        />
      </div>
      <div className="flex flex-col w-full m-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
          {products.map((product) => (
            <ItemCard product={product} key={product.id} />
          ))}
        </div>
        <div className="border-2 border-black rounded-xl px-2 py-1 mx-auto">
          WhatsApp
        </div>
      </div>
    </div>
  );
}
