"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffect() {
  const words = [
    {
      text: "Crea",
    },
    {
      text: "algo",
    },
    {
      text: "increible",
    },
    {
      text: "con",
    },
    {
      text: "Nosotros.",
      className: "text-red-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
