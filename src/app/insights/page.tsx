import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import { Resources } from "@/app/insights/Resources";
import { Topics } from "@/app/insights/Topics";
import { Featured } from "@/app/insights/Featured";
import { LatestContent } from "@/app/insights/LatestContent";
import ContactForm from "@/app/sections/ContactForm";

export default function insights() {
  return (
    <div className="flex flex-col gap-40 items-center">
      <main className=" row-start-2 flex flex-col items-center gap-40 sm:items-start w-full p-4 md:p-8 xl:p-16 pb-10 sm:p-20 ">
        <div className="w-full grid grid-cols-12 p-4 md:p-8 xl:p-10 pb-10  sm:p-20 font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-9xl gap-y-4 mb-20">
          <div className="col-start-4 col-end-12 bg-gradient-to-t to-[#A100FF]  from-[#21005E] text-transparent bg-clip-text ">
            OUR
          </div>
          <div className="absolute md:top-0 md:left-30 ">
            <Image
              src={"/images/insights/hero-bg.svg"}
              alt={"Dzign bg"}
              height={1200}
              width={1200}
              className="mix-blend-luminosity"
            />
          </div>
          <div className="col-start-5 col-end-10  text-[#21005E] bg-clip-text">
            INSIGHTS
          </div>
        </div>
        <div className="flex md:justify-end justify-center w-full p-4 md:p-8 xl:px-16 pb-20  sm:p-20">
          {/* <p className="text-[#21005E] max-w-[35%]">
          Out staffing of IT-specialists, strengthening teams and projects
        </p> */}
          <div className="min-w-[30%]">
            <CTAButton floatingImageUrl="/images/booked_fast.svg" />
          </div>
        </div>

        <section className="md:grid md:grid-cols-12 md:gap-16">
          <div className="md:col-start-1 md:col-end-3 ">
            <Resources />
          </div>
          <div className="md:col-start-3 col-span-10 flex flex-col gap-20">
            <Topics />
            <Featured />
            <LatestContent />
          </div>
        </section>
      </main>
      <ContactForm />
    </div>
  );
}
