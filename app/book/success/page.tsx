"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const qp = useSearchParams();
  const room = qp.get("room");
  const checkIn = qp.get("checkIn");
  const checkOut = qp.get("checkOut");

  return (
    <main className="section">
      <div className="container-narrow text-center">
        <h1 className="font-display text-3xl font-bold text-forest">Reservation secured</h1>
        <p className="mt-2 text-timber/80">
          Thank you—your deposit has been received and your booking is confirmed.
        </p>

        <div className="card p-5 mt-6 inline-block text-left">
          <h2 className="font-display text-xl font-bold">Summary</h2>
          <ul className="mt-2 text-timber/90">
            {room ? <li><strong>Room:</strong> {room.replaceAll("-", " ")}</li> : null}
            {checkIn ? <li><strong>Check in:</strong> {checkIn}</li> : null}
            {checkOut ? <li><strong>Check out:</strong> {checkOut}</li> : null}
          </ul>
          <p className="mt-3 text-sm text-timber/70">
            A confirmation email has been sent. If you need to make changes, reply to that email.
          </p>
        </div>

        <div className="mt-6">
          <Link href="/" className="btn-light">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
