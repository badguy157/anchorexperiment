'use client';

import * as React from 'react';

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string) || '';
    const email = (data.get('email') as string) || '';
    const message = (data.get('message') as string) || '';

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@theanchorbridge.co.uk?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honey-pot (basic bot trap) */}
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-timber/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-black/10 bg-white/90 px-3 py-2 outline-none focus:ring-2 focus:ring-brass/40"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-timber/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-black/10 bg-white/90 px-3 py-2 outline-none focus:ring-2 focus:ring-brass/40"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-timber/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-1 w-full rounded-xl border border-black/10 bg-white/90 px-3 py-2 outline-none focus:ring-2 focus:ring-brass/40"
          placeholder="How can we help?"
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="btn btn-gold btn--lg">
          Send message
        </button>
      </div>
    </form>
  );
}
