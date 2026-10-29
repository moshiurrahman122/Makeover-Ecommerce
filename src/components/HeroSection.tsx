import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 overflow-hidden flex items-center">
      {/* Background decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-16 w-[500px] h-[500px] bg-pink-200/50 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-100/60 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-rose-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-rose-700 text-sm font-medium">
              New Collection 2025
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-gray-800">Discover</span>
            <br />
            <span className="text-gray-800">Your</span>{" "}
            <span className="text-rose-600 italic font-bold">Beauty</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
            Indulge in premium cosmetics and skincare crafted with the finest
            ingredients. From radiant foundations to bold lip colors — find your
            signature look and let your confidence shine.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-rose-200"
            >
              Shop Now
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
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-rose-400 text-rose-600 hover:bg-rose-50 font-semibold px-8 py-3.5 rounded-full transition-colors duration-200"
            >
              Explore Collection
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-gray-600 font-medium">Cruelty-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm text-gray-600 font-medium">Dermatologist Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-sm text-gray-600 font-medium">Free Shipping $50+</span>
            </div>
          </div>
        </div>

        {/* Right: Decorative Visual */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-96 h-96">
            {/* Main circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-pink-500 rounded-full opacity-20 blur-xl" />
            <div className="absolute inset-8 bg-gradient-to-br from-rose-200 to-pink-400 rounded-full shadow-2xl flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">💄</div>
                  <div className="text-white font-bold text-lg drop-shadow-lg">
                    Premium Beauty
                  </div>
                </div>
              </div>
            </div>
            {/* Floating product bubbles */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full shadow-lg flex items-center justify-center text-2xl">
              ✨
            </div>
            <div className="absolute -bottom-2 -left-6 w-16 h-16 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-full shadow-lg flex items-center justify-center text-xl">
              👁️
            </div>
            <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-br from-teal-200 to-cyan-400 rounded-full shadow-lg flex items-center justify-center text-xl">
              🌸
            </div>
            <div className="absolute -top-8 left-8 w-12 h-12 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full shadow-lg flex items-center justify-center text-lg">
              👄
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
