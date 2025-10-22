// app/api/checkout/route.ts
import { NextResponse } from "next/server";

// Keep Node runtime so request bodies work consistently
export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message:
        "Payments are not configured yet. Install `stripe` and set STRIPE_SECRET_KEY to enable checkout.",
    },
    { status: 501 }
  );
}
