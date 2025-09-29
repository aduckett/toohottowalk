'use client';
import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border"
      >
        ☰
      </button>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <nav className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="h-9 w-9">✕</button>
            </div>
            <a href="#books" onClick={() => setOpen(false)} className="block py-2">Kid Dog Books</a>
            <a href="#interviews" onClick={() => setOpen(false)} className="block py-2">Dog Interviews</a>
            <a href="#shoes" onClick={() => setOpen(false)} className="block py-2">Dog Shoes</a>
            <a href="#bowls" onClick={() => setOpen(false)} className="block py-2">Sleeping Dog AZ</a>
            <div className="pt-2 space-x-2">
              <a href="https://givebutter.com/sleepingdog" target="_blank" className="inline-block rounded-xl bg-amber-500 px-3 py-1.5">Donate</a>
              <a href="https://www.youtube.com/@TooHotToWalk" target="_blank" className="inline-block rounded-xl border px-3 py-1.5">YouTube</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
