import CTAButton from "@/components/CTAButton";
import React from "react";

const Hero = () => {
  const afterElement =
    "after:block after:w-[240px] after:h-[240px] lg:after:w-[680px] lg:after:h-[680px] after:bg-hero-cube after:bg-cover after:bg-no-repeat after:absolute after:-bottom-72 after:right-[92px] after:mix-blend-luminosity";

  return (
    <div className="w-full grid grid-cols-12 p-4 md:p-8 xl:p-16 pb-20 gap-8 sm:p-20">
      <h1 className="font-semibold text-5xl md:text-7xl lg:text-9xl col-span-12 text-[#21005E] flex flex-col gap-y-12 mb-20">
        <div className="col-start-1">MIAMI'S AI</div>
        <div
          className={`relative col-start-3 pl-[calc(var(--grid-space)*3+var(--grid-gap)*3)] ${afterElement}`}
        >
          WEB DESIGN
        </div>
        <div className="col-start-1">AGENCY</div>
      </h1>
      <div className="col-span-12 flex justify-end md:justify-between items-start flex-wrap">
        <p className="text-[#21005E] max-w-[30%] text-xl lg:text-2xl xl:text-3xl">
          Out staffing of IT-specialists, strengthening teams and projects
        </p>
        <div className="w-full md:w-fit lg:min-w-[40%]">
          <CTAButton floatingImageUrl="/images/booked_fast.svg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
