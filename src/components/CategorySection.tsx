import Link from "next/link";

const categories = [
  {
    name: "Face",
    emoji: "💄",
    gradient: "from-orange-200 to-rose-300",
    hoverGradient: "hover:from-orange-300 hover:to-rose-400",
  },
  {
    name: "Lips",
    emoji: "👄",
    gradient: "from-rose-300 to-pink-500",
    hoverGradient: "hover:from-rose-400 hover:to-pink-600",
  },
  {
    name: "Eyes",
    emoji: "👁️",
    gradient: "from-purple-300 to-indigo-500",
    hoverGradient: "hover:from-purple-400 hover:to-indigo-600",
  },
  {
    name: "Skincare",
    emoji: "✨",
    gradient: "from-teal-200 to-cyan-400",
    hoverGradient: "hover:from-teal-300 hover:to-cyan-500",
  },
  {
    name: "Fragrance",
    emoji: "🌸",
    gradient: "from-pink-200 to-purple-300",
    hoverGradient: "hover:from-pink-300 hover:to-purple-400",
  },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Shop by Category
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Explore our curated collections and find the perfect products for
            every part of your beauty routine.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/products?category=${cat.name}`}
              className={`group bg-gradient-to-br ${cat.gradient} ${cat.hoverGradient} rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md aspect-square`}
            >
              <span className="text-4xl sm:text-5xl">{cat.emoji}</span>
              <div className="text-center">
                <span className="block font-bold text-white text-base drop-shadow-sm">
                  {cat.name}
                </span>
                <span className="block text-white/80 text-xs font-medium mt-0.5 group-hover:text-white transition-colors duration-200">
                  Shop →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
