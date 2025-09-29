'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ShoeRequestForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  // Use your Formspree endpoint (same one you used for SponsorForm is okay, or make a new form)
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvlqweb';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending'); setError('');
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('success');
        (e.currentTarget as HTMLFormElement).reset();
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
    <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="_subject" value="Dog Shoe Request" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <div>
        <label className="block text-sm font-medium" htmlFor="name">Your Name *</label>
        <input id="name" name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="(555) 555-5555" />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="size">Dog Shoe Size *</label>
        <select id="size" name="size" required className="mt-1 w-full rounded-xl border px-3 py-2 bg-white">
          {Array.from({ length: 10 }, (_, i) => i).map(n => (
            <option key={n} value={n}>Size {n}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="qty">Quantity *</label>
        <input id="qty" name="qty" type="number" min={1} defaultValue={1} required className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="option">Pickup Option *</label>
        <select id="option" name="pickup_option" required className="mt-1 w-full rounded-xl border px-3 py-2 bg-white">
          <option value="pickup">Local pickup (Phoenix)</option>
          <option value="dropoff">Drop-off (Phoenix area)</option>
          <option value="event">Pick up at event</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-sm font-medium" htmlFor="note">Notes</label>
        <textarea id="note" name="note" rows={4} placeholder="Tell us the best time/place, or which event."
          className="mt-1 w-full rounded-xl border px-3 py-2" />
        <p className="mt-1 text-xs text-gray-500">We’ll email you to confirm. $10 per pair; colors/brand vary.</p>
      </div>

      <div className="sm:col-span-2 flex items-center gap-3">
        <button type="submit" disabled={status==='sending'} className="rounded-2xl bg-black text-white px-4 py-2 disabled:opacity-60">
          {status==='sending' ? 'Sending…' : 'Request Shoes'}
        </button>
        <span className="text-sm">
          {status==='success' && <span className="text-green-700">Thanks! We’ll be in touch soon.</span>}
          {status==='error' && <span className="text-red-700">{error}</span>}
        </span>
      </div>
    </form>
  );
}
