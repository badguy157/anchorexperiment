// components/BookingWidget.tsx
"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";

function toISO(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export default function BookingWidget() {
  const today = useMemo(() => new Date(), []);
  const defaultIn = useMemo(() => { const d = new Date(today); d.setDate(d.getDate() + 1); return d; }, [today]);
  const defaultOut = useMemo(() => { const d = new Date(today); d.setDate(d.getDate() + 3); return d; }, [today]);

  const [dateIn, setDateIn] = useState(toISO(defaultIn));
  const [dateOut, setDateOut] = useState(toISO(defaultOut));
  const [guests, setGuests] = useState(2);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (new Date(dateOut) <= new Date(dateIn)) {
      setError("Check-out must be after check-in.");
      return;
    }
    setError("");
    const qs = new URLSearchParams({ dateIn, dateOut, guests: String(guests) }).toString();
    // Unify with hero button target
    window.location.href = `/rooms?${qs}#booking`;
  };

  return (
    <section id="booking" className="section-sm">
      <div className="container-wide">
        <div className="card p-5 md:p-6">
          <form onSubmit={submit} className="grid sm:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
            <div>
              <label className="block text-sm text-timber/70">Check in</label>
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
              <label className="block text-sm text-timber/70">Check out</label>
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
                min={1}
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value || "1", 10))}
                className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white"
              />
            </div>
            <Button type="submit" variant="cta" className="px-6">Check availability</Button>
          </form>

          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

          <p className="mt-3 text-xs text-timber/70">Best rate here · Breakfast included</p>
        </div>
      </div>
    </section>
  );
}
