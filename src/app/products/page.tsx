"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type SortOption = "default" | "price-asc" | "price-desc" | "rating" | "newest";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category") ?? "All";

  const [sortBy, setSortBy] = useState<SortOption>("default");

  const activeCategory =
    categories.includes(categoryParam as (typeof categories)[number])
      ? (categoryParam as (typeof categories)[number])
      : "All";

  const handleCategoryChange = (cat: string) => {
    if (cat === "All") {
      router.push("/products");
    } else {
      router.push(`/products?category=${cat}`);
    }
  };

  const filteredAndSorted = useMemo(() => {
    let result =
      activeCategory === "All"
        ? [...products]
        : products.filter((p) => p.category === activeCategory);

    switch (sortBy) {
      case "price-asc":
        result = result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result = result.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {activeCategory === "All" ? "All Products" : `${activeCategory} Collection`}
        </h1>
        <p className="text-gray-500 mt-2">
          {filteredAndSorted.length}{" "}
          {filteredAndSorted.length === 1 ? "product" : "products"} found
        </p>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-rose-600 text-white shadow-md shadow-rose-200"
                  : "bg-white text-gray-600 hover:text-rose-600 border border-gray-200 hover:border-rose-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 cursor-pointer"
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Products Grid */}
      {filteredAndSorted.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No products found
          </h3>
          <p className="text-gray-500">
            Try selecting a different category or check back soon for new
            arrivals.
          </p>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/30 to-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-100 to-pink-100 border-b border-rose-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Our Products
          </h1>
          <p className="text-gray-600">
            Premium beauty products for your everyday ritual.
          </p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-32">
            <div className="w-10 h-10 border-4 border-rose-200 border-t-rose-600 rounded-full animate-spin" />
          </div>
        }
      >
        <ProductsContent />
      </Suspense>
    </div>
  );
}
