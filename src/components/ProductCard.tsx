"use client";

import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";

interface ProductCardProps {
  product: Product;
}

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-amber-500 text-white",
  New: "bg-emerald-500 text-white",
  Sale: "bg-rose-600 text-white",
  Limited: "bg-purple-600 text-white",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group border border-rose-50">
      {/* Image Area */}
      <Link href={`/products/${product.id}`} className="block relative">
        <div
          className={`bg-gradient-to-br ${product.gradient} h-48 relative overflow-hidden`}
        >
          {/* Decorative circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm" />
            </div>
          </div>
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20" />
          <div className="absolute bottom-4 left-4 w-5 h-5 rounded-full bg-white/20" />
          {/* Group hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              badgeColors[product.badge] ?? "bg-gray-700 text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
      </Link>

      {/* Card Body */}
      <div className="p-4">
        {/* Category */}
        <span className="text-xs font-medium text-rose-500 uppercase tracking-wider">
          {product.category}
        </span>

        {/* Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="mt-1 font-semibold text-gray-900 leading-snug hover:text-rose-600 transition-colors duration-200 line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2.5">
            {product.colors.slice(0, 5).map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200 hover:scale-110 transition-transform duration-150 cursor-pointer"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
            {product.colors.length > 5 && (
              <span className="text-xs text-gray-400">
                +{product.colors.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          {product.originalPrice && (
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-full">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              % off
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 text-sm tracking-wide"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
