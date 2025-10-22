// app/book/page.tsx
"use client";

import { useMemo, useState } from "react";

type RoomKey =
  | "double-ensuite"
  | "double-private"
  | "twin-ensuite"
  | "family-room";

const ROOM_LABELS: Record<RoomKey, string> = {
  "double-ensuite": "Double – Ensuite",
  "double-private": "Double – Ensuite (Separate Private Bathroom)",
  "twin-ensuite": "Twin – Ensuite",
  "family-room": "Family Room",
};

const NIGHTLY: Record<RoomKey, number> = {
  "double-ensuite": 95,
  "double-private": 95,
  "twin-ensuite": 95,
  "family-room": 115,
};

function toISO(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function diffNights(a: string, b: string) {
  const A = new Date(a);
  const B = new Date(b);
  const ms = B.getTime() - A.getTime();
  return ms > 0 ? Math.round(ms / 86400000) : 0;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function BookPage() {
  const today = useMemo(() => new Date(), []);
  const defaultIn = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + 1);
    return d;
  }, [today]);
  const defaultOut = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + 3);
    return d;
  }, [today]);

  // Trip details
  const [dateIn, setDateIn] = useState(toISO(defaultIn));
  const [dateOut, setDateOut] = useState(toISO(defaultOut));
  const [room, setRoom] = useState<RoomKey>("double-ensuite");

  // Guests as string so the field can be blank while editing
  const [guestsStr, setGuestsStr] = useState<string>("2");

  // Guest contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [agree, setAgree] = useState(false);

  const nights = diffNights(dateIn, dateOut);
  const nightlyRate = NIGHTLY[room];
  const estimate = nights * nightlyRate;
  const deposit = Math.round(estimate * 0.2);

  const canSubmit =
    nights > 0 &&
    name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(email) &&
    agree;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Coerce guests on submit
    const guests = clamp(parseInt(guestsStr || "1", 10), 1, 12);

    // …call your checkout API here if you’ve wired Stripe/etc.
    // For now just show a friendly placeholder.
    alert(
      `Reservation summary:\n${ROOM_LABELS[room]} for ${nights} night(s)\n` +
        `Guests: ${guests}\n` +
        `Estimate: £${estimate} (deposit £${deposit})\n\n` +
        `We’ll wire this to checkout once payment is configured.`
    );
  };

  return (
    <main className="section bg-offwhite">
      <div className="container-narrow">
        <header className="text-center mb-4">
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Book your stay
          </h1>
          <p className="mt-2 text-timber/80">
            Secure your reservation with a small deposit. You’ll receive a
            confirmation email immediately.
          </p>
          <div className="rule my-6" />
        </header>

        <form onSubmit={submit} className="grid gap-6">
          {/* Trip card */}
          <section className="card p-5 md:p-6">
            <h2 className="font-display text-xl font-bold mb-3">Your trip</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-timber/70">Check in *</label>
                <input
                  type="date"
                  required
                  value={dateIn}
                  min={toISO(today)}
                  onChange={(e) => setDateIn(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm text-timber/70">
                  Check out *
                </label>
                <input
                  type="date"
                  required
                  value={dateOut}
                  min={dateIn}
                  onChange={(e) => setDateOut(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm text-timber/70">Guests</label>
                <input
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  min={1}
                  max={12}
                  value={guestsStr}
                  onChange={(e) => {
                    const v = e.target.value.replace(/[^\d]/g, "");
                    setGuestsStr(v);
                  }}
                  onBlur={() => {
                    if (guestsStr === "") setGuestsStr("1");
                  }}
                  className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm text-timber/70">Room *</label>
                <select
                  value={room}
                  onChange={(e) => setRoom(e.target.value as RoomKey)}
                  className="mt-1 w-full max-w-[26rem] rounded-lg border border-stone/60 px-3 py-2 bg-white"
                >
                  {(
                    Object.keys(ROOM_LABELS) as Array<keyof typeof ROOM_LABELS>
                  ).map((k) => (
                    <option key={k} value={k}>
                      {ROOM_LABELS[k]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-timber/70">Nights</label>
                <div className="mt-1 h-[42px] flex items-center rounded-lg border border-stone/60 bg-white px-3">
                  {nights}
                </div>
              </div>

              <div>
                <label className="block text-sm text-timber/70">
                  Nightly rate
                </label>
                <div className="mt-1 h-[42px] flex items-center rounded-lg border border-stone/60 bg-white px-3">
                  £{nightlyRate}
                </div>
              </div>

              <div>
                <label className="block text-sm text-timber/70">Estimate</label>
                <div className="mt-1 h-[42px] flex items-center rounded-lg border border-stone/60 bg-white px-3">
                  £{estimate}
                </div>
              </div>
            </div>
          </section>

          {/* Guest details */}
          <section className="card p-5 md:p-6">
            <h2 className="font-display text-xl font-bold">Guest details</h2>

            <div className="mt-3 grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-timber/70">Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm text-timber/70">Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm text-timber/70">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm text-timber/70">
                  Notes (optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white"
                />
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-stone/60"
              />
              <label htmlFor="agree" className="text-sm text-timber/80">
                I agree to the house rules and cancellation policy (48h notice;
                deposit non-refundable).
              </label>
            </div>

            <div className="mt-4 text-sm text-timber/80">
              Deposit (20%): <span className="font-semibold">£{deposit}</span>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                disabled={!canSubmit}
                aria-disabled={!canSubmit}
                className={`btn btn-gold ${
                  !canSubmit ? "opacity-60 cursor-not-allowed" : ""
                }`}
                title={!canSubmit ? "Fill required fields to continue" : ""}
              >
                Pay deposit &amp; reserve
              </button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
