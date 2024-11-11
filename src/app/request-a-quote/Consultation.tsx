"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Component() {
  const [activeTab, setActiveTab] = useState<"schedule" | "contact">(
    "schedule"
  );

  return (
    <Card className="w-full overflow-hidden border-none outline-none shadow-none mb-8 p-4 pb-12 md:px-8 md:py-12 lg:px-16 lg:py-17">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Left Section (1/3 width) */}
          <div className="w-full md:w-1/3 bg-[#2A0668] p-8 text-white rounded-l-3xl">
            <h1 className="mb-8 text-4xl font-semibold leading-normal">
              SPEAK WITH
              <br />
              AN EXPERT
            </h1>

            <div className="mb-8 flex flex-col gap-4">
              <Button
                variant={activeTab === "schedule" ? "default" : "outline"}
                className={cn(
                  "flex w-full items-center justify-start gap-6 rounded-full bg-white px-4 py-6 text-sm hover:text-white ",
                  activeTab === "schedule"
                    ? "text-[#21005E] "
                    : "text-white bg-[#21005E] "
                )}
                onClick={() => setActiveTab("schedule")}
              >
                <span className="w-4">
                  <div className="w-7 h-7">
                    <Image
                      src={"/icons/calender.svg"}
                      alt={"Calender icon"}
                      width={30}
                      height={30}
                    ></Image>
                  </div>
                </span>
                {/* Space for icon */}
                <span className="font-medium tracking-wider uppercase  ">
                  Schedule Consultation
                </span>
              </Button>

              <Button
                variant={activeTab === "contact" ? "outline" : "default"}
                className={cn(
                  "flex w-full items-center justify-start gap-6 rounded-full bg-white px-4 py-6 text-sm",
                  activeTab === "contact"
                    ? "bg-white text-[#21005E]"
                    : "bg-transparent text-white hover:bg-white hover:text-primary"
                )}
                onClick={() => setActiveTab("contact")}
              >
                <span className="w-4">
                  <div className="w-7 h-7">
                    <Image
                      src={"/icons/phone.svg"}
                      alt={"Calender icon"}
                      width={30}
                      height={30}
                    ></Image>
                  </div>
                </span>
                <span className="font-medium tracking-wider uppercase ">
                  Contact Us
                </span>
              </Button>
            </div>

            {/* Illustration */}
            <div className="mt-auto">
              <div className="relative">
                <div className="w-full flex justify-center mt-20">
                  <Image
                    src={"/images/requestquote/laptop.svg"}
                    alt={"laptop image"}
                    width={300}
                    height={300}
                  ></Image>
                </div>
                <div className="w-full flex justify-end mt-10">
                  <Image
                    src={"/images/requestquote/talk.svg"}
                    alt={"talk image"}
                    width={200}
                    height={200}
                  ></Image>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (2/3 width) */}
          <div className="w-full md:w-2/3 bg-white p-6">
            {/* Content Container */}
            <div className="h-full w-full rounded-lg bg-gray-50 p-4">
              {activeTab === "schedule" ? (
                <div className="text-center text-muted-foreground">
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
                    Schedule your free consultation today
                  </h2>
                  <div className="flex justify-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-4"></span> {/* Space for icon */}
                      <span>30 min</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-4"></span> {/* Space for icon */}
                      <span>Europe/Tirane</span>
                    </div>
                  </div>
                  <div className="text-left">
                    Calendar component will be placed here
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  Contact form component will be placed here
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
