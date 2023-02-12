import { Fragment } from "react";

export default function ItemCard(props) {
  const { product } = props;
  const { name, image, options } = product;
  console.log(options);
  return (
    <div className="flex flex-col gap-y-2 border-2 border-black px-1 py-3 h-full justify-center">
      <img src={`products/${image}`} />
      <div className="text-center">{name}</div>

      {options.map(({ price, desc }) => (
        <Fragment>
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
                id="item"
                min="0"
                className="flex-1 block w-full rounded-r-full text-sm border-black px-2"
                placeholder="5"
              />
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
