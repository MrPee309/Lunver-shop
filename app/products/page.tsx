import Link from 'next/link'; import { PRODUCTS } from '@/lib.data';
export const dynamic = 'force-dynamic';
export default function ProductsPage() { return (<main className="section"><div className="container">
  <div className="section__head"><h2>Products</h2><p className="muted">Data served by /api/products</p></div>
  <div className="grid products">{PRODUCTS.map(p => (<article className="card" key={p.id}><img src={p.image} alt={p.title} /><div className="card__body"><h3>{p.title}</h3><p className="muted">{p.description}</p><div className="price">${p.price.toFixed(2)}</div><Link className="btn btn--secondary" href={`/product/${p.id}`}>View</Link></div></article>))}</div>
</div></main> ); }
