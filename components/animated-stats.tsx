"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Building, Heart } from "lucide-react";

export function AnimatedStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: Users,
      value: 150000,
      label: "Ciudadanos Comprometidos",
      suffix: "+",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Building,
      value: 45,
      label: "Proyectos en Marcha",
      suffix: "",
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      value: 89,
      label: "Índice de Aprobación",
      suffix: "%",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      value: 25,
      label: "Años de Experiencia",
      suffix: "",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Números que Hablan
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Resultados concretos que demuestran nuestro compromiso con el cambio
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ 
  stat, 
  index, 
  isInView 
}: { 
  stat: any; 
  index: number; 
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const increment = stat.value / 50;
        const interval = setInterval(() => {
          setCount((prev) => {
            if (prev >= stat.value) {
              clearInterval(interval);
              return stat.value;
            }
            return Math.min(prev + increment, stat.value);
          });
        }, 30);
        return () => clearInterval(interval);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, stat.value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        bounce: 0.3
      }}
      className="relative group"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
        <motion.div
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 mx-auto`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <stat.icon className="w-6 h-6 text-white" />
        </motion.div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.5 }}
        >
          <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            {Math.floor(count).toLocaleString()}{stat.suffix}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {stat.label}
          </div>
        </motion.div>

        {/* Efecto de pulso */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10`}
          animate={isInView ? { scale: [1, 1.05, 1] } : {}}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: index * 0.3 
          }}
        />
      </div>
    </motion.div>
  );
}
