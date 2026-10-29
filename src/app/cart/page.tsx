"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } =
    useCart();

  const shipping = totalPrice >= 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shipping + tax;

  const handleCheckout = () => {
    alert("Checkout coming soon! Thank you for shopping with Makeover Beauty. 💄");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50/50 to-white flex flex-col items-center justify-center px-4 py-24">
        <div className="text-center max-w-md">
          {/* Empty bag icon */}
          <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-rose-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
              />
              <line x1="3" y1="6" x2="21" y2="6" strokeWidth={1.5} />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 10a4 4 0 01-8 0"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Your cart is empty
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Looks like you haven&apos;t added anything to your cart yet.
            Discover our beautiful collection and treat yourself!
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-rose-200"
          >
            Continue Shopping
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-500 mt-1">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-gray-400 hover:text-rose-600 transition-colors duration-200 underline underline-offset-2"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-rose-50 p-5 flex gap-5 items-start"
              >
                {/* Thumbnail */}
                <Link href={`/products/${item.id}`} className="shrink-0">
                  <div
                    className={`bg-gradient-to-br ${item.gradient} w-20 h-20 rounded-xl flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-sm" />
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-medium text-rose-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <Link href={`/products/${item.id}`}>
                        <h3 className="font-semibold text-gray-900 leading-snug hover:text-rose-600 transition-colors mt-0.5">
                          {item.name}
                        </h3>
                      </Link>
                    </div>
                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="shrink-0 w-7 h-7 rounded-full hover:bg-rose-50 flex items-center justify-center text-gray-400 hover:text-rose-600 transition-colors duration-200"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-rose-400 hover:text-rose-600 transition-colors duration-200 font-bold"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-rose-400 hover:text-rose-600 transition-colors duration-200 font-bold"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-gray-400">
                          ${item.price.toFixed(2)} each
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium text-sm mt-2 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-rose-50 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>
                    Subtotal ({totalItems}{" "}
                    {totalItems === 1 ? "item" : "items"})
                  </span>
                  <span className="font-medium text-gray-900">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span
                    className={`font-medium ${shipping === 0 ? "text-emerald-600" : "text-gray-900"}`}
                  >
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                {shipping > 0 && (
                  <p className="text-xs text-rose-500 bg-rose-50 px-3 py-2 rounded-lg">
                    Add ${(50 - totalPrice).toFixed(2)} more for free shipping!
                  </p>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span className="font-medium text-gray-900">
                    ${tax.toFixed(2)}
                  </span>
                </div>

                <hr className="border-rose-100 my-2" />

                <div className="flex justify-between text-base font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-rose-600 text-lg">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-semibold py-4 rounded-2xl transition-colors duration-200 shadow-lg shadow-rose-200 text-sm tracking-wide"
              >
                Proceed to Checkout
              </button>

              {/* Security */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure & Encrypted Checkout
              </div>

              {/* Payment Icons */}
              <div className="mt-4 flex items-center justify-center gap-3">
                {["VISA", "MC", "AMEX", "PayPal"].map((method) => (
                  <div
                    key={method}
                    className="bg-gray-100 rounded px-2 py-1 text-xs font-bold text-gray-500"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
