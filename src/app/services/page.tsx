import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";
import ServicesShowcase from "../sections/ServicesShowcase";
import ContactForm from "@/app/sections/ContactForm";
import Testimonials from "@/app/sections/Testimonials";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import ServicesCardCarousel from "../sections/ServicesCardCarousel";

export default function Services() {
  return (
    <main>
      <div className="mb-8 p-4 pb-12 md:px-8 md:py-12 lg:px-16 lg:py-17">
        <header className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="w-full grid grid-cols-12 p-4 md:p-8 xl:p-4 pb-10  sm:p-20 font-semibold text-9xl  mb-20">
            <div className="col-start-5 col-end-12 bg-gradient-to-t to-[#A100FF]  from-[#21005E] text-transparent bg-clip-text ">
              WHAT WE
            </div>
            <div className="absolute top-[10px] left-1 ">
              <img
                src={"/images/work/hero-bg.svg"}
                alt={"Dzign bg"}
                height={900}
                width={950}
                className="mix-blend-luminosity"
              />
            </div>
            <div className="col-start-3 col-end-10 bg-gradient-to-t to-[#A100FF]  from-[#21005E] text-transparent bg-clip-text">
              EXCEL AT
            </div>
          </div>
          <div className="flex justify-between w-full md:pt-16">
            <p className="text-[#21005E] max-w-[30%] ">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="min-w-[40%]">
              <CTAButton floatingImageUrl="/images/booked_fast.svg" />
            </div>
          </div>
        </header>

        {/* <div className="grid grid-cols-3 grid-rows-2 grid-flow-col gap-4 overflow-x-auto md:grid-cols-2 mx-auto md:max-w-fit min-w-max px-4 md:h-[530px]">
          <div className="md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2">
            <ServiceCard
              title="Web Services"
              description="Your landing page is the first thing your customers, investors and partners see."
              deviceImage="/images/work/macbook.jpg"
              backgroundImage="/images/work/background.png"
              className="md:w-full md:h-full"
            />
          </div>

          <div className="md:w-[442px]">
            <ServiceCard
              title="App Design"
              description="User experience makes all the difference between good products and great ones."
              deviceImage="/images/work/mobile.svg"
              backgroundImage="/images/work/sand-cloud.png"
              className="md:w-full md:h-full "
            />
          </div>

          <div className="md:w-[442px]">
            <ServiceCard
              title="Business Consulting"
              description="AI, LLMs, NLP: Unlocking the Future of Intelligent Interaction and Language Processing."
              deviceImage="/images/work/ai-image.svg"
              backgroundImage="/images/work/background.png"
              className="md:w-full md:h-full "
            />
          </div>
        </div> */}

        <Carousel
          className="w-full max-w-7xl my-20"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="px-4 md:px-8 lg:px-16">
            <ServicesCardCarousel />
          </CarouselContent>
        </Carousel>

        <ServicesShowcase />
      </div>

      <div>
        <Testimonials />
        <ContactForm />
      </div>
    </main>
  );
}
