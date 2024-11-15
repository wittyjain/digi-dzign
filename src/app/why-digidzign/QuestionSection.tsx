"use client";

import { useState, useRef, useEffect } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

export default function Component() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setExpandedIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  const leftColumnItems = faqData.filter((_, index) => index % 2 === 0);
  const rightColumnItems = faqData.filter((_, index) => index % 2 === 1);

  const renderFAQItem = (
    item: FAQItem,
    index: number,
    columnOffset: number
  ) => {
    const actualIndex = index * 2 + columnOffset;
    const isExpanded = expandedIndex === actualIndex;
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (contentRef.current) {
        contentRef.current.style.maxHeight = isExpanded
          ? `${contentRef.current.scrollHeight}px`
          : "0px";
      }
    }, [isExpanded]);

    return (
      <Card
        key={actualIndex}
        className="cursor-pointer bg-white overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-md"
        onClick={() => toggleQuestion(actualIndex)}
      >
        <div className="p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#21005E]">
              {item.question}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              className={`shrink-0 h-10 w-10 rounded-full bg-[#21005E] hover:bg-[#2D046E]/90 transition-transform duration-300 ease-in-out ${
                isExpanded ? "rotate-180 bg-[#A100FF]" : ""
              }`}
              aria-expanded={isExpanded}
              aria-controls={`faq-answer-${actualIndex}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleQuestion(actualIndex);
              }}
            >
              {isExpanded ? (
                <Minus className="h-5 w-5 text-white" />
              ) : (
                <Plus className="h-5 w-5 text-white" />
              )}
              <span className="sr-only">Toggle answer</span>
            </Button>
          </div>
          <div
            ref={contentRef}
            id={`faq-answer-${actualIndex}`}
            className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed overflow-hidden transition-[max-height] duration-300 ease-in-out"
            style={{ maxHeight: "0px" }}
          >
            {item.answer}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="">
      <div className="w-full mb-12">
        <h1 className="text-5xl md:text-7xl lg:text-9xl leading-tight font-semibold text-[#21005E] uppercase">
          Got any <span className="text-[#3A47F4]">questions?</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {leftColumnItems.map((item, idx) => renderFAQItem(item, idx, 0))}
        </div>
        <div className="space-y-6">
          {rightColumnItems.map((item, idx) => renderFAQItem(item, idx, 1))}
        </div>
      </div>
    </div>
  );
}
