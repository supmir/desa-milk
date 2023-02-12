import { Fragment } from "react";

export default function ItemCard(props) {
  const { product, cart, setCart } = props;
  const { id, name, image, options } = product;
  return (
    <div className="flex flex-col gap-y-2 border-2 border-black px-1 py-3 h-full justify-center">
      <img src={`products/${image}`} alt={`Image of ${name}`} />
      <div className="text-center">{name}</div>

      {options.map(({ price, desc }) => (
        <Fragment key={desc}>
          <div className="flex gap-x-1 justify-center">
            <div>{desc}</div>
            <div>{price}</div>
          </div>
          <div>
            <div className="flex rounded-full border-black border-2 ">
              <span className="inline-flex items-center px-3 rounded-l-full bg-black text-white">
                Qty
              </span>
              <input
                type="number"
                min="0"
                className="flex-1 block w-full rounded-r-full text-sm border-black px-2"
                placeholder="0"
                onChange={(e) => {
                  const qty = e.target.value;
                  setCart({
                    ...cart,
                    [`${id} - ${desc}`]: {
                      qty: qty,
                    },
                  });
                }}
              />
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
