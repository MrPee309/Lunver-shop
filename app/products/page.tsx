// app/products/page.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  colors?: string[];
  sizes?: string[];
};

export default function ProductsPage() {
  const [items, setItems] = useState<Product[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/products', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load products');
        const data = await res.json();
        setItems(data);
      } catch (e: any) {
        setErr(e?.message || 'Load error');
      }
    })();
  }, []);

  if (err) {
    return <main style={{padding:'1.25rem'}}><p style={{color:'crimson'}}>Error: {err}</p></main>
  }

  if (!items) {
    return <main style={{padding:'1.25rem'}}><p>Loading products…</p></main>
  }

  return (
    <main style={{maxWidth: 1100, margin: '0 auto', padding: '1.25rem'}}>
      <h1>Products</h1>
      <ul style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))', gap:'1rem', listStyle:'none', padding:0}}>
        {items.map((p) => (
          <li key={p.id} style={{border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden', background:'#fff'}}>
            <Link href={`/products/${p.id}`} style={{textDecoration:'none', color:'inherit', display:'block'}}>
              <div style={{width:'100%', aspectRatio:'1/1', background:'#f3f4f6', display:'grid', placeItems:'center'}}>
                {/* use plain <img> to avoid next/image cache issues */}
                <img src={p.image} alt={p.name} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <div style={{padding:'0.75rem 0.9rem 1.1rem'}}>
                <h3 style={{margin:'0 0 0.25rem 0'}}>{p.name}</h3>
                <div style={{fontWeight:700}}>${'{'}p.price.toFixed(2){'}'}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
