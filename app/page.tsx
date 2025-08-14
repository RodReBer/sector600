import { VideoHero } from "@/components/video-hero"
import { InfiniteQuotes } from "@/components/infinite-quotes"
import { ActionCards } from "@/components/action-cards"
import { QuickAccess } from "@/components/quick-access"
import { FeaturedNews } from "@/components/featured-news"
import { CallToAction } from "@/components/call-to-action"
import { InteractiveHero } from "@/components/interactive-hero"
import { AnimatedStats } from "@/components/animated-stats"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Elementos flotantes de fondo */}
      <FloatingElements />
      
      {/* Hero principal con video */}
      <VideoHero />
      
      <FeaturedNews />
      {/* Hero interactivo con typewriter */}
      <InteractiveHero />
      
      {/* Estadísticas animadas */}
      <AnimatedStats />
      
      <InfiniteQuotes />
      <ActionCards />
      <QuickAccess />
      <CallToAction />
    </div>
  )
}
