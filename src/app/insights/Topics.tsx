"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { topicsList, Topic } from "@/data/data";
import Image from "next/image";

export function Topics() {
  const [activeTopic, setActiveTopic] = useState("SEE ALL");
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-2xl lg:text-3xl  font-semibold tracking-wider text-[#21005E] mb-6">
        TOPICS
      </h2>

      {/* Mobile Topics Dropdown */}
      <div className="block md:hidden">
        <Collapsible open={isTopicsOpen} onOpenChange={setIsTopicsOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="default"
              className="w-full bg-[#7E22CE] flex justify-between gap-4 px-4 py-6 rounded-3xl"
            >
              <div className="flex items-center gap-2">
                <span>{topicsList[0].label}</span>
                <span className="bg-white px-2 py-1 text-[#7E22CE] rounded-2xl">
                  {topicsList[0].count}
                </span>
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
          <CollapsibleContent className="mt-2 space-y-2">
            {topicsList.slice(1).map((topic: Topic) => (
              <Button
                key={topic.label}
                variant="secondary"
                className="w-full rounded-3xl"
                onClick={() => setActiveTopic(topic.label)}
              >
                <span>{topic.label}</span>
                <span>{topic.count}</span>
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop Topics ScrollArea */}
      <div className="hidden md:block">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex pb-4 flex-wrap gap-4">
            {topicsList.map((topic: Topic) => (
              <Button
                key={topic.label}
                variant={topic.featured ? "default" : "secondary"}
                className={`rounded-full ${
                  topic.featured ? "bg-[#A100FF]" : "bg-gray-100 text-[#21005E]"
                } ${
                  activeTopic === topic.label
                    ? " bg-[#A100FF] text-white"
                    : "bg-gray-100 text-[#21005E] "
                }`}
                onClick={() => setActiveTopic(topic.label)}
              >
                <span className="md:text-base tracking-wider font-medium ">
                  {topic.label}
                </span>
                <span className="ml-1 ">({topic.count})</span>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
