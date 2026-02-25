import Card from "@/components/card";
import Link from "@/components/link";
import Subhandle from "@/components/subhandle";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="grid grid-cols-2">
        <div>
          <Subhandle>Info</Subhandle>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="justify-self-end w-1/6 flex flex-col text-end">
          <Subhandle>Links</Subhandle>
          <Link href="https://www.instagram.com/drch.__/">Instagram</Link>
          <Link href="https://github.com/Marlve">Github</Link>
          <Link href="https://www.youtube.com/@TheMovieThought">Youtube</Link>
          <Link href="https://letterboxd.com/Kyotart/">Letterboxd</Link>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-4">
        <div className="bg-blue-400 transition duration-500 ease-in-out aspect-5/7 w-full saturate-0 hover:saturate-100 hover:scale-103">
        </div>
        <Card></Card>
        <div className="bg-blue-400">
        </div>
        <div className="bg-blue-400">
        </div>
      </div>

      <div className="h-[200vh]">
      {/* your content */}
      </div>

    </div>
  );
}
