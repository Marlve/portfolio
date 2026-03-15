import VideoCard from "@/components/videocard"
import Subhandle from "@/components/subhandle"

export default function VideoEditingPage() {
  return (
    <div className="mx-auto text-center w-3/4">
      <h1 className="text-2xl font-extrabold pb-8">Video Editing</h1>
      <div className="grid grid-cols-3 gap-6">
        <VideoCard id="j1x3hzed2j4"></VideoCard>
        <VideoCard id="Pr57PgpGOu8"></VideoCard>
        <VideoCard id="1kHkWN3u9jk"></VideoCard>
        <VideoCard id="g3FsIR7no3A"></VideoCard>
        <VideoCard id="qCtCJjNal14"></VideoCard>
        <VideoCard id="6Gun4UK4n0I"></VideoCard>
      </div>

      <div className="pt-4 pb-2">
        <Subhandle size="text-2xl">History</Subhandle>
      </div>

      <p>I began my journey on my gaming channel, “Kyota.” Through this experience, I later became a video editor for another creator named Benni, where I developed most of my editing skills. Throughout this period, I honed my skill in storytelling and editing as efficiently as possible even in the most urgent deadlines.</p>

    </div>
  )
}
