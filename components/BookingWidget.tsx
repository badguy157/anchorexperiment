// components/BookingWidget.tsx
"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";

function toISO(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function BookingWidget() {
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

  const [dateIn, setDateIn] = useState(toISO(defaultIn));
  const [dateOut, setDateOut] = useState(toISO(defaultOut));

  // Keep as string so the field can be temporarily empty while typing
  const [guestsStr, setGuestsStr] = useState<string>("2");

  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (new Date(dateOut) <= new Date(dateIn)) {
      setError("Check-out must be after check-in.");
      return;
    }

    // Coerce guests just before submit
    const g = clamp(parseInt(guestsStr || "1", 10), 1, 12);
    setError("");

    const qs = new URLSearchParams({
      dateIn,
      dateOut,
      guests: String(g),
    }).toString();

    window.location.href = `/rooms?${qs}#booking`;
  };

  return (
    <section id="booking" className="section-sm">
      <div className="container-wide">
        <div className="card p-5 md:p-6">
          <form
            onSubmit={submit}
            className="grid sm:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end"
          >
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
                inputMode="numeric"
                pattern="[0-9]*"
                min={1}
                max={12}
                value={guestsStr}
                onChange={(e) => {
                  // Allow '' while editing; otherwise keep only digits
                  const v = e.target.value.replace(/[^\d]/g, "");
                  setGuestsStr(v);
                }}
                onBlur={() => {
                  // If user leaves it blank, snap to 1
                  if (guestsStr === "") setGuestsStr("1");
                }}
                className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white"
              />
            </div>
            <Button type="submit" variant="cta" className="px-6">
              Check availability
            </Button>
          </form>

          {error && (
            <p className="mt-2 text-sm text-red-600" aria-live="polite">
              {error}
            </p>
          )}

          <p className="mt-3 text-xs text-timber/70">
            Best rate here · Breakfast included
          </p>
        </div>
      </div>
    </section>
  );
}
