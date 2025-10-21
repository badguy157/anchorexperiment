// app/api/checkout/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      room,
      roomName,
      checkIn,
      checkOut,
      guests,
      name,
      email,
      phone,
      notes,
      nights,
      nightly,
      estimate,
      deposit,
    } = body || {};

    if (!room || !roomName || !checkIn || !checkOut || !email || !name || !deposit) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // ✅ Do not pass apiVersion; let the SDK use its bundled version.
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    const site =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      success_url: `${site}/book/success?room=${encodeURIComponent(
        room
      )}&checkIn=${encodeURIComponent(checkIn)}&checkOut=${encodeURIComponent(checkOut)}`,
      cancel_url: `${site}/book?canceled=1`,
      metadata: {
        room,
        roomName,
        checkIn,
        checkOut,
        guests: String(guests || 1),
        name,
        email,
        phone: phone || "",
        notes: notes || "",
        nights: String(nights || 0),
        nightly: String(nightly || 0),
        estimate: String(estimate || 0),
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: Math.max(1, Math.round(Number(deposit) * 100)), // pence
            product_data: {
              name: `Deposit — ${roomName}`,
              description: `${checkIn} → ${checkOut} • ${nights} night(s) • £${nightly}/night`,
            },
          },
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Stripe error" }, { status: 500 });
  }
}
