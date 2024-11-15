import CTAButton from "@/components/CTAButton";
import { cn } from "@/lib/utils";
import React from "react";

const Hero = () => {
  const beforeElement =
    "before:block before:w-[60px] before:h-[60px] before:bg-hero-cyan lg:before:bg-none before:bg-cover before:bg-no-repeat before:absolute before:-bottom-0 before:-left-[5%] md:before:-left-[2%] before:mix-blend-luminosity";
  const afterElement =
    "after:block after:w-[240px] after:h-[240px] after:bg-hero-cube lg:after:bg-none after:bg-cover after:bg-no-repeat after:absolute after:-bottom-[150%] md:after:-bottom-[80%] after:left-[30%] after:mix-blend-luminosity";

  return (
    <div className="w-full grid grid-cols-12 px-4 py-12 md:p-8 xl:p-16 pb-20 gap-y-8 sm:p-20">
      <h1 className="font-semibold text-5xl md:text-7xl lg:text-8xl xl:text-9xl col-span-12 text-[#21005E] flex flex-col gap-y-12 ml-6 mb-20">
        <div className="col-start-1">MIAMI'S AI</div>
        <div
          className={cn(
            `relative col-start-3 pl-[calc(var(--grid-space)*1+var(--grid-gap)*1)] lg:pl-[calc(var(--grid-space)*3+var(--grid-gap)*3)]`,
            beforeElement,
            afterElement,
          )}
        >
          WEB DESIGN
        </div>
        <div className="col-start-1">AGENCY</div>
      </h1>
      <div className="col-span-12 flex justify-end md:justify-between items-start flex-wrap">
        <p className="text-[#21005E] max-w-[60%] md:max-w-[40%] lg:max-w-[30%] text-sm md:text-lg lg:text-2xl xl:text-3xl">
          Out staffing of IT-specialists, strengthening teams and projects
        </p>
        <div className="w-full md:w-fit lg:min-w-[40%] mt-10">
          <CTAButton floatingImageUrl="/images/booked_fast.svg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
