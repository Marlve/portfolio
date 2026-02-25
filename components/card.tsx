import Image from "next/image"

export default function Card() {
  return (
    <div className="relative transition duration-500 ease-in-out aspect-5/7 w-full saturate-0 hover:saturate-100 hover:scale-103">
      <Image
        src="/me_1.jpg"
        alt="me"
        fill
        className="object-cover"
      />
    </div>
  )
}
