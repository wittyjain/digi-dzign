"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)]">
      {/* Background container - you can add your background image here */}
      <div className="absolute top-[-30%] left-[-10%]   ">
        {/* Background will go here */}
        <Image
          src={"/images/whydigi/hero-bg.svg"}
          alt={"Dzign bg"}
          height={950}
          width={1450}
          className="mix-blend-luminosity"
        />
      </div>

      {/* Content container */}
      {/* <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32"> */}
      <div className="relative z-10 w-full mx-auto mt-20 md:mt-8 lg:mt-0 grid grid-cols-12 ">
        <div className="  col-start-1 col-span-12  text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold md:font-semibold  ">
          <div className="grid grid-cols-12 gap-y-4">
            {/* Main heading */}
            <div className="col-start-1 md:col-start-8 row-start-1 col-span-12 md:mt-20 bg-gradient-to-t to-[#A100FF]  from-[#21005E] text-transparent bg-clip-text uppercase">
              web
            </div>

            <div className="col-start-5 row-start-2 text-[#21005E]  bg-clip-text uppercase">
              services
            </div>

            <div className="col-span-12 sm:col-start-9 row-start-3 mt-auto  h-[100px] sm:h-auto ">
              <div className="w-full sm:w-auto md:mt-0  sm:static">
                <CTAButton floatingImageUrl="/images/booked_fast.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
