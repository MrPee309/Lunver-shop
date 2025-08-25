export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;   // path under /public (e.g. /products/backpack.jpg)
  category: string;
  inStock: boolean;
};

// ⬇️ Replace these with your real items.
// Image tips:
// 1) Upload product photos to /public/products/ (example: /public/products/backpack.jpg)
// 2) Reference them by path starting with /products/... in the 'image' field.
export const PRODUCTS: Product[] = [
  {
    id: 'bp01',
    title: 'Lunver Minimalist Backpack',
    description: 'Lightweight, water‑resistant backpack for everyday carry. 18L capacity.',
    price: 49,
    image: '/products/backpack.jpg',
    category: 'Bags',
    inStock: true
  },
  {
    id: 'we02',
    title: 'Wireless Earbuds Pro',
    description: 'Crystal‑clear sound, ENC mic, and 24h total battery life in case.',
    price: 59,
    image: '/products/earbuds.jpg',
    category: 'Audio',
    inStock: true
  },
  {
    id: 'sl03',
    title: 'Smart LED Desk Lamp',
    description: 'Adjustable color temperature and brightness. Touch controls.',
    price: 29,
    image: '/products/desk-lamp.jpg',
    category: 'Home',
    inStock: true
  },
  {
    id: 'wb04',
    title: 'Stainless Steel Water Bottle (750ml)',
    description: 'Double‑wall insulated. Keeps drinks cold 24h / hot 12h.',
    price: 19,
    image: '/products/bottle.jpg',
    category: 'Outdoors',
    inStock: true
  },
  {
    id: 'em05',
    title: 'Ergonomic Wireless Mouse',
    description: 'Comfort grip with silent clicks and adjustable DPI.',
    price: 39,
    image: '/products/mouse.jpg',
    category: 'Accessories',
    inStock: true
  },
  {
    id: 'pc06',
    title: '20,000mAh Portable Charger',
    description: 'High‑speed USB‑C PD output with LED battery indicator.',
    price: 34,
    image: '/products/powerbank.jpg',
    category: 'Accessories',
    inStock: true
  },
  {
    id: 'kb07',
    title: 'Mechanical Keyboard 75%',
    description: 'Hot‑swappable switches, RGB, USB‑C.',
    price: 79,
    image: '/products/keyboard.jpg',
    category: 'Accessories',
    inStock: true
  },
  {
    id: 'sg08',
    title: 'Sunglasses Polarized',
    description: 'UV400 protection with lightweight frame.',
    price: 25,
    image: '/products/sunglasses.jpg',
    category: 'Fashion',
    inStock: true
  }
];
