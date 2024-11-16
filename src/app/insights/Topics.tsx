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

export function Topics() {
  const [activeTopic, setActiveTopic] = useState("SEE ALL");
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl md:text-2xl font-semibold tracking-wider text-[#2E1065] pb-1">
        TOPICS
      </h2>

      {/* Mobile Topics Dropdown */}
      <div className="block md:hidden">
        <Collapsible open={isTopicsOpen} onOpenChange={setIsTopicsOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="default"
              className="w-full bg-[#7E22CE] justify-between"
            >
              <span>
                {topicsList[0].label} {topicsList[0].count}
              </span>
              {/* Chevron icon placeholder */}
              <div className="w-4 h-4"></div>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            {topicsList.slice(1).map((topic: Topic) => (
              <Button
                key={topic.label}
                variant="secondary"
                className="w-full justify-between"
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
          <div className="flex pb-4 flex-wrap gap-4 ">
            {topicsList.map((topic: Topic) => (
              <Button
                key={topic.label}
                variant={topic.featured ? "default" : "secondary"}
                className={`rounded-full ${
                  topic.featured ? "bg-[#A100FF]" : "bg-gray-100"
                } ${activeTopic === topic.label ? " ring-purple-500" : ""}`}
                onClick={() => setActiveTopic(topic.label)}
              >
                <span className="md:text-base tracking-wider font-medium text-[#21005E]">
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
