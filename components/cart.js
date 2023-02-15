import Decimal from "decimal.js";
import { useEffect, useState } from "react";

export default function Cart(props) {
  const {
    cart,
    cartTotalState,
    setCartTotalState,
    discounts,
    setDiscounts,
    discountTotalState,
    setDiscountTotalState,
    total,
    setTotal,
  } = props;

  function cartQty() {
    return cart &&
      Object.keys(cart).length === 0 &&
      Object.getPrototypeOf(cart) === Object.prototype
      ? 0
      : Object.entries(cart).reduce((total, [key, { qty }]) => total + qty, 0);
  }

  function cartTotal() {
    return cartQty() === 0
      ? new Decimal(0)
      : Object.entries(cart).reduce(
          (total, [key, { qty, price }]) => total.plus(qty.times(price)),
          new Decimal(0)
        );
  }

  function discountTotal() {
    return Object.entries(discounts).reduce(
      (total, [key, { price }]) => total.plus(price),
      new Decimal(0)
    );
  }

  useEffect(() => {
    const tempCartTotal = cartTotal();
    setCartTotalState(tempCartTotal);
    let new_discounts = {};
    if (cartQty() >= 6) {
      new_discounts = {
        ...discounts,
        DESAFEB6: {
          name: "10% off (6 items or above) / Diskaun 10% (6 barangan atau lebih)",
          price: cartTotal().times(0.1),
        },
      };
    }
    setDiscounts(new_discounts);
  }, [cart]);

  useEffect(() => {
    const tempDiscount = discountTotal();
    setDiscountTotalState(tempDiscount);
  }, [discounts]);

  useEffect(() => {
    setTotal(cartTotal().minus(discountTotal()));
  }, [cartTotalState, discountTotalState]);

  return (
    <table className="table-auto border border-0 border-b-2 border-black">
      <thead>
        <tr className="border-0 border-b-4 border-black">
          <th className="text-left w-full px-4">Item / Barangan</th>
          <th className="text-center">Qty</th>
          <th className="text-right px-4">Amount</th>
        </tr>
      </thead>
      <tbody>
        {cartQty() === 0 && (
          <tr>
            <td colSpan="3" className="text-center">
              No items added yet... / Belum ada barangan...
            </td>
          </tr>
        )}
        {Object.entries(cart).map(([key, { name, desc, qty, total }]) => (
          <tr key={key} className="border border-0 border-b-2 border-black">
            <td className="text-left px-4">
              {name} - {desc}
            </td>
            <td className="text-center">{qty.toString()}</td>
            <td className="text-right px-4">RM{total.toFixed(2)}</td>
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
            <td className="text-right px-4 whitespace-nowrap">
              -RM{price.toFixed(2)}
            </td>
          </tr>
        ))}
        {cartQty() < 6 && cartQty() !== 0 && (
          <tr>
            <td colSpan="3" className="text-center">
              Add {6 - cartQty()} more items to get a discount / Tambah{" "}
              {6 - cartQty()} lagi barangan untuk mendapat diskaun
            </td>
          </tr>
        )}
      </tbody>
      {cartQty() !== 0 && (
        <tfoot>
          <tr className="border border-0 border-y-4 border-black">
            <td colspan="2" className="text-right font-bold">
              TOTAL / JUMLAH
            </td>
            <td className="text-right px-4">RM{total.toFixed(2)}</td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}
