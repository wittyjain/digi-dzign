"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function FlipCard({
  title,
  logo = "/logo-white.svg",
  backContent,
}: {
  title: string;
  logo?: string;
  backContent: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] sm:aspect-square md:aspect-[3/4] lg:aspect-square">
      <div
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] cursor-pointer ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front of card */}
        <Card
          className="absolute w-full h-full [backface-visibility:hidden] bg-[#00008B] text-white border-2 border-white/20 cursor-pointer"
          onClick={() => setIsFlipped(true)}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/whydigi/frontcard-bg.svg"
              alt="Background pattern"
              fill
              className="object-cover object-center"
            />
          </div>

          <CardContent className="p-6 sm:p-8 md:p-10 h-full flex flex-col justify-center items-center space-y-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={120}
                className="w-full h-full object-contain mix-blend-lighten"
              />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase z-10 text-center">
              {title}
            </h3>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] cursor-pointer"
          onClick={() => setIsFlipped(false)}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/whydigi/hiddencard-bg.svg"
              alt="Background pattern"
              fill
              className="object-cover object-center"
            />
          </div>
          <CardContent className="p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between items-center">
            <p className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg z-10 text-center uppercase">
              {backContent}
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#21005E] text-center uppercase opacity-30 z-10">
              {title}
            </h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
