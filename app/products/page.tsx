import { headers } from "next/headers";
import type { Product } from "../api/products/route";

export const dynamic = "force-dynamic";

async function getProducts(): Promise<Product[]> {
  const h = headers();
  const host = h.get("host");
  const protocol = process.env.VERCEL ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;
  const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to load products");
  }
  const data = await res.json();
  return data.products as Product[];
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Products</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>Data served by <code>/api/products</code></p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))", gap: 16 }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden", background: "#fff" }}>
            <div style={{ aspectRatio: "1 / 1", background: "#fafafa", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* we use <img> to avoid Next/Image config for simplicity */}
              <img src={p.image} alt={p.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: 14 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{p.name}</h3>
              <p style={{ margin: "0 0 10px", color: "#555" }}>{p.description}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <strong>${"{p.price.toFixed(2)}"}</strong>
                <button style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #ddd" }}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}