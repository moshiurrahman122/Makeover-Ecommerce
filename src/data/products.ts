import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Velvet Matte Foundation",
    price: 42.0,
    originalPrice: 55.0,
    category: "Face",
    description:
      "A luxurious full-coverage foundation that blurs imperfections and creates a flawless velvet-matte finish. Infused with skincare ingredients including hyaluronic acid for all-day hydration. Buildable coverage that feels weightless on skin.",
    rating: 4.8,
    reviews: 342,
    badge: "Best Seller",
    colors: ["#F5D5B8", "#D4956A", "#8B5E3C", "#4A2C17", "#C68642"],
    gradient: "from-orange-100 to-rose-200",
  },
  {
    id: "2",
    name: "Petal Blush Duo",
    price: 28.0,
    category: "Face",
    description:
      "A silky-smooth blush duo featuring two complementary shades for natural-looking warmth and radiance. The finely-milled formula blends effortlessly for a buildable, long-lasting flush. Perfect for both day and evening looks.",
    rating: 4.6,
    reviews: 187,
    badge: "New",
    colors: ["#F4A7B9", "#E07090"],
    gradient: "from-rose-200 to-pink-300",
  },
  {
    id: "3",
    name: "Luminous Setting Powder",
    price: 35.0,
    category: "Face",
    description:
      "A translucent setting powder that locks in makeup for up to 16 hours while adding a soft-focus luminous finish. The ultra-fine formula controls shine without flashback for flawless photos. Suitable for all skin tones.",
    rating: 4.7,
    reviews: 256,
    gradient: "from-amber-100 to-orange-200",
  },
  {
    id: "4",
    name: "Satin Lip Rouge",
    price: 22.0,
    originalPrice: 28.0,
    category: "Lips",
    description:
      "A richly pigmented lip color with a satin finish that glides on smoothly and stays put for hours. Infused with vitamin E and jojoba oil to keep lips moisturized throughout the day. Available in a range of stunning shades.",
    rating: 4.9,
    reviews: 498,
    badge: "Best Seller",
    colors: ["#C0392B", "#E91E8C", "#8B1A4A", "#FF6B9D", "#A52A2A"],
    gradient: "from-rose-400 to-pink-600",
  },
  {
    id: "5",
    name: "Plumping Gloss",
    price: 18.0,
    category: "Lips",
    description:
      "A volumizing lip gloss that delivers an instant plumping effect with a high-shine, non-sticky formula. Contains peptides and hyaluronic acid to enhance lip fullness over time. Leaves lips looking irresistibly full and luscious.",
    rating: 4.5,
    reviews: 163,
    badge: "New",
    colors: ["#FFB6C1", "#FF69B4", "#DB7093"],
    gradient: "from-pink-300 to-rose-400",
  },
  {
    id: "6",
    name: "Lip Liner Perfector",
    price: 16.0,
    category: "Lips",
    description:
      "A creamy, long-wearing lip liner that defines, shapes, and prevents feathering for a perfectly polished look. The smooth formula allows for effortless blending and can be used all over the lips as a base. Pairs beautifully with any lip color.",
    rating: 4.4,
    reviews: 89,
    colors: ["#8B1A4A", "#C0392B", "#E91E8C", "#A52A2A"],
    gradient: "from-rose-500 to-red-600",
  },
  {
    id: "7",
    name: "Smoky Eye Palette",
    price: 48.0,
    originalPrice: 65.0,
    category: "Eyes",
    description:
      "An expertly curated palette of 12 highly-pigmented eyeshadows ranging from nude mattes to dramatic shimmers. The buttery formula blends seamlessly for endless look possibilities from day to night. Includes a signature mirror and dual-ended brush.",
    rating: 4.8,
    reviews: 421,
    badge: "Sale",
    colors: ["#2C1810", "#8B4513", "#D2691E", "#C0C0C0", "#B8860B"],
    gradient: "from-purple-400 to-indigo-600",
  },
  {
    id: "8",
    name: "Lengthening Mascara",
    price: 26.0,
    category: "Eyes",
    description:
      "A volumizing and lengthening mascara that dramatically enhances lashes for a wide-awake, striking look. The buildable formula resists smudging and flaking for wear that lasts all day. Infused with lash-conditioning agents for healthier lashes over time.",
    rating: 4.7,
    reviews: 378,
    badge: "Best Seller",
    gradient: "from-gray-700 to-purple-900",
  },
  {
    id: "9",
    name: "Precision Liner",
    price: 20.0,
    category: "Eyes",
    description:
      "An ultra-fine liquid eyeliner that delivers precise, clean lines every time with its expert-tip applicator. The intensely pigmented, waterproof formula stays put through heat and humidity without smudging. Perfect for creating everything from a subtle wing to dramatic cat-eye.",
    rating: 4.6,
    reviews: 215,
    gradient: "from-slate-800 to-indigo-900",
  },
  {
    id: "10",
    name: "Hydra-Glow Serum",
    price: 68.0,
    originalPrice: 85.0,
    category: "Skincare",
    description:
      "A powerful hydrating serum packed with 3 forms of hyaluronic acid to deeply hydrate and plump skin. Niacinamide brightens and evens skin tone while ceramides strengthen the skin barrier for resilient, glowing skin. Suitable for all skin types including sensitive.",
    rating: 4.9,
    reviews: 512,
    badge: "Best Seller",
    gradient: "from-teal-200 to-cyan-400",
  },
  {
    id: "11",
    name: "Rose Petal Face Cream",
    price: 52.0,
    category: "Skincare",
    description:
      "A luxurious moisturizer enriched with real rose petal extract, squalane, and peptides for deeply nourished, youthful-looking skin. The velvety texture absorbs instantly without greasiness, leaving skin soft and radiant. Clinically tested to improve hydration by 200% in 24 hours.",
    rating: 4.7,
    reviews: 298,
    badge: "New",
    gradient: "from-rose-100 to-teal-200",
  },
  {
    id: "12",
    name: "Bloom Eau de Parfum",
    price: 95.0,
    originalPrice: 120.0,
    category: "Fragrance",
    description:
      "An enchanting floral fragrance that opens with sparkling bergamot and peony, transitions through a heart of jasmine and rose, and settles into a warm base of musk and sandalwood. Long-lasting sillage that evolves beautifully throughout the day. A signature scent for the modern, confident woman.",
    rating: 4.8,
    reviews: 267,
    badge: "Limited",
    gradient: "from-pink-200 to-purple-400",
  },
];

export const categories = [
  "All",
  "Face",
  "Lips",
  "Eyes",
  "Skincare",
  "Fragrance",
] as const;

export type Category = (typeof categories)[number];
