"use client";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { resourcesList, Resource } from "@/data/data";

export function Resources() {
  const [activeResource, setActiveResource] = useState("ALL");
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-2xl lg:text-3xl  font-semibold text-[#2E1065] tracking-wider">
        RESOURCES
      </h2>

      {/* Mobile Resources Dropdown */}
      <div className="block md:hidden">
        <Collapsible open={isResourcesOpen} onOpenChange={setIsResourcesOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="default"
              className="w-full bg-[#21005E] justify-between text-sm sm:text-base px-4 py-6 rounded-3xl "
            >
              <div className="flex items-center gap-2">
                {/* Icon placeholder */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 ">
                  <Image
                    src={resourcesList[0].icon}
                    alt={"Resource icon"}
                    width={30}
                    height={30}
                  />
                </div>
                <span>{resourcesList[0].label}</span>
              </div>
              {/* Chevron icon placeholder */}
              <div className="w-4 h-4 flex justify-center items-center">
                <Image
                  src={"/icons/chevron-arrow.svg"}
                  alt="chevron icon"
                  width={14}
                  height={6}
                />
              </div>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent
            className={cn(
              "mt-2 overflow-hidden transition-all duration-500 ease-in-out",
              isResourcesOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            )}
          >
            {resourcesList.slice(1).map((resource: Resource) => (
              <Link
                key={resource.label}
                href={resource.href}
                className="flex items-center space-x-3 p-3 hover:bg-purple-100 rounded-lg"
                onClick={() => setActiveResource(resource.label)}
              >
                {/* Icon placeholder */}
                <div className="w-6 h-6 sm:w-7 sm:h-7">
                  <Image
                    src={resource.icon}
                    alt={"Resource icon"}
                    width={28}
                    height={38}
                  />
                </div>
                <span className="font-medium text-sm sm:text-base md:text-lg tracking-wider">
                  {resource.label}
                </span>
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop Resources Navigation */}
      <div className="hidden md:flex md:flex-col space-y-2">
        {resourcesList.map((resource: Resource) => (
          <Link
            key={resource.label}
            href={resource.href}
            className={`flex items-center space-x-3 p-3 rounded-full transition-colors ${
              activeResource === resource.label
                ? "bg-[#21005E] text-white"
                : "hover:bg-purple-100"
            }`}
            onClick={() => setActiveResource(resource.label)}
          >
            {/* Icon placeholder */}
            <div className="w-7 h-7 lg:w-9 lg:h-9 relative flex-shrink-0">
              <Image
                src={resource.icon}
                alt={`${resource.label} icon`}
                fill
                sizes="(max-width: 768px) 24px, 36px"
                className="object-contain"
              />
            </div>
            <span className="font-medium text-base lg:text-lg xl:text-xl tracking-wider">
              {resource.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
