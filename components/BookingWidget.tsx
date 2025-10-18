'use client';

import { useState } from 'react';

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-cream border-2 border-brass rounded-lg p-6 shadow-lg">
      <h3 className="font-heading text-2xl font-semibold text-forest mb-4">
        Check Availability
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="check-in" className="block text-sm font-medium text-brown mb-1">
            Check-in
          </label>
          <input
            type="date"
            id="check-in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full px-4 py-2 border border-brown rounded focus:ring-2 focus:ring-brass focus:border-brass"
            required
          />
        </div>

        <div>
          <label htmlFor="check-out" className="block text-sm font-medium text-brown mb-1">
            Check-out
          </label>
          <input
            type="date"
            id="check-out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full px-4 py-2 border border-brown rounded focus:ring-2 focus:ring-brass focus:border-brass"
            required
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-brown mb-1">
            Guests
          </label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-4 py-2 border border-brown rounded focus:ring-2 focus:ring-brass focus:border-brass"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-primary w-full">
          Book Your Stay
        </button>

        <p className="text-xs text-center text-brown">
          You will be redirected to our booking partner
        </p>
      </form>
    </div>
  );
}
