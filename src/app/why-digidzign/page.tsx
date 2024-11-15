"use client";
import Image from "next/image";

import ClientSection from "./ClientSection";
import ValuesSection from "./DigiValues";
import Hero from "./Hero";
import ScrollAnimation from "./scroll-animation";
import ProjectsFigues from "./ProjectsFigues";
import SeedSection from "./SeedSection";
import PhotoGrid from "./PhotoGrid";
import QuestionSection from "./QuestionSection";
import ContactForm from "@/app/sections/ContactForm";

export default function WhyDiziDzign() {
  return (
    <main className="relative  w-full min-h-[calc(100vh-80px)]  flex flex-col gap-36 items-center mb-8 pb-12 md:py-8    ">
      <div className="py-4  sm:p-4 lg:px-16 md:px-8 flex flex-col gap-36">
        <Hero />

        <ValuesSection />

        <ClientSection />
      </div>

      <div className="w-full p-0">
        <Image
          src={"/images/whydigi/laptop.svg"}
          height={1400}
          width={1600}
          alt="laptop image"
        ></Image>
      </div>

      <ScrollAnimation />
      <ProjectsFigues />

      <div className="p-4 lg:px-16 md:px-8 flex flex-col md:gap-36 sm:gap-20">
        <SeedSection />
        <PhotoGrid />
        <QuestionSection />
      </div>
      <ContactForm />
    </main>
  );
}
