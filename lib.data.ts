// lib.data.ts (updated for Lunver-Shop with profit pricing)
export type Product = {
  id: string;
  name: string;
  image: string;          // path under /public
  category: string;
  colors?: string[];
  sizes?: string[];
  rating?: number;
  reviewsCount?: number;
  description: string;
  shipping?: string;

  // $$$
  cost: number;           // supplier cost (USD)
  price: number;          // your selling price (USD)
  compareAtPrice?: number; // optional strike-through price
};

const products: Product[] = [
  {
    id: "jumpsuit-1379-purple",
    name: "Fitness Backless Halter Jumpsuit (Push-Up)",
    image: "/assets/products/jumpsuit-1379-purple.jpg",
    category: "Bodysuits & Jumpsuits",
    colors: ["White", "Black", "1379 Purple"],
    sizes: ["S", "M", "L", "XL"],
    rating: 5.0,
    reviewsCount: 15,
    shipping: "USPS/FedEx • ETA Sep 04–08 • Free returns 15 days",
    description:
      "Sexy one-piece halter jumpsuit with open back and push-up fit. Stretch fabric for fitness or nights out.",
    cost: 10.65,
    price: 29.99,
    compareAtPrice: 39.99
  },
  {
    id: "bikini-brown",
    name: "Triangle Tie-Side Bikini Set (Solid)",
    image: "/assets/products/bikini-brown.jpg",
    category: "Bikinis",
    colors: ["Brown", "Black"],
    sizes: ["S", "M", "L"],
    rating: 4.5,
    reviewsCount: 69,
    shipping: "Shipping ~$1.63 • ETA Sep 02–11",
    description:
      "Classic halter triangle top with tie-side bottoms. Push-up effect, soft lining.",
    cost: 4.91,
    price: 14.99,
    compareAtPrice: 24.99
  },
  {
    id: "bikini-hearts-blue-pink",
    name: "Split Print Bikini – Hearts G-String",
    image: "/assets/products/bikini-hearts-blue-pink.jpg",
    category: "Bikinis",
    colors: ["Blue/Pink Hearts (code 004)"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    reviewsCount: 1000,
    shipping: "Choice free shipping (new users) • ETA Sep 04–09",
    description:
      "Quick-dry milk-silk polyester, high elasticity and removable chest pad. Bright color that won’t fade.",
    cost: 1.20,
    price: 12.99,
    compareAtPrice: 19.99
  },
  {
    id: "bikini-underwire-green",
    name: "Underwire Push-Up V-Neck Bikini (Thong)",
    image: "/assets/products/bikini-underwire-green.jpg",
    category: "Bikinis",
    colors: ["Green", "Red", "Blue"],
    sizes: ["S", "M", "L"],
    rating: 5.0,
    reviewsCount: 488,
    shipping: "ETA Aug 28 – Sep 07",
    description:
      "Supportive underwire top with V-neck and minimal thong bottoms. Adjustable straps.",
    cost: 1.59,
    price: 13.99,
    compareAtPrice: 21.99
  }
];

export default products;
