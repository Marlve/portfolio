import Link from 'next/link'
import Subhandle from "./subhandle"

export default function Header() {
  return (
    <header className="py-4 grid grid-cols-2 select-none sticky top-0 bg-background z-10">
      <div>
        <Link href='/' className="text-lg">Derich Marlve</Link>
        <Subhandle size="text-sm">Student</Subhandle>
      </div>
      <div className="justify-self-end self-end mb-2 text-end">
        <Link
          href="mailto:derichmedia@gmail.com"
          className="border border-white rounded-md px-2 py-2 text-sm md:text-base transition duration-500 ease-in-out hover:border-blue-600 hover:text-blue-600 whitespace-nowrap">
          Contact Me
        </Link>
      </div>
    </header>
  )
}
