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
import { Service } from "@/types/service";
import ServiceBadge from "@/components/ServiceBadge";
import getAllServices from "@/queries/Services/getAllServices";
import { getClient } from "@/lib/ApolloClient";

interface ServicesProps {}

export const servicesList = [
  { name: "Website Development" },
  { name: "App Development" },
  { name: "CRM, CMS, Web Apps" },
  { name: "Blockchain / Decentralized Platforms" },
  { name: "Audit" },
  { name: "E-commerce & Shopify" },
  { name: "Wireframing & User Testing" },
  { name: "Prototyping" },
  { name: "Accessibility" },
  { name: "Branding & Visual Identity" },
  { name: "User Experience Design" },
  { name: "Marketing" },
  { name: "SaaS" },
  { name: "Mobile App & Web Design" },
  { name: "Design Systems" },
  { name: "Strategy & Design" },
  { name: "Web 3.0 Design" },
  { name: "Animation & Motion Design" },
  { name: "AI design" },
];

export default async function Services({}: ServicesProps) {
  const data = await getAllServices();

  const services = data?.services?.nodes || {};

  return (
    <div className="mx-4 py-14 md:m-8 lg:m-16 lg:my-24">
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
            <div className="hidden lg:flex justify-center items-center space-x-20">
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
                      src={"/icons/right-arrow-white.svg"}
                      alt={"right arrow"}
                      width={25}
                      height={25}
                      className=""
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
        <div className="w-full grid grid-cols-1 gap-x-8">
          <CarouselContent className=" gap-8 flex">
            <ServicesCardCarousel services={services} />
          </CarouselContent>
        </div>
        <Link href={"/services"} className="w-full">
          <Button
            variant="outline"
            className="lg:hidden flex w-full my-12 items-center gap-12 bg-white border border-[#A300FF] text-[#A300FF] hover:bg-white/90 rounded-xl px-6 py-6"
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
                src={"/icons/right-arrow-white.svg"}
                alt={"right arrow"}
                width={25}
                height={25}
                className=""
              />
            </span>
          </Button>
        </Link>
      </Carousel>
      <div className="my-8 lg:my-12 px-4 py-8 lg:px-8 lg:py-12 col-start-7 col-span-6	bg-[#FCFBFF] rounded-3xl">
        <div className="flex flex-wrap justify-start items-center gap-1 min-w-[600px] mx-auto overflow-x-auto">
          {servicesList.map((service, index) => {
            // Calculate column span based on service name length
            const isLongName = service.name.length > 25;
            const colSpan = isLongName ? "sm:col-span-2" : "";

            return (
              <div key={index} className={colSpan}>
                <ServiceBadge name={service.name} color={"#21005E"} />
              </div>
            );
          })}
        </div>
        <div className="w-full mt-8 md:mt-12 lg:mt-16 flex justify-between flex-wrap space-y-8">
          <Image
            src={"/images/ideas-to-reality.png"}
            alt={"Let's turn your ideas into reality"}
            width="240"
            height="50"
          />
          <div className="w-full md:w-fit flex justify-between">
            <span>Don't see it? </span>
            <Link href={"/contact-us"} className="text-[#21005E] flex">
              <span className="font-semibold mr-1">Ask us</span>
              <Image
                src={"/icons/right-arrow-white.svg"}
                alt={"right arrow"}
                width={25}
                height={25}
                className="rounded-full inline-block h-6 w-6"
                style={{
                  background:
                    "linear-gradient(191.95deg, #A100FF 8.73%, #21005E 56.58%)",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
