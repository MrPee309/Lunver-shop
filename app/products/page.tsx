import Image from 'next/image';

type Product = {
  id:string; name:string; price:number; image:string; description:string;
  colors?:string[]; sizes?:string[];
};

export default async function ProductsPage() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? '';
  const res = await fetch(`${base}/api/products`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to load products');
  }
  const products: Product[] = await res.json();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(p => (
          <article key={p.id} className="rounded border p-4">
            <div className="relative aspect-square mb-3 overflow-hidden rounded bg-gray-50">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{objectFit:'cover'}}
              />
            </div>
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-600">${'{'}p.price.toFixed(2){'}'}</p>
            <p className="text-sm mt-2">{p.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
