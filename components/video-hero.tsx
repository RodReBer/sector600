"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, ChevronDown } from 'lucide-react'
import Link from "next/link"

export function VideoHero() {

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-red-500/20 to-red-500/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Main Title with Skewed Text */}
            <h1 className="mb-8">
              <span className="block text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-2 transform -skew-x-12">
                Luchando
              </span>
              <span className="block text-6xl md:text-8xl lg:text-9xl font-bold text-red-400 transform skew-x-12">
                por vos
              </span>
            </h1>

            {/* Description */}
            <div className="mb-8 max-w-3xl">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Desde proteger los derechos de los trabajadores hasta defender la educación pública,
                el Sector 600 está luchando por tus mejores intereses. Pero no podemos hacerlo sin <strong>vos</strong>.
                Así que scrolleá hacia abajo y <strong><em>Unite a la Renovación</em></strong>...
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  )
}
