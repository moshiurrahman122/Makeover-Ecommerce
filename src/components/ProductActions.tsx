"use client";

import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors?.[0] ?? null
  );
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Color Selection */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Shade:{" "}
            <span className="font-normal text-gray-500">{selectedColor}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-transform duration-150 hover:scale-110 ${
                  selectedColor === color
                    ? "border-rose-500 scale-110 shadow-md"
                    : "border-white ring-1 ring-gray-300"
                }`}
                style={{ backgroundColor: color }}
                title={color}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-2">Quantity</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-rose-50 hover:border-rose-400 hover:text-rose-600 flex items-center justify-center transition-colors duration-200 font-bold text-lg"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-10 text-center font-semibold text-gray-900 text-lg">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-rose-50 hover:border-rose-400 hover:text-rose-600 flex items-center justify-center transition-colors duration-200 font-bold text-lg"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 rounded-2xl font-semibold text-base transition-all duration-200 ${
          added
            ? "bg-emerald-500 text-white"
            : "bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white shadow-lg shadow-rose-200 hover:shadow-rose-300"
        }`}
      >
        {added ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Added to Cart!
          </span>
        ) : (
          `Add to Cart — $${(product.price * quantity).toFixed(2)}`
        )}
      </button>

      {/* Wishlist / Share */}
      <div className="flex gap-3">
        <button className="flex-1 py-3 border border-gray-200 rounded-2xl text-gray-600 hover:border-rose-400 hover:text-rose-600 hover:bg-rose-50 font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Wishlist
        </button>
        <button className="flex-1 py-3 border border-gray-200 rounded-2xl text-gray-600 hover:border-rose-400 hover:text-rose-600 hover:bg-rose-50 font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>
    </div>
  );
}
