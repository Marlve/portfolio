import Card from "@/components/card";
import Link from "next/link";
import SpecialLink from "@/components/special_link";
import Subhandle from "@/components/subhandle";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Subhandle>Info</Subhandle>
          <p>I'm a Computer Science student with a passion for films and video editing. I first started editing videos in 2018 and have continued to do so casually ever since by editing for other youtubers and creating my own channel currently by the name "Movie Thoughts".</p>
        </div>
        <div className="md:justify-self-end md:w-1/6 flex flex-col md:text-end mt-4 md:mt-0">
          <Subhandle>Links</Subhandle>
          <SpecialLink href="https://www.instagram.com/drch.__">Instagram</SpecialLink>
          <SpecialLink href="https://github.com/Marlve">Github</SpecialLink>
          <SpecialLink href="https://www.youtube.com/@TheMovieThought">Youtube</SpecialLink>
          <SpecialLink href="https://letterboxd.com/Kyotart">Letterboxd</SpecialLink>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4">
        <Card src="/video_editing.JPG" alt="me" href="video-editing"></Card>
      </div>
      <div className="h-[200vh]"></div>
    </div>
  );
}
