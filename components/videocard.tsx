"use client"
import { useState } from "react"

type VideoCardProps = {
  id: string
}

export default function VideoCard({ id }: VideoCardProps) {
  const [play, setPlay] = useState(false)

  if (!play) {
    return (
      <div
        onClick={() => setPlay(true)}
        className="cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:rounded-2xl hover:shadow-xl"
      >
        <img
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          className="w-full aspect-video rounded-lg object-cover"
        />
      </div>
    )
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}?autoplay=1`}
      className="w-full aspect-video rounded-lg"
      allowFullScreen
    />
  )
}
