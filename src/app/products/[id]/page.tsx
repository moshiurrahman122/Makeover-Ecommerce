import { products } from "@/data/products";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import ProductActions from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-amber-500 text-white",
  New: "bg-emerald-500 text-white",
  Sale: "bg-rose-600 text-white",
  Limited: "bg-purple-600 text-white",
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-rose-50 px-4">
        <div className="text-7xl mb-6">🔍</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Product Not Found
        </h1>
        <p className="text-gray-500 mb-8 text-center">
          We could not find the product you are looking for. It may have been
          removed or the link is incorrect.
        </p>
        <Link
          href="/products"
          className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-rose-50 border-b border-rose-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-rose-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-rose-600 transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/products?category=${product.category}`}
              className="hover:text-rose-600 transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image */}
          <div className="relative">
            <div
              className={`bg-gradient-to-br ${product.gradient} aspect-square rounded-3xl shadow-xl overflow-hidden flex items-center justify-center`}
            >
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-white/30 backdrop-blur-sm" />
                </div>
              </div>
              <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/15" />
              <div className="absolute bottom-12 left-8 w-10 h-10 rounded-full bg-white/15" />
              <div className="absolute top-16 left-16 w-8 h-8 rounded-full bg-white/10" />
            </div>
            {/* Badge */}
            {product.badge && (
              <span
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  badgeColors[product.badge] ?? "bg-gray-700 text-white"
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center space-y-5">
            {/* Category Tag */}
            <span className="inline-block text-sm font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full w-fit">
              {product.category}
            </span>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating
              rating={product.rating}
              reviews={product.reviews}
              size="lg"
            />

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-rose-100 text-rose-700 text-sm font-bold px-2.5 py-1 rounded-full">
                    Save{" "}
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    %
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Divider */}
            <hr className="border-rose-100" />

            {/* Interactive Actions — Client Component */}
            <ProductActions product={product} />

            {/* Shipping Info */}
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free shipping over $50
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                30-day returns
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Secure checkout
              </span>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                You May Also Like
              </h2>
              <Link
                href={`/products?category=${product.category}`}
                className="text-rose-600 hover:text-rose-700 text-sm font-semibold"
              >
                View all {product.category} →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
