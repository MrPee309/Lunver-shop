// app/products/page.tsx
export const dynamic = "force-dynamic";

type Product = {
  id:string; name:string; price:number; image:string; description:string;
  sizes?:string[]; colors?:string[];
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load products");
  return await res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main style={{maxWidth:1100, margin:"0 auto", padding:"24px"}}>
      <h1 style={{fontSize:28, fontWeight:800, marginBottom:12}}>Products</h1>
      <ul style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:16, listStyle:"none", padding:0}}>
        {products.map(p => (
          <li key={p.id} style={{border:"1px solid #eee", borderRadius:12, overflow:"hidden"}}>
            <div style={{aspectRatio:"1/1", background:"#f6f6f6"}}>
              <img src={p.image} alt={p.name} style={{width:"100%", height:"100%", objectFit:"cover"}} />
            </div>
            <div style={{padding:12}}>
              <h3 style={{margin:"0 0 6px"}}>{p.name}</h3>
              <div style={{fontWeight:700}}>${"{p.price.toFixed(2)}"}</div>
              <p style={{color:"#555", marginTop:6}}>{p.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
