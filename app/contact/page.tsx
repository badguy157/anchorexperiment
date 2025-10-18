'use client';

import React from 'react';

export default function ContactPage(){
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can hook this up to an API route later.
    alert('Thanks! This demo form does not send yet.');
  };

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}>
        <div className="page-hero-inner">
          <h1>Contact</h1>
          <p className="mt-3">We’d love to hear from you</p>
        </div>
      </section>

      <section className="page-section">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Message form */}
          <div className="page-card">
            <h3 className="text-xl font-semibold">Send us a message</h3>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-timber/80">Name</label>
                <input
                  className="mt-1 w-full rounded-lg border border-stone/60 bg-white/95 px-3 py-2"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-timber/80">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-stone/60 bg-white/95 px-3 py-2"
                  placeholder="you@example.com"
                  name="email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-timber/80">Message</label>
                <textarea
                  rows={6}
                  className="mt-1 w-full rounded-lg border border-stone/60 bg-white/95 px-3 py-2"
                  placeholder="How can we help?"
                  name="message"
                  required
                />
              </div>
              <button className="btn btn-primary" type="submit">Send</button>
            </form>
          </div>

          {/* Hotel details */}
          <div className="page-card">
            <h3 className="text-xl font-semibold">Hotel details</h3>
            <div className="mt-4 space-y-2 text-timber/80">
              <p className="font-semibold text-timber">The Anchor Hotel</p>
              <p>
                Haydon Bridge<br/>
                Northumberland<br/>
                NE47 6AB
              </p>
              <p>
                <span className="font-semibold">Tel:</span>{' '}
                <a href="tel:+441234567890" className="underline">01234 567 890</a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:info@theanchorbridge.co.uk" className="underline">
                  info@theanchorbridge.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
