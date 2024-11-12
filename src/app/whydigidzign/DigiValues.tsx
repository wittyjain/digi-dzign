"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import FlipCard from "./FlipCard";
import LeadershipCard from "./LeadershipCard";

// Main component
export default function ValuesSection() {
  return (
    <div className="space-y-20 py-20 w-full bg-gradient-to-r from-[#0C03AD] to-[#050337] md:rounded-3xl">
      {/* Values section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6 md:text-6xl lg:text-9xl font-semibold text-white">
            OUR VALUES
          </h1>
          <p className="text-xl text-white/80 md:text-3xl lg:w-1/2 m-auto">
            Our Values Are Part Of Everything We Create At Instrument.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:px-16 md:py-52">
          <FlipCard
            title="Expertise"
            backContent="DIGIDZIGN'S US-BASED TEAM DELIVERS TAILORED AI, WEB, AND DIGITAL SOLUTIONS TO DRIVE YOUR BUSINESS GROWTH IN TODAY'S FAST-PACED MARKET."
          />
          <FlipCard
            title="Innovation"
            backContent="We leverage cutting-edge technologies and creative approaches to deliver innovative solutions that set new industry standards."
          />
          <FlipCard
            title="Partnership"
            backContent="We build lasting partnerships with our clients, working collaboratively to achieve their business objectives and drive sustainable growth."
          />
        </div>
      </section>

      {/* Leadership section */}
      <section className="container mx-auto px-4">
        <Card className="bg-white">
          <CardContent className="md:p-9 lg:md:12 px-2 py-4">
            <div className="">
              <div className=" grid grid-cols-12 gap-y-5">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-semibold text-[#2D2D2D] col-span-12 col-start-1 row-start-1">
                  LEADERSHIP
                </h2>
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-semibold text-[#A100FF] col-span-12 col-start-6  row-start-2 ">
                  TEAM
                </h2>
                <div className="sm:col-span-3 row-span-4 col-start-1 sm:col-start-10  sm:row-start-1 row-start-5  col-span-12  outline-none rounded-tl-[20%] px-4 md:px-0 items-end">
                  <LeadershipCard
                    name="Abbas Hachem"
                    title="CEO, Software Engineer"
                    image="/images/whydigi/leader-1.jpg"
                    bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                  />
                </div>
                <div className="sm:col-span-3 col-span-12 row-span-4 col-start-1 sm:row-start-4 row-start-16 rounded-tr-[20%]   outline-none px-4 md:px-0">
                  <LeadershipCard
                    name="Laila Asmaa Alaoui"
                    title="Founder and CMO"
                    image="/images/whydigi/leader-2.jpg"
                    bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <p className="max-w-md m- text-xl text-black font-semibold ">
                Discover Our Team: Skilled Creators Focused on Your Vision
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
