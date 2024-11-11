"use client";
import Image from "next/image";

import ClientSection from "./ClientSection";
import ValuesSection from "./DigiValues";
import Hero from "./Hero";

export default function WhyDiziDzign() {
  return (
    <main className="relative  w-full min-h-[calc(100vh-80px)]  flex flex-col gap-36 items-center mb-8 pb-12 sm:p-4 md:p-8 xl:px-16 py-4  lg:px-16 ">
      <Hero />

      <ValuesSection />

      <ClientSection />

      <div className="max-h-screen">
        <Image
          src={"/images/whydigi/laptop.svg"}
          height={1000}
          width={1300}
          alt="laptop image"
        ></Image>
      </div>
    </main>
  );
}
