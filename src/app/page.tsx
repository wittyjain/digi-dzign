import CTAButton from "@/components/CTAButton";
import ContactForm from "@/app/sections/ContactForm";
import Image from "next/image";
import FeaturedProjects from "./sections/FeaturedProjects";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="w-full">
        <Hero />
        <FeaturedProjects />
        <Services />
        <Testimonials />
        <ContactForm />
      </div>
    </main>
  );
}
