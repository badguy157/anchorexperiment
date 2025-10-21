// app/book/page.tsx
"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type RoomKey =
  | "double-ensuite"
  | "double-separate-bathroom"
  | "twin-ensuite"
  | "family-room";

const ROOM_NAMES: Record<RoomKey, string> = {
  "double-ensuite": "Double – Ensuite",
  "double-separate-bathroom": "Double – Ensuite (Separate Private Bathroom)",
  "twin-ensuite": "Twin – Ensuite",
  "family-room": "Family Room",
};

const NIGHTLY_RATE: Record<RoomKey, number> = {
  "double-ensuite": 95,
  "double-separate-bathroom": 95,
  "twin-ensuite": 95,
  "family-room": 115,
};

function diffNights(a: string, b: string) {
  if (!a || !b) return 0;
  const A = new Date(a);
  const B = new Date(b);
  return Math.max(0, Math.round((+B - +A) / (1000 * 60 * 60 * 24)));
}

/** Shared input style: clear borders, subtle shadow, strong focus ring */
const baseInput =
  "w-full rounded-lg border border-stone/40 bg-white/90 px-3 py-2 shadow-sm " +
  "focus:outline-none focus:ring-2 focus:ring-brass/50 focus:border-brass/60 text-timber";

const baseLabel = "block text-sm font-semibold text-timber/80 mb-1";

export default function BookPage() {
  const qp = useSearchParams();
  const [room, setRoom] = useState<RoomKey | "">((qp.get("room") as RoomKey) || "");
  const [checkIn, setCheckIn] = useState(qp.get("checkIn") || "");
  const [checkOut, setCheckOut] = useState(qp.get("checkOut") || "");
  const [guests, setGuests] = useState(Number(qp.get("guests") || 2));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [agree, setAgree] = useState(false);

  const nights = useMemo(() => diffNights(checkIn, checkOut), [checkIn, checkOut]);
  const nightly = room ? NIGHTLY_RATE[room as RoomKey] : 0;
  const estimate = nights * nightly;
  const deposit = Math.ceil(estimate * 0.2); // 20%

  async function payDeposit() {
    if (!room || !checkIn || !checkOut || !email || !name || !agree || !nights) {
      alert("Please complete the required fields.");
      return;
    }
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        room,
        roomName: ROOM_NAMES[room as RoomKey],
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
      }),
    });
    const data = await res.json();
    if (data?.url) window.location.href = data.url;
    else alert(data?.error || "Could not start checkout.");
  }

  return (
    <main className="section">
      <div className="container-narrow">
        <h1 className="font-display text-3xl font-bold text-center">Book your stay</h1>
        <p className="mt-2 text-center text-timber/80">
          Secure your reservation with a small deposit. You’ll receive a confirmation email immediately.
        </p>

        <div className="rule my-6" />

        {/* 1) Trip details */}
        <div className="card p-5">
          <h2 className="font-display text-xl font-bold">Your trip</h2>

          <div className="mt-3 grid gap-4 sm:grid-cols-4">
            {/* Check-in */}
            <div>
              <label className={baseLabel}>Check in *</label>
              <input
                type="date"
                className={baseInput}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            {/* Check-out */}
            <div>
              <label className={baseLabel}>Check out *</label>
              <input
                type="date"
                className={baseInput}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            {/* Guests */}
            <div>
              <label className={baseLabel}>Guests</label>
              <input
                type="number"
                min={1}
                max={6}
                className={baseInput}
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value || "1", 10))}
              />
            </div>

            {/* Room */}
            <div className="w-full sm:w-auto">
              <label className={baseLabel}>Room *</label>
              <select
                className={`${baseInput} pr-8 sm:max-w-[260px]`}
                value={room}
                onChange={(e) => setRoom(e.target.value as RoomKey)}
              >
                <option value="">Select a room</option>
                {Object.entries(ROOM_NAMES).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Trip summary tiles */}
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-white/90 ring-1 ring-stone/30 p-4">
              <div className="text-xs tracking-wide text-timber/60">NIGHTS</div>
              <div className="mt-1 text-lg font-semibold">{nights}</div>
            </div>
            <div className="rounded-xl bg-white/90 ring-1 ring-stone/30 p-4">
              <div className="text-xs tracking-wide text-timber/60">NIGHTLY RATE</div>
              <div className="mt-1 text-lg font-semibold">£{nightly || 0}</div>
            </div>
            <div className="rounded-xl bg-white/90 ring-1 ring-stone/30 p-4">
              <div className="text-xs tracking-wide text-timber/60">ESTIMATE</div>
              <div className="mt-1 text-lg font-semibold">£{estimate || 0}</div>
            </div>
          </div>
        </div>

        {/* 2) Guest details */}
        <div className="card p-5 mt-6">
          <h2 className="font-display text-xl font-bold">Guest details</h2>

          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <label className={baseLabel}>Name *</label>
              <input className={baseInput} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label className={baseLabel}>Email *</label>
              <input
                type="email"
                className={baseInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className={baseLabel}>Phone</label>
              <input className={baseInput} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className={baseLabel}>Notes (optional)</label>
              <textarea
                className={`${baseInput} min-h-[100px]`}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          <label className="mt-4 flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-stone/40 text-brass focus:ring-brass/50"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span className="text-sm">
              I agree to the house rules and cancellation policy (48h notice; deposit non-refundable).
            </span>
          </label>

          <div className="mt-5 flex items-center justify-between">
            <div className="text-sm text-timber/70">
              Deposit (20%): <span className="font-semibold">£{deposit || 0}</span>
            </div>
            <button
              className="btn btn-gold disabled:opacity-60"
              disabled={!room || !checkIn || !checkOut || !name || !email || !agree || !nights}
              onClick={payDeposit}
            >
              Pay deposit &amp; reserve
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-timber/70">
          You’ll receive an email confirmation immediately. Remaining balance is payable on arrival.
        </p>
      </div>
    </main>
  );
}
