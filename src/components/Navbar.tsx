"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-2xl font-bold text-rose-600 tracking-tight">
              Makeover
            </span>
            <span className="text-2xl font-light text-gray-500 tracking-wide">
              Beauty
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
          </div>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <Link href="/cart" className="relative p-2 group">
              <svg
                className="w-6 h-6 text-gray-700 group-hover:text-rose-600 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                />
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  strokeLinecap="round"
                  strokeWidth={1.8}
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M16 10a4 4 0 01-8 0"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors duration-200"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg
                  className="w-6 h-6"
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
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-rose-100 bg-white shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-rose-50 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-rose-50 font-medium transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-rose-50 font-medium transition-colors duration-200"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
