"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, ChevronDown } from "lucide-react"
import Link from "next/link"

export function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/placeholder-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-600/90 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
              <span className="text-white text-sm font-medium">Sector 600 - Partido Colorado</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white block">Construyendo el</span>
              <span className="text-red-400 block">Uruguay</span>
              <span className="text-white block">del futuro</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
              Con Robert Silva y el Sector 600, trabajamos por un país más justo, próspero y solidario para todas las
              familias uruguayas.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8">
                <Link href="/participa/sumate">Sumate al Sector</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-red-600 text-lg px-8 bg-transparent"
              >
                <Link href="/propuestas">Ver Propuestas</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-gray-300">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-300">Propuestas presentadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">1000+</div>
                <div className="text-sm text-gray-300">Militantes activos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-6 right-6 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  )
}
