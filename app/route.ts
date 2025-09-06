// app/api/products/route.ts
import { NextResponse } from 'next/server';
import products from '../../../lib.data'; // default export or adjust if named
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  return new NextResponse(JSON.stringify(products), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store, max-age=0',
    },
  });
}
