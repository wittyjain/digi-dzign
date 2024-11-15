"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import CTAButton from "./CTAButton";

interface HeroProps {
  headings: {
    text: string;
    className?: string;
  }[];
  paragraph?: string;
  backgroundImage: {
    desktop: string;
    mobile: string;
  };
  backgroundPosition?: {
    desktop?: string;
    mobile?: string;
  };
}

export default function Hero({
  headings = [],
  paragraph,
  backgroundImage,
  backgroundPosition = {
    desktop: "",
    mobile: "top-0 left-0",
  },
}: HeroProps) {
  return (
    <section className="relative ">
      {/* Background images with responsive handling */}
      <div
        className={cn("absolute hidden md:block", backgroundPosition.desktop)}
      >
        <Image
          src={backgroundImage.desktop}
          alt="Background"
          height={950}
          width={1450}
          className="mix-blend-luminosity"
        />
      </div>
      <div
        className={cn("absolute block md:hidden", backgroundPosition.mobile)}
      >
        <Image
          src={backgroundImage.mobile}
          alt="Background"
          height={500}
          width={400}
          className="mix-blend-luminosity"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full p-4 md:px-8 lg:px-16 pt-8 md:pt-0 grid grid-cols-12 gap-y-8 md:gap-y-4 text-5xl md:text-8xl lg:text-[140px] font-bold md:font-semibold">
        {/* Dynamic headings */}
        {headings.map((heading, index) => (
          <div
            key={index}
            className={cn(
              "col-span-12 bg-gradient-to-t from-[#21005E] to-[#A100FF] text-transparent bg-clip-text uppercase",
              index === 0 ? "md:col-start-6" : "md:col-start-4",
              heading.className
            )}
          >
            {heading.text}
          </div>
        ))}

        {/* Optional paragraph */}
        {paragraph && (
          <p className="md:text-3xl text-lg font-normal leading-7 row-start-12 md:row-start-6 col-span-12  md:col-start-5 border-l-4 pl-4 mt-10 md:mt-0 border-[#A100FF] ">
            {paragraph}
          </p>
        )}

        {/* CTA Button section */}
        <div
          className={cn(
            "col-span-12 md:col-start-9 mt-12 md:mt-0",
            paragraph ? "row-start-9 md:row-start-3" : "row-start-9",
            ""
          )}
        >
          <div className="w-full sm:w-auto">
            <CTAButton floatingImageUrl="/images/booked_fast.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
