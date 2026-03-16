import { ReactNode } from "react"

interface Link {
  children: ReactNode,
  href: String
}

export default function SpecialLink({children, href}: Link) {
  return (
    <a href={`${href}`} className="transition duration-500 ease-in-out hover:text-blue-600">{children}<span className="text-blue-600">↗</span></a>
  )
}
