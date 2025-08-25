export type Product = { id: string; title: string; description: string; price: number; image: string; };
export const PRODUCTS: Product[] = [
  { id: 'bp01', title: 'Minimalist Backpack', description: 'Lightweight, water-resistant, everyday carry.', price: 49, image: '/assets/product.svg' },
  { id: 'we02', title: 'Wireless Earbuds', description: 'Crystal sound with 24h battery life.', price: 59, image: '/assets/product.svg' },
  { id: 'sl03', title: 'Smart LED Lamp', description: 'Adjustable color & brightness.', price: 29, image: '/assets/product.svg' },
  { id: 'wb04', title: 'Stainless Water Bottle', description: 'Keeps drinks cold for 24h.', price: 19, image: '/assets/product.svg' },
  { id: 'em05', title: 'Ergonomic Mouse', description: 'Comfort grip, low-latency clicks.', price: 39, image: '/assets/product.svg' },
  { id: 'pc06', title: 'Portable Charger', description: '20,000mAh high-speed USB-C.', price: 34, image: '/assets/product.svg' }
];
