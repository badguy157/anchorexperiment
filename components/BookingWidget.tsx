// components/BookingWidget.tsx
'use client';

import { useState } from 'react';

export default function BookingWidget() {
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [guests, setGuests] = useState(2);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      dateIn,
      dateOut,
      guests: String(guests),
    }).toString();
    window.location.href = `/rooms?${query}`;
  };

  return (
    <section id="booking" className="section-sm">
      <div className="container-wide">
        <div className="card p-6 lg:p-7">
          <form onSubmit={submit} className="grid gap-4 sm:grid-cols-4 items-end">
            {/* Check in */}
            <div>
              <label htmlFor="checkin" className="block text-sm font-medium text-timber/80 mb-2">
                Check in
              </label>
              <input
                id="checkin"
                type="date"
                required
                value={dateIn}
                onChange={(e) => setDateIn(e.target.value)}
                autoComplete="off"
                className="h-11 w-full rounded-xl border border-black/10 bg-white/95 px-3 text-timber shadow-sm"
              />
            </div>

            {/* Check out */}
            <div>
              <label htmlFor="checkout" className="block text-sm font-medium text-timber/80 mb-2">
                Check out
              </label>
              <input
                id="checkout"
                type="date"
                required
                value={dateOut}
                onChange={(e) => setDateOut(e.target.value)}
                autoComplete="off"
                className="h-11 w-full rounded-xl border border-black/10 bg-white/95 px-3 text-timber shadow-sm"
              />
            </div>

            {/* Guests */}
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-timber/80 mb-2">
                Guests
              </label>
              <input
                id="guests"
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value || '1', 10))}
                className="h-11 w-full rounded-xl border border-black/10 bg-white/95 px-3 text-timber shadow-sm"
              />
            </div>

            {/* CTA */}
            <div className="pt-1 sm:pt-0">
              <button
                type="submit"
                className="btn-cta w-full sm:w-auto rounded-xl px-5 py-3 font-semibold no-underline"
              >
                Check availability
              </button>
            </div>
          </form>

          <p className="mt-3 text-sm text-timber/70">
            Best rate here · Breakfast included
          </p>
        </div>
      </div>
    </section>
  );
}
