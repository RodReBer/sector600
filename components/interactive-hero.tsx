"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "motion/react";
import { Sparkles, Users, Target, Zap } from "lucide-react";

export function InteractiveHero() {
  const words = [
    {
      text: "Construyendo",
      className: "text-gray-600 dark:text-gray-400",
    },
    {
      text: "el",
      className: "text-gray-700 dark:text-gray-300",
    },
    {
      text: "futuro",
      className: "text-red-600 dark:text-red-400",
    },
    {
      text: "de",
      className: "text-gray-700 dark:text-gray-300",
    },
    {
      text: "Uruguay",
      className: "text-sky-600 dark:text-sky-400 font-black",
    },
    {
      text: "juntos",
      className: "text-red-600 dark:text-red-400",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Participación Ciudadana",
      description: "Tu voz importa en cada decisión",
    },
    {
      icon: Target,
      title: "Objetivos Claros",
      description: "Metas concretas para el progreso",
    },
    {
      icon: Zap,
      title: "Acción Inmediata",
      description: "Resultados que puedes ver",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Partículas animadas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <TypewriterEffect
              words={words}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              cursorClassName="bg-red-600"
            />
          </motion.div>

          {/* Subtítulo animado */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Una propuesta política que prioriza la transparencia, la innovación 
            y el compromiso real con cada argentino.
          </motion.p>

          {/* Características interactivas */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-red-300 dark:hover:border-red-600 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-red-500 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
                
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400/0 via-red-400/5 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
