import { VideoHero } from "@/components/video-hero"
import { InfiniteQuotes } from "@/components/infinite-quotes"
import { QuickAccess } from "@/components/quick-access"
import { FeaturedNews } from "@/components/featured-news"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <VideoHero />
      <InfiniteQuotes />
      <QuickAccess />
      <FeaturedNews />
      <CallToAction />
    </div>
  )
}
