import Image from "next/image"
import Link from "next/link"

interface Card {
  src: string;
  alt: string;
  href: string;
}

export default function Card({src, alt, href}: Card) {
  return (
    <Link href={href}>
      <div className="relative transition duration-500 ease-in-out aspect-5/7 w-full saturate-0 hover:saturate-100 hover:scale-103">
        <Image
          src= {src}
          alt= {alt}
          fill
          className="object-cover"
        />
      </div>
    </Link>
  )
}
