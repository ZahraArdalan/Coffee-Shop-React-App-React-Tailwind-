// src/components/CartModal.jsx
import React from "react";
import { useCart } from "../context/CartContext";

export default function CartModal() {
  const { cart, setIsCartOpen, isCartOpen, removeFromCart, changeQty } = useCart();

  if (!isCartOpen) return null;

  const totalPrice = cart.reduce((acc, item) => {
    // تبدیل اعداد فارسی به انگلیسی
    const englishPrice = String(item.price)
        .replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
        .replace(/,/g, "") // حذف کاماها

    const price = parseFloat(englishPrice) || 0;
    const qty = Number(item.qty) || 0;

    return acc + price * qty;
    }, 0);
  

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-[#fefaf5] w-75 lg:w-96 rounded-2xl p-6 shadow-lg relative">
        <button
          className="absolute top-3 right-4 text-gray-600 text-xl"
          onClick={() => setIsCartOpen(false)}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4 text-amber-900 text-center">
          سبد خرید شما
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">سبد خرید خالی است.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-[#f3ece1] p-3 rounded-lg"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-700">{item.price} تومان</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => changeQty(item.id, -1)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => changeQty(item.id, +1)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-sm"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <>
            <div className="text-right mt-4 font-semibold text-lg text-amber-900">
              جمع کل: {totalPrice.toLocaleString()} تومان
            </div>
            <button className="w-full bg-amber-950 text-white mt-4 py-2 rounded-lg hover:bg-amber-700">
              پرداخت
            </button>
          </>
        )}
      </div>
    </div>
  );
}
