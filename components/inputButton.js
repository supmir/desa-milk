import { Decimal } from "decimal.js";
import { useRef, useEffect } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

export default function InputButton(props) {
  const { id, name, cart, setCart, price, desc } = props;
  const qtyRef = useRef(null);

  function changeValue(amount) {
    let qty = new Decimal(qtyRef.current.value).plus(new Decimal(amount));
    qty = qty > 48 ? 48 : qty < 0 ? 0 : qty;
    qtyRef.current.value = qty;
    return qty;
  }

  function setValue() {
    let qty = new Decimal(qtyRef.current.value || 0);
    qty = qty > 48 ? 48 : qty < 0 ? 0 : qty;
    qtyRef.current.value = qty;
    return qty;
  }

  function updateCart(qty) {
    const index = `${id}: ${name} - ${desc}`;
    localStorage.setItem(id + desc, qty);
    if (qty != 0) {
      setCart({
        ...cart,
        [index]: {
          message: `${qty} x ${id}: ${name} - ${desc} : RM${qty
            .times(price)
            .toFixed(2)}`,
          id: id,
          name: name,
          desc: desc,
          qty: qty,
          price: price,
          total: qty.times(price),
        },
      });
    } else {
      const oldCart = { ...cart };
      delete oldCart[index];
      setCart(oldCart);
    }
  }

  useEffect(() => {
    // qtyRef.current.value = localStorage.getItem(id + desc);
  }, []);
  return (
    <div className="flex w- mx-auto gap-x-1">
      <button
        className="inline items-center w-8 h-8 text-center rounded-full bg-gray-600 text-white text-sm p-1"
        onClick={() => {
          const qty = changeValue(-1);
          updateCart(qty);
        }}
      >
        <MinusIcon />
      </button>
      <input
        type="number"
        min="0"
        max="48"
        defaultValue="0"
        className="flex-1 block w-full text-sm border-black text-center rounded-full border-gray-600 border-2"
        ref={qtyRef}
        placeholder="0"
        onChange={(e) => {
          //   let qty = new Number(e.target.value);
          //   qty = qty > 48 ? 48 : qty < 0 ? 0 : qty;
          const qty = setValue(e);
          updateCart(qty);
        }}
      />
      <button
        className="inline items-center w-8 h-8 text-center rounded-full bg-gray-600 text-white text-sm p-1"
        onClick={() => {
          const qty = changeValue(1);
          updateCart(qty);
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
