export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;      // relative path from /public
  description: string;
  colors?: string[];
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: "jumpsuit-1379-purple",
    name: "Backless Fitness Romper — 1379 Purple",
    price: 29.99,
    image: "/assets/products/jumpsuit-1379-purple-v2.jpeg",
    description:
      "Backless halter one-piece fitness romper. Twal elastik ki byen kenbe kò a pou sport oswa lifestyle.",
    sizes: ["S","M","L","XL"],
    colors: ["Purple"]
  },
  {
    id: "bikini-brown",
    name: "Classic Triangle Bikini — Brown",
    price: 18.99,
    image: "/assets/products/bikini-brown-v2.jpeg",
    description:
      "Two-piece triangle bikini ak tie-side bottom. Twal dou, seche rapid.",
    sizes: ["S","M","L"],
    colors: ["Brown","Black","Red","Green"]
  },
  {
    id: "hearts-blue-pink",
    name: "Hearts Micro Bikini — Blue/Pink",
    price: 16.99,
    image: "/assets/products/hearts-blue-pink-v2.jpeg",
    description:
      "Micro bikini ak kòd trese, twal elastik, modèl kè ble/woz. Bèl pou plaj & pisin.",
    sizes: ["S","M","L"],
    colors: ["Blue/Pink"]
  },
  {
    id: "underwire-green",
    name: "Underwire Bikini — Solid Green",
    price: 22.99,
    image: "/assets/products/underwire-green-v2.jpeg",
    description:
      "Bikini ak soutyen underwire pou bon sipò, bottom cut-out sexy. Twal kalite, rapid-sech.",
    sizes: ["S","M","L"],
    colors: ["Green","Red","Black"]
  }
];
