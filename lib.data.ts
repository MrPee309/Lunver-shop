
// lib.data.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;        // chemin relatif depi /public
  description: string;
  colors?: string[];
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: "jumpsuit-1379-purple",
    name: "Backless Fitness Romper – 1379 Purple",
    price: 29.99,
    image: "/assets/products/jumpsuit-1379-purple.jpeg",
    description:
      "Backless halter one-piece fitness romper. Stretchy, breathable, push-up effect. Great pou jim oswa casual.",
    sizes: ["S","M","L","XL"],
    colors: ["Purple"]
  },
  {
    id: "bikini-brown",
    name: "Classic Triangle Bikini — Brown",
    price: 18.99,
    image: "/assets/products/bikini-brown.jpeg",
    description:
      "Two-piece triangle bikini ak tie-side bottoms. Pad removable, rapid-dry.",
    sizes: ["S","M","L"],
    colors: ["Brown","Black","Red","Green"]
  },
  {
    id: "hearts-blue-pink",
    name: "Hearts Micro Bikini — Blue/Pink",
    price: 16.99,
    image: "/assets/products/hearts-blue-pink.jpeg",
    description:
      "Micro bikini ak kòd trese, twal elastik, motif kè ble/woz. Rapid-dry, konfòtab.",
    sizes: ["S","M","L"],
    colors: ["Blue/Pink"]
  },
  {
    id: "underwire-green",
    name: "Underwire Bikini — Solid Green",
    price: 22.99,
    image: "/assets/products/underwire-green.jpeg",
    description:
      "Bikini ak soutyen underwire pou bon sipò, kouti solid, twal lis. Bottom v-cut.",
    sizes: ["S","M","L"],
    colors: ["Green","Red","Black"]
  }
];
