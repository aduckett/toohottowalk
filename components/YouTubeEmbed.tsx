'use client'
import { useState } from 'react'

export default function YouTubeEmbed({ id }: { id: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-100">
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center text-gray-500">🎥 Loading…</div>
      )}
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
