'use client';

import { useState } from 'react';

export default function BookingWidget(){
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [guests, setGuests] = useState(2);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({ dateIn, dateOut, guests: String(guests) }).toString();
    window.location.href = `/rooms?${query}`;
  };

  return (
    <section id="booking" className="section-sm">
      <div className="container-wide">
        <div className="card p-5 md:p-6">
          <form onSubmit={submit} className="grid sm:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm text-timber/70">Check in</label>
              <input type="date" required value={dateIn} onChange={e=>setDateIn(e.target.value)} className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white" />
            </div>
            <div>
              <label className="block text-sm text-timber/70">Check out</label>
              <input type="date" required value={dateOut} onChange={e=>setDateOut(e.target.value)} className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white" />
            </div>
            <div>
              <label className="block text-sm text-timber/70">Guests</label>
              <input type="number" min={1} value={guests} onChange={e=>setGuests(parseInt(e.target.value || '1',10))} className="mt-1 w-full rounded-lg border border-stone/60 px-3 py-2 bg-white" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Check Availability</button>
          </form>
          <p className="mt-3 text-xs text-timber/70">Best rate here · Breakfast included</p>
        </div>
      </div>
    </section>
  );
}
