'use client';

import Image from 'next/image';
import { useRef } from 'react';

type Book = { title: string; amazonUrl: string; coverUrl: string };

export default function BookCarousel({ books }: { books: Book[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dx: number) => {
    scrollerRef.current?.scrollBy({ left: dx, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Scrollable row */}
      <div ref={scrollerRef} className="mt-6 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 snap-x snap-mandatory pr-16">
          {books.map((b) => (
            <a
              key={b.title}
              href={b.amazonUrl}
              target="_blank"
              className="snap-start shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 group"
              aria-label={`Open ${b.title} on Amazon`}
            >
              <div className="relative aspect-[4/5] rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <Image
                  src={b.coverUrl}
                  alt={`${b.title} cover`}
                  fill
                  sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, 18rem"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h4 className="text-sm sm:text-base font-medium leading-tight group-hover:underline">
                  {b.title}
                </h4>
                <span className="ml-2 text-[10px] sm:text-xs rounded-full border px-2 py-0.5">Amazon</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Left/Right buttons */}
      <button
        onClick={() => scrollBy(-320)}
        aria-label="Scroll books left"
        className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white"
      >
        ◀
      </button>
      <button
        onClick={() => scrollBy(320)}
        aria-label="Scroll books right"
        className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/5 hover:bg-white"
      >
        ▶
      </button>
    </div>
  );
}
