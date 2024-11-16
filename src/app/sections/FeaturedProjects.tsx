"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "ALL",
  "FINTECH",
  "AI & ML",
  "HEALTHCARE",
  "B2B",
  "SAAS",
  "OTHER INDUSTRIES",
];

interface Project {
  category: string;
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    category: "RADIANCE AND SPA",
    title:
      "Reshaping the musical experience with a new identity for the AI-music platform",
    image: "/images/featured-projects/1.png",
  },
  {
    category: "AFFECT CHANGE",
    title:
      "Effective time management with a simple and minimalistic Patria platform",
    image: "/images/featured-projects/1.png",
  },
  {
    category: "YOUBETME",
    title:
      "Effective time management with a simple and minimalistic Patria platform",
    image: "/images/featured-projects/1.png",
  },
];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="bg-featured-projects bg-cover bg-no-repeat mx-4 my-14 md:m-8 lg:m-16 px-4 py-12 md:p-8 lg:px-12 lg:py-16 rounded-3xl">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full mx-auto"
      >
        <div className="mb-16">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold">
              <span className="text-white">FEATURED</span>
              <br />
              <span className="text-[#3A47F4]">PROJECTS</span>
            </h1>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link href="/work">
                <Button
                  variant="outline"
                  className="hidden md:flex items-center gap-2 bg-white text-[#21005E] text-sm font-semibold hover:bg-white/90 rounded-xl px-6 py-6"
                >
                  VIEW ALL PROJECTS
                  <Image
                    src={"/icons/right-arrow.svg"}
                    alt={"right arrow"}
                    width={25}
                    height={25}
                  />
                </Button>
              </Link>
              <div className="w-0.5 h-12 bg-[#644D8E]"></div>
              <div className="flex gap-2">
                <CarouselPrevious className={`static translate-y-0`} />
                <CarouselNext className={`static translate-y-0`} />
              </div>
            </div>
          </div>
          <div className="flex gap-3 overflow-x-scroll pb-4 md:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className={cn(
                  `rounded-full px-6 py-6 whitespace-nowrap`,
                  activeCategory === category
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-transparent text-white hover:bg-white/20 transition-all hover:text-white"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-8">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2"
              >
                <Card
                  className="border-0 bg-white overflow-hidden group"
                  //   style={{
                  //     maskImage: `url('/images/card-mask-old.png')`,
                  //   }}
                >
                  <CardContent className="p-0 relative">
                    <div className="relative aspect-[4/3] rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="m-6 space-y-2">
                      <h3 className="text-sm font-medium tracking-wider text-[#02021E]">
                        {project.category}
                      </h3>
                      <p className="text-2xl font-semibold leading-tight text-[#02021E]">
                        {project.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <Link href={"/work"}>
            <Button
              variant="outline"
              className="lg:hidden w-full items-center gap-2 bg-white text-[#21005E] text-sm font-semibold hover:bg-white/90 rounded-xl px-6 py-6 flex gap-x-12"
            >
              VIEW ALL PROJECTS
              <Image
                src={"/icons/right-arrow.svg"}
                alt={"right arrow"}
                width={25}
                height={25}
              />
            </Button>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
