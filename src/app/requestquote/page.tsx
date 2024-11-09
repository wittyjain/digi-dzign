import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import Consultaion from "./Consultation";
import Contact from "./contact";
import JoinCard from "./joincard";

export default function RequestQuote() {
  return (
    <main>
      <div className="relative flex flex-col gap-20 items-center mb-8 pb-12 md:py-12  w-full">
        <div className="absolute top-[-4%] left-24 ">
          <Image
            src={"/images/requestquote/hero-bg.svg"}
            alt={"Dzign bg"}
            height={1660}
            width={1450}
            className="mix-blend-luminosity"
          />
        </div>
        <div className="grid grid-cols-12 grid-rows-12 grid-flow-row w-full  font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-9xl sm:min-h-screen">
          <div className=" col-start-2 col-span-12 row-start-1 row-span-2 bg-gradient-to-t to-[#A100FF]  from-[#21005E] text-transparent bg-clip-text uppercase ">
            Everything
          </div>
          <div className=" col-start-3 col-span-12 row-start-3 row-span-3  text-[#21005E]  bg-clip-text uppercase">
            under
          </div>
          <div className=" col-start-5 col-span-12 row-start-5 row-span-3  text-[#21005E] bg-clip-text uppercase">
            one roof
          </div>
          <div className="col-span-3 md:col-start-9 justify-end items-end row-start-7 row-span-3 w-full md:w-fit lg:min-w-[30%]">
            <CTAButton floatingImageUrl="/images/booked_fast.svg" />
          </div>
        </div>
        <Consultaion />

        <div className="w-full">
          <Contact />
          <JoinCard />
        </div>
      </div>
    </main>
  );
}
