'use client';
import { useState } from 'react';

export default function LiteYouTube({ id }: { id: string }) {
  const [play, setPlay] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
      {!play ? (
        <button
          onClick={() => setPlay(true)}
          className="group absolute inset-0 w-full h-full"
          aria-label="Play video"
        >
          <img src={thumb} alt="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm">
              ▶ Play interview
            </span>
          </div>
        </button>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
