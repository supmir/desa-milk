import { useRef, useEffect } from "react";

export default function InputButton(props) {
  const { id, name, cart, setCart, price, desc } = props;
  const qtyRef = useRef(null);

  function changeValue(amount) {
    let qty = new Number(qtyRef.current.value) + amount;
    qty = qty > 48 ? 48 : qty < 0 ? 0 : qty;
    qtyRef.current.value = qty;
    return qty;
  }

  function setValue() {
    let qty = new Number(qtyRef.current.value);
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
          message: `${qty} x ${id}: ${name} - ${desc}`,
          name: name,
          desc: desc,
          qty: qty,
          price: price,
        },
      });
    } else {
      const oldCart = { ...cart };
      delete oldCart[index];
      setCart(oldCart);
    }
  }

  useEffect(() => {
    qtyRef.current.value = localStorage.getItem(id + desc);
  }, []);
  return (
    <div className="flex rounded-full border-gray-600 border-2 w-2/3 mx-auto">
      <button
        className="inline-flex items-center px-3 rounded-l-full bg-gray-600 text-white text-sm"
        onClick={() => {
          const qty = changeValue(-1);
          updateCart(qty);
        }}
      >
        -
      </button>
      <input
        type="number"
        min="0"
        max="48"
        defaultValue="0"
        className="flex-1 block w-full text-sm border-black px-2 text-center"
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
        className="inline-flex items-center px-3 rounded-r-full bg-gray-600 text-white text-sm"
        onClick={() => {
          const qty = changeValue(1);
          updateCart(qty);
        }}
      >
        +
      </button>
    </div>
  );
}
