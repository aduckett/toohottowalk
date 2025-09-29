'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ShoeRequestForm({ wide = false }: { wide?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

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

  const baseGrid = wide
    ? 'mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-end'
    : 'mt-6 grid gap-4 sm:grid-cols-2';

  return (
    <form onSubmit={onSubmit} className={baseGrid} aria-describedby="shoe-help">
      <input type="hidden" name="_subject" value="Dog Shoe Request" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className={wide ? 'md:col-span-3' : ''}>
        <label htmlFor="name" className="block text-sm font-medium">Your Name *</label>
        <input id="name" name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div className={wide ? 'md:col-span-3' : ''}>
        <label htmlFor="email" className="block text-sm font-medium">Email *</label>
        <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div className={wide ? 'md:col-span-2' : ''}>
        <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
        <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="(555) 555-5555" />
      </div>

      <div className={wide ? 'md:col-span-2' : ''}>
        <label htmlFor="size" className="block text-sm font-medium">Dog Shoe Size *</label>
        <select id="size" name="size" required className="mt-1 w-full rounded-xl border px-3 py-2 bg-white">
          {Array.from({ length: 10 }, (_, i) => i).map(n => (
            <option key={n} value={n}>Size {n}</option>
          ))}
        </select>
      </div>

      <div className={wide ? 'md:col-span-1' : ''}>
        <label htmlFor="qty" className="block text-sm font-medium">Qty *</label>
        <input id="qty" name="qty" type="number" min={1} defaultValue={1} required className="mt-1 w-full rounded-xl border px-3 py-2" />
      </div>

      <div className={wide ? 'md:col-span-3' : ''}>
        <label htmlFor="option" className="block text-sm font-medium">Pickup Option *</label>
        <select id="option" name="pickup_option" required className="mt-1 w-full rounded-xl border px-3 py-2 bg-white">
          <option value="pickup">Local pickup (Phoenix)</option>
          <option value="dropoff">Drop-off (Phoenix area)</option>
          <option value="event">Pick up at event</option>
        </select>
      </div>

      <div className={wide ? 'md:col-span-12' : 'sm:col-span-2'}>
        <label htmlFor="note" className="block text-sm font-medium">Notes</label>
        <textarea id="note" name="note" rows={3} className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="Best time/place, or which event…" />
        <p id="shoe-help" className="mt-1 text-xs text-gray-500">
          $10 per pair; colors/brand vary. We’ll email to confirm.
        </p>
      </div>

      <div className={wide ? 'md:col-span-12' : 'sm:col-span-2'}>
        <div className="flex items-center gap-3">
          <button type="submit" disabled={status==='sending'} className="rounded-2xl bg-black text-white px-4 py-2 disabled:opacity-60">
            {status==='sending' ? 'Sending…' : 'Request Shoes'}
          </button>
          <span aria-live="polite" className="text-sm">
            {status==='success' && <span className="text-green-700">Thanks! We’ll be in touch soon.</span>}
            {status==='error' && <span className="text-red-700">{error}</span>}
          </span>
        </div>
      </div>
    </form>
  );
}
