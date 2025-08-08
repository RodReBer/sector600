"use client";
import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Heart, Users, MessageSquare, FileText } from 'lucide-react';

const actionCards = [
  {
    title: "doná",
    href: "/participa/donaciones",
    icon: <Heart className="h-12 w-12 text-red-600 group-hover/canvas-card:text-white" />,
    colors: [[220, 38, 38], [239, 68, 68]], // Red colors
  },
  {
    title: "sumate",
    href: "/participa/sumate", 
    icon: <Users className="h-12 w-12 text-red-600 group-hover/canvas-card:text-white" />,
    colors: [[185, 28, 28], [220, 38, 38]], // Darker red
  },
  {
    title: "participá",
    href: "/participa/plataforma",
    icon: <MessageSquare className="h-12 w-12 text-red-600 group-hover/canvas-card:text-white" />,
    colors: [[239, 68, 68], [248, 113, 113]], // Lighter red
  },
  {
    title: "propuestas",
    href: "/propuestas",
    icon: <FileText className="h-12 w-12 text-red-600 group-hover/canvas-card:text-white" />,
    colors: [[153, 27, 27], [185, 28, 28]], // Deep red
  },
];

export function ActionCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="mb-8">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-2 transform -skew-x-12 uppercase">
              Unite a la
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-red-600 transform skew-x-12 uppercase">
              renovación
            </span>
          </h1>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {actionCards.map((card, index) => (
            <Card 
              key={card.title} 
              title={card.title} 
              icon={card.icon}
              href={card.href}
              colors={card.colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  href,
  colors,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  colors: number[][];
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <Link href={href}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-gray-200 group/canvas-card flex items-center justify-center bg-white hover:border-red-300 max-w-sm w-full mx-auto p-6 relative h-80 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      >
        {/* Corner decorations */}
        {/* <Icon className="absolute h-4 w-4 -top-2 -left-2 text-red-600 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300" />
        <Icon className="absolute h-4 w-4 -bottom-2 -left-2 text-red-600 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300" />
        <Icon className="absolute h-4 w-4 -top-2 -right-2 text-red-600 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300" />
        <Icon className="absolute h-4 w-4 -bottom-2 -right-2 text-red-600 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300" />*/}

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0 rounded-lg overflow-hidden"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-white"
                colors={colors}
                dotSize={2}
                showGradient={false}
              />
              {/* Red overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20 text-center">
          <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-300 w-full mx-auto flex items-center justify-center mb-4">
            {icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white group-hover/canvas-card:-translate-y-2 transition duration-300 transform skew-x-12 uppercase tracking-wider">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
