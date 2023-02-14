import InputButton from "./inputButton";

export default function ItemCard(props) {
  const { product, cart, setCart } = props;
  const { id, name, image, options } = product;

  return (
    <div className="flex flex-col border-2 border-[#686667] px-1 py-3 h-full justify-center rounded-2xl gap-y-2">
      <img src={`products/${image}`} alt={`Image of ${name}`} />
      <div className="text-center font-bold uppercase">{name}</div>

      {options.map(({ price, desc }) => (
        <div key={desc}>
          <div className="text-center">{desc}</div>
          <div className="flex gap-x-1 justify-center"></div>
          <div className="text-center">RM{price.toFixed(2)}</div>
          <InputButton
            id={id}
            name={name}
            image={image}
            cart={cart}
            setCart={setCart}
            price={price}
            desc={desc}
          />
        </div>
      ))}
    </div>
  );
}
