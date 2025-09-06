// app/api/products/route.ts
import { NextResponse } from "next/server";
import { products } from "../../../lib.data"; // <-- import from root lib.data.ts

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(products, {
    headers: { "Cache-Control": "no-store" },
  });
}
