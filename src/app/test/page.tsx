"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function Hero() {
  return (
    <section className="relative  w-full min-h-[calc(100vh-80px)]  flex flex-col gap-20 items-center mb-8 pb-12 p-4 md:p-8 xl:px-16 py-4  lg:px-16 ">
      {/* Background container - you can add your background image here */}
      <div className="absolute top-[-20%] w-[1600px] h-[1800px]  ">
        {/* Background will go here */}
        <Image
          src={"/images/requestquote/hero-bg.svg"}
          alt={"Dzign bg"}
          height={1660}
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
            <div className="col-start-1 md:col-start-2 row-start-1 col-span-12 bg-gradient-to-t to-[#A100FF]  from-[#21005E] text-transparent bg-clip-text uppercase">
              EVERYTHING
            </div>

            <div className="row-start-2 col-start-3 text-[#21005E]  bg-clip-text uppercase">
              UNDER
            </div>

            <div className=" row-start-3 col-span-12 col-start-4 md:col-start-5 text-[#21005E]  bg-clip-text uppercase">
              ONE ROOF
            </div>
            {/* Bottom section with chat button and text */}
            <div className="row-start-12 md:row-start-4 col-span-12 sm:col-start-9 mt-auto  h-[100px] sm:h-auto ">
              {/* Chat button with avatars */}
              <div className="w-full sm:w-auto mt-10 md:mt-0  sm:static">
                <CTAButton floatingImageUrl="/images/booked_fast.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
