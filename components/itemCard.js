export default function ItemCard(props) {
  const { product, cart, setCart } = props;
  const { id, name, image, options } = product;
  return (
    <div className="flex flex-col border-2 border-[686667] px-1 py-3 h-full justify-center rounded-2xl gap-y-2">
      <img src={`products/${image}`} alt={`Image of ${name}`} />
      <div className="text-center font-bold">{name}</div>

      {options.map(({ price, desc }) => (
        <div key={desc}>
          <div className="text-center">{desc}</div>
          <div className="flex gap-x-1 justify-center"></div>
          <div className="text-center">{price}</div>
          <div className="flex rounded-full border-gray-600 border-2 ">
            <span className="inline-flex items-center px-3 rounded-l-full bg-gray-600 text-white">
              Qty
            </span>
            <input
              type="number"
              min="0"
              className="flex-1 block w-full rounded-r-full text-sm border-black px-2 text-center"
              placeholder="0"
              onChange={(e) => {
                const qty = e.target.value;
                setCart({
                  ...cart,
                  [`${id}: ${name} - ${desc}`]: {
                    qty: qty,
                  },
                });
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
