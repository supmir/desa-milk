import { useEffect, useState } from "react";

export default function Cart(props) {
  const { cart, setCart } = props;
  const [discounts, setDiscounts] = useState([]);

  function cartQty() {
    return cart &&
      Object.keys(cart).length === 0 &&
      Object.getPrototypeOf(cart) === Object.prototype
      ? 0
      : Object.entries(cart).reduce((total, [key, { qty }]) => total + qty, 0);
  }

  function cartTotal() {
    return cartQty() === 0
      ? 0
      : Object.entries(cart).reduce(
          (total, [key, { qty, price }]) => total + qty * price,
          0
        );
  }
  function discountQty() {
    return discounts &&
      Object.keys(discounts).length === 0 &&
      Object.getPrototypeOf(discounts) === Object.prototype
      ? 0
      : Object.entries(discounts).reduce((total, [key, {}]) => total + 1, 0);
  }

  function discountTotal() {
    return discountQty() === 0
      ? 0
      : Object.entries(discounts).reduce(
          (total, [key, { price }]) => total + price,
          0
        );
  }

  useEffect(() => {
    if (cartQty() >= 6) {
      setDiscounts({
        ...discounts,
        DESAFEB6: {
          name: "10% off (above 6 items)",
          price: cartTotal() * 0.1,
        },
      });
    } else {
      setDiscounts({});
    }
  }, [cart]);

  return (
    <table className="">
      <thead>
        <tr className="border-0 border-b-4 border-black">
          <th className="text-left w-full px-4">Item</th>
          <th className="text-center">Qty</th>
          <th className="text-right px-4">Amount</th>
        </tr>
      </thead>
      <tbody>
        {cartQty() === 0 && (
          <tr>
            <td colSpan="3" className="text-center">
              No items added yet...
            </td>
          </tr>
        )}
        {Object.entries(cart).map(([key, { name, desc, qty, price }]) => (
          <tr key={key} className="border border-0 border-b-2 border-black">
            <td className="text-left px-4">
              {name} - {desc}
            </td>
            <td className="text-center">{qty.toString()}</td>
            <td className="text-right px-4">RM{(qty * price).toFixed(2)}</td>
          </tr>
        ))}
        {Object.entries(discounts).map(([key, { name, price }]) => (
          <tr
            key={key}
            className="border border-0 border-b-2 border-black bg-amber-100"
          >
            <td className="text-left px-4">
              {key} - {name}
            </td>
            <td className="text-center"></td>
            <td className="text-right px-4">-RM{price.toFixed(2)}</td>
          </tr>
        ))}
        {cartQty() < 6 && cartQty() !== 0 && (
          <tr>
            <td colSpan="3" className="text-center">
              Add {6 - cartQty()} more items to get a discount
            </td>
          </tr>
        )}
      </tbody>
      {cartQty() !== 0 && (
        <tfoot>
          <tr>
            <td></td>
            <td className="text-right font-bold">TOTAL</td>
            <td className="text-right px-4">
              RM{(cartTotal() - discountTotal()).toFixed(2)}
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}
