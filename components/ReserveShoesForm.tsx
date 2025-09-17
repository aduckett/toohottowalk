'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ReserveShoesForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

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
    <form onSubmit={onSubmit} className="mt-4 grid sm:grid-cols-2 gap-3">
      <input type="hidden" name="_subject" value="Dog Shoe Reservation" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="block text-sm font-medium">Your Name *</label>
        <input name="name" required className="mt-1 w-full" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email *</label>
        <input name="email" type="email" required className="mt-1 w-full" />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input name="phone" className="mt-1 w-full" />
      </div>
      <div>
        <label className="block text-sm font-medium">Season *</label>
        <select name="season" required className="mt-1 w-full bg-white">
          <option value="summer">Summer (heat)</option>
          <option value="winter">Winter (warm)</option>
          <option value="trail">Trail (rough terrain)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Size *</label>
        <select name="size" required className="mt-1 w-full bg-white">
          <option>S</option><option>M</option><option>L</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Quantity *</label>
        <input name="qty" type="number" min={1} defaultValue={1} required className="mt-1 w-full" />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium">Notes (optional)</label>
        <textarea name="message" rows={3} className="mt-1 w-full" placeholder="Pickup at a pop-up? Shipping address? Preferred color?"/>
      </div>

      <button disabled={status==='sending'} className="btn w-fit">
        {status==='sending' ? 'Sending…' : 'Reserve my pair'}
      </button>
      {status==='success' && <p className="text-green-700 sm:col-span-2">Thanks! We’ll confirm availability ASAP.</p>}
      {status==='error' && <p className="text-red-700 sm:col-span-2">{error}</p>}
    </form>
  );
}
