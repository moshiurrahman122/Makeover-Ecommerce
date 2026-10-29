"use client";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          Get Beauty Insider Access
        </h2>
        <p className="text-rose-100 text-lg mb-8 leading-relaxed">
          Join our community of beauty lovers and be the first to know about
          exclusive launches, secret sales, and expert beauty tips — delivered
          straight to your inbox.
        </p>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 rounded-full bg-white/95 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 text-sm font-medium shadow-sm"
          />
          <button
            type="submit"
            className="px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors duration-200 text-sm whitespace-nowrap shadow-sm"
          >
            Subscribe
          </button>
        </form>

        {/* Privacy note */}
        <p className="mt-4 text-rose-200 text-xs">
          By subscribing, you agree to our{" "}
          <a href="#" className="underline hover:text-white transition-colors">
            Privacy Policy
          </a>
          . Unsubscribe anytime. We respect your inbox — no spam, ever.
        </p>

        {/* Perks */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            "🎁 Exclusive Discounts",
            "💌 Early Access",
            "✨ Beauty Tips",
          ].map((perk) => (
            <span
              key={perk}
              className="text-white/90 text-sm font-medium flex items-center gap-1"
            >
              {perk}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
