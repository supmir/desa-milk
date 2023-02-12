import {useRef } from "react"

export default function ItemCard(props) {
  const { product, cart, setCart } = props;
  const { id, name, image, options } = product;

  const qtyRef = useRef(null)

  return (
    <div className="flex flex-col border-2 border-[686667] px-1 py-3 h-full justify-center rounded-2xl gap-y-2">
      <img src={`products/${image}`} alt={`Image of ${name}`} />
      <div className="text-center font-bold uppercase">{name}</div>

      {options.map(({ price, desc }) => (
        <div key={desc}>
          <div className="text-center">{desc}</div>
          <div className="flex gap-x-1 justify-center"></div>
          <div className="text-center">RM{price.toFixed(2)}</div>
          <div className="flex rounded-full border-gray-600 border-2 w-2/3 mx-auto">
            <span className="inline-flex items-center px-3 rounded-l-full bg-gray-600 text-white text-sm" onClick={()=>{
              qtyRef.current.value=qtyRef.current.value-1
            }}>
              -
            </span>
            <input
              type="number"
              min="0"
              max="48"
              defaultValue="0"
              className="flex-1 block w-full text-sm border-black px-2 text-center"
              ref ={qtyRef}
              placeholder="0"
              
              onChange={(e) => {
                let qty = new Number(e.target.value);
                qty = qty > 48 ? 48 : (qty < 0 ? 0 : qty);
                e.target.value = qty

                const index = `${id}: ${name} - ${desc}`
                if (qty!=0){
                  setCart({
                    ...cart,
                    [index]: {
                      message: `${qty} x ${id}: ${name} - ${desc}`,
                      name: name,
                      desc: desc,
                      qty: qty,
                      price: price,
                    },
                  });
                }else{
                  const oldCart = {...cart};
                  delete oldCart[index]
                  setCart(oldCart)
                }
              }}
            />
            <span className="inline-flex items-center px-3 rounded-r-full bg-gray-600 text-white text-sm"onClick={()=>{
              qtyRef.current.value=qtyRef.current.value+1
            }}>
              +
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
