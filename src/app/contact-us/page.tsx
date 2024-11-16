import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";
import ServicesShowcase from "../sections/ServicesShowcase";
import ContactForm from "@/app/sections/ContactForm";
import Testimonials from "@/app/sections/Testimonials";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import ServicesCardCarousel from "../sections/ServicesCardCarousel";

export default function ContactUs() {
  return (
    <main>
      <div className="mb-8 p-4 pb-12 md:px-8 md:py-12 lg:px-16 lg:py-17">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="w-full grid grid-cols-12 p-4 md:p-8 xl:p-4 pb-10 sm:p-20 font-semibold text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-20">
            <span
              className="col-start-3 col-end-12 bg-gradient-to-t to-[#A100FF] from-[#21005E] text-transparent bg-clip-text "
              style={{
                backgroundImage:
                  "linear-gradient(191.95deg, #A100FF 8.73%, #21005E 56.58%)",
              }}
            >
              NEED PROJECT
            </span>
            <span className="absolute top-[10px] left-1 ">
              <img
                src={"/images/work/hero-bg.svg"}
                alt={"Dzign bg"}
                height={900}
                width={950}
                className="mix-blend-luminosity"
              />
            </span>
            <span className="col-start-3 col-end-10 bg-gradient-to-t to-[#A100FF]  from-[#21005E] text-transparent bg-clip-text">
              HELP? LET'S TALK
            </span>
          </div>
          <div className="flex justify-between w-full md:pt-16">
            <p className="text-[#21005E] max-w-[30%] ">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="min-w-[40%]">
              <CTAButton floatingImageUrl="/images/booked_fast.svg" />
            </div>
          </div>
        </div>

        

        
      </div>

      <div>
        <ContactForm />
      </div>
    </main>
  );
}
