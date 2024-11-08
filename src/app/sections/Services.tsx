"use client";

import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ServicesCardCarousel from "./ServicesCardCarousel";
import Link from "next/link";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="m-4 md:m-8 lg:m-16 lg:my-24">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full mx-auto"
      >
        <div className="mb-16">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">
              <span className="text-[#21005E]">WHAT WE</span>
              <br />
              <span className="text-[#A100FF]">EXCEL AT</span>
            </h1>
            <div className="flex justify-center items-center space-x-20">
              <Link href={"/services"}>
                <Button
                  
                  variant="outline"
                  className="hidden md:flex items-center gap-2 bg-white border border-[#A300FF] text-[#A300FF] hover:bg-white/90 rounded-xl px-6 py-6"
                >
                  VIEW ALL SERVICES
                  <span
                    className="rounded-full"
                    style={{
                      background:
                        "linear-gradient(191.95deg, #A100FF 8.73%, #21005E 56.58%)",
                    }}
                  >
                    <Image
                      src={"/icons/right-arrow.svg"}
                      alt={"right arrow"}
                      width={25}
                      height={25}
                      className="invert"
                    />
                  </span>
                </Button>
              </Link>
              <div className="w-0.5 h-12 bg-[#D9D8DD]"></div>
              <div className="flex gap-2">
                <CarouselPrevious
                  className={`m-0 static translate-y-0 border border-[#A300FF]`}
                />
                <CarouselNext
                  className={`m-0 static translate-y-0 border border-[#A300FF]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-8">
          <CarouselContent className="-ml-2 md:-ml-4 gap-4 p-4 flex">
            <ServicesCardCarousel />
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
