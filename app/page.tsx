import Card from "@/components/card";
import Link from "next/link";
import Subhandle from "@/components/subhandle";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="grid grid-cols-2">
        <div>
          <Subhandle>Info</Subhandle>
          <p>I'm a Computer Science student with a passion for films and video editing. I first started editing videos in 2018 and have continued to do so casually ever since by editing for other youtuber and creating my own channel currently by the name "Movie Thoughts".  </p>
        </div>
        <div className="justify-self-end w-1/6 flex flex-col text-end">
          <Subhandle>Links</Subhandle>
          <Link href="https://www.instagram.com/drch.__">Instagram</Link>
          <Link href="https://github.com/Marlve">Github</Link>
          <Link href="https://www.youtube.com/@TheMovieThought">Youtube</Link>
          <Link href="https://letterboxd.com/Kyotart">Letterboxd</Link>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-4">
        <Card src="/video_editing.JPG" alt="me" href="video-editing"></Card>
      </div>

      <div className="h-[200vh]">
      </div>

    </div>
  );
}
