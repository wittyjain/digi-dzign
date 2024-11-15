import Hero from "@/components/Hero";
import ContactForm from "../sections/ContactForm";
import CraftSection from "./CraftSection";
import FeatureGrid from "./FeatureGrid";
import MockupSection from "./MockupSection";

const WebServices = () => {
  return (
    <main className="relative min-h-[calc(100vh-80px)] flex flex-col gap-36 items-center mb-8 pb-12 md:py-8">
      <div className="w-full ">
        <Hero
          headings={[
            {
              text: "Web",
              className: "row-start-1 col-start-9 md:col-start-8 ",
            },
            {
              text: "Services",
              className:
                "row-start-2 col-start-1 md:col-start-4 text-[#21005E]",
            },
          ]}
          backgroundImage={{
            desktop: "/images/webservices/hero-bg.svg",
            mobile: "/images/webservices/hero-bg-mobile.svg",
          }}
          backgroundPosition={{
            desktop: "top-[-30%] left-[5%] h-[900px] w-[950px]",
            mobile: "top-[-15%] left-0",
          }}
        />
      </div>
      <MockupSection />
      <CraftSection />
      <FeatureGrid />
      <ContactForm />
    </main>
  );
};

export default WebServices;
