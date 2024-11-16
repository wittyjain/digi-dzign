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
import { resourcesList, Resource } from "@/data/data";

export function Resources() {
  const [activeResource, setActiveResource] = useState("ALL");
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-[#2E1065] tracking-wider">
        RESOURCES
      </h2>

      {/* Mobile Resources Dropdown */}
      <div className="block md:hidden">
        <Collapsible open={isResourcesOpen} onOpenChange={setIsResourcesOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="default"
              className="w-full bg-[#21005E] justify-between "
            >
              <div className="flex items-center gap-2">
                {/* Icon placeholder */}
                <div className="w-7 h-7">
                  <Image
                    src={resourcesList[0].icon}
                    alt={"Resource icon"}
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <span>{resourcesList[0].label}</span>
              </div>
              {/* Chevron icon placeholder */}
              <div className="w-4 h-4">
                <Image
                  src={"/icons/chevron-arrow.svg"}
                  alt="chevron icon"
                  width={14}
                  height={6}
                ></Image>
              </div>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            {resourcesList.slice(1).map((resource: Resource) => (
              <Link
                key={resource.label}
                href={resource.href}
                className="flex items-center space-x-3 p-3 hover:bg-purple-100 rounded-lg"
                onClick={() => setActiveResource(resource.label)}
              >
                {/* Icon placeholder */}
                <div className="w-7 h-7">
                  <Image
                    src={resource.icon}
                    alt={"Resource icon"}
                    width={28}
                    height={38}
                  ></Image>
                </div>
                <span className="font-medium md:text-xl text-lg tracking-wider">
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
            <div className="w-9 h-9">
              <Image
                src={resource.icon}
                alt={"Resource icon"}
                width={36}
                height={36}
              ></Image>
            </div>
            <span className="font-medium md:text-xl text-lg tracking-wider ">
              {resource.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
