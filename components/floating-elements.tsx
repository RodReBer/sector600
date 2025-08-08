"use client";

import { motion } from "motion/react";
import { Sparkles, Star, Circle } from "lucide-react";

export function FloatingElements() {
  const elements = [
    { icon: Sparkles, x: "10%", y: "20%", delay: 0 },
    { icon: Star, x: "80%", y: "30%", delay: 1 },
    { icon: Circle, x: "15%", y: "70%", delay: 2 },
    { icon: Sparkles, x: "85%", y: "80%", delay: 3 },
    { icon: Star, x: "50%", y: "10%", delay: 4 },
    { icon: Circle, x: "90%", y: "60%", delay: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0], 
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <element.icon className="w-4 h-4 text-red-400/30" />
        </motion.div>
      ))}
      
      {/* Formas geométricas flotantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div 
            className={`w-2 h-2 ${
              i % 3 === 0 ? 'bg-blue-400/20' : 
              i % 3 === 1 ? 'bg-red-400/20' : 'bg-yellow-400/20'
            } rounded-full`}
          />
        </motion.div>
      ))}
    </div>
  );
}
