import VideoCard from "@/components/videocard"
import Subhandle from "@/components/subhandle"

export default function VideoEditingPage() {
  return (
    <div className="mx-auto text-center w-3/4 min-h-screen pb-20">
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

      <div className="space-y-6">
        <p>I started my video editing journey in 2018 when I started creating gaming videos on my Youtube channel, "Kyota". this was when I gained enough skill and credibility to be hired by a client.</p>
        <p>During this time, many projects required tight deadlines with timezone that did not work in my favor. While these issues sometimes affected the quality of resuls I hoped for, the experience helped me to be far more efficient with my time management while giving the best quality I could.</p>
        <p>Recently, I've leaned more into movie essay as I want to focus more on my storytelling technique though I am open to work in any niche that a client should offer.</p>
      </div>

    </div>
  )
}
