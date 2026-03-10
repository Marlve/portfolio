import Link from 'next/link'
import Subhandle from "./subhandle"

export default function Header() {
  return (
    <header className="py-4 grid grid-cols-2 select-none sticky top-0 bg-background z-10">
      <div className="">
        <p className="text-lg">Derich Marlve</p>
        <Subhandle size="text-sm">Student</Subhandle>
      </div>

      <div className="justify-self-end w-1/6 self-end mb-2 text-end">
        <Link
          href="mailto:derichmedia@gmail.com"
          className="border border-white rounded-md px-2 py-2 transition duration-500 ease-in-out hover:border-blue-600 hover:text-blue-600">Contact Me
        </Link>
      </div>
    </header>
  )
}
