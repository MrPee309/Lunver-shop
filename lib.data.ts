
// lib.data.ts — patched with v2 image paths to break cache
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  colors?: string[];
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: "jumpsuit-1379-purple",
    name: "Backless Fitness Romper – 1379 Purple",
    price: 29.99,
    image: "/assets/products/jumpsuit-1379-purple-v2.jpeg",
    description:
      "Backless halter one-piece fitness romper.",
    sizes: ["S","M","L","XL"],
    colors: ["Purple"]
  },
  {
    id: "bikini-brown",
    name: "Classic Triangle Bikini – Brown",
    price: 18.99,
    image: "/assets/products/bikini-brown-v2.jpeg",
    description:
      "Two-piece triangle bikini ak tie-side bottoms.",
    sizes: ["S","M","L"],
    colors: ["Brown","Black","Red","Green"]
  },
  {
    id: "hearts-blue-pink",
    name: "Hearts Micro Bikini – Blue/Pink",
    price: 16.99,
    image: "/assets/products/hearts-blue-pink-v2.jpeg",
    description:
      "Micro bikini ak kòd trese, twal elastik.",
    sizes: ["S","M","L"],
    colors: ["Blue/Pink"]
  },
  {
    id: "underwire-green",
    name: "Underwire Bikini – Solid Green",
    price: 22.99,
    image: "/assets/products/underwire-green-v2.jpeg",
    description:
      "Bikini ak soutyen underwire pou bon sipò.",
    sizes: ["S","M","L"],
    colors: ["Green","Red","Black"]
  }
];
