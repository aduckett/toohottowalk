'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function SponsorForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  // Your live Formspree endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvlqweb';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        setError(j?.errors?.[0]?.message || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setError('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2" aria-describedby="sponsor-help">
      {/* Email subject in your inbox */}
      <input type="hidden" name="_subject" value="Sponsor a Bowl Inquiry" />

      {/* Honeypot (spam trap) */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="sm:col-span-1">
        <label htmlFor="name" className="block text-sm font-medium">Your Name *</label>
        <input id="name" name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="organization" className="block text-sm font-medium">Organization</label>
        <input id="organization" name="organization" className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="block text-sm font-medium">Email *</label>
        <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
        <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="(555) 555-5555" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="city" className="block text-sm font-medium">City</label>
        <input id="city" name="city" className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="state" className="block text-sm font-medium">State</label>
        <input id="state" name="state" className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="placement" className="block text-sm font-medium">Placement Type</label>
        <select id="placement" name="placement" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white">
          <option>Park</option>
          <option>Trail</option>
          <option>Cafe/Business</option>
          <option>School</option>
          <option>Other</option>
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="timeline" className="block text-sm font-medium">Timeline</label>
        <select id="timeline" name="timeline" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white">
          <option>ASAP</option>
          <option>1–3 months</option>
          <option>3+ months</option>
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="budget" className="block text-sm font-medium">Budget</label>
        <select id="budget" name="budget" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white">
          <option>Exploring</option>
          <option>$250–$500</option>
          <option>$500–$1,000</option>
          <option>$1,000+</option>
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="links" className="block text-sm font-medium">Website / Instagram</label>
        <input id="links" name="links" placeholder="https:// / @handle" className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="Tell us about your location, goals, and any timelines…"
        />
        <p id="sponsor-help" className="mt-1 text-xs text-gray-500">
          We’ll reply within 1–2 business days.
        </p>
      </div>

      <div className="sm:col-span-2 flex items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-2xl bg-black text-white px-4 py-2 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Contact us'}
        </button>

        <span aria-live="polite" className="text-sm">
          {status === 'success' && <span className="text-green-700">Thanks! We’ll be in touch soon.</span>}
          {status === 'error' && <span className="text-red-700">{error}</span>}
        </span>
      </div>
    </form>
  );
}
