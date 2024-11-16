import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import Consultaion from "./Consultation";
import Contact from "./Contact";
import JoinCard from "./Joincard";
import Hero from "@/components/Hero";

export default function RequestQuote() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] flex flex-col gap-16 sm:gap-24  items-center mb-8 pb-12 md:py-8 w-full">
      <div className="w-full">
        <Hero
          headings={[
            {
              text: "Everything",
              className: "row-start-1 col-start-1 md:col-start-1 ",
            },
            {
              text: "Under",
              className:
                "row-start-2 col-start-1 md:col-start-2 md:text-[#21005E]",
            },
            {
              text: "One roof",
              className:
                "row-start-3 col-start-4 md:col-start-4 text-[#21005E]",
            },
          ]}
          backgroundImage={{
            desktop: "/images/requestquote/hero-bg.svg",
            mobile: "/images/requestquote/hero-bg-mobile.svg",
          }}
          backgroundPosition={{
            desktop: "top-[-30%] md:top-[-35%]",
            mobile: "top-[-20%]  right-0 left-0",
          }}
        />
      </div>
      <Consultaion />
      <div className="w-full">
        <Contact />
        <JoinCard />
      </div>
    </main>
  );
}
