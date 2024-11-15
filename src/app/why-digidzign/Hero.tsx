"use client";

import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function Hero() {
  return (
    <section className="relative">
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
      <div className="relative w-full mx-auto mt-20 md:mt-8 lg:mt-0 grid grid-cols-12 ">
        <div className="  col-start-1 col-span-12  text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold md:font-semibold  ">
          <div className="grid grid-cols-12 gap-y-4">
            {/* Main heading */}
            <div className="col-start-1 md:col-start-6 row-start-1 col-span-12 bg-gradient-to-t to-[#A100FF]  from-[#21005E] text-transparent bg-clip-text uppercase">
              Why
            </div>

            <div className="row-start-2 col-start-4 text-[#21005E]  bg-clip-text uppercase">
              digidzign
            </div>
            {/* Bottom section with chat button and text */}
            <div className="row-start-8 md:row-start-3 col-span-12 sm:col-start-9 mt-auto  h-[100px] sm:h-auto ">
              {/* Chat button with avatars */}
              <div className="w-full sm:w-auto md:mt-0  sm:static">
                <CTAButton floatingImageUrl="/images/booked_fast.svg" />
              </div>
            </div>
            <p className=" md:text-xl text-lg md:row-start-6 row-start-8 md:col-start-6 col-span-12 border-l-4 pl-4 border-[#A100FF] ">
              Lorem ipsum dolor sit amet consectetur. Tincidunt eu massa ipsum
              egestas. Aliquam viverra arcu arcu mi tempor laoreet. Mattis
              pharetra nulla enim non eget. At elit eget ridiculus at.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
