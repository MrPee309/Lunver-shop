import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

export async function GET() {
  // Return fresh data each request; avoids stale cache in Vercel
  return NextResponse.json(products, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
