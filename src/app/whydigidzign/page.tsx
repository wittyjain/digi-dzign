"use client";

import ValuesSection from "./DigiValues";
import Hero from "./Hero";

export default function WhyDiziDzign() {
  return (
    <main className="relative  w-full min-h-[calc(100vh-80px)]  flex flex-col gap-20 items-center mb-8 pb-12 sm:p-4 md:p-8 xl:px-16 py-4  lg:px-16 ">
      <div className="p-4">
        <Hero />
      </div>

      <ValuesSection />
    </main>
  );
}
