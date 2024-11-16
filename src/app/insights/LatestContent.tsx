"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { latestContentList, LatestContentSection } from "@/data/data";
import { Post } from "@/types/post";
import Link from "next/link";

interface LatestContentProps {
  data: Post[];
}

export function LatestContent({ data }: LatestContentProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider text-[#21005E]  md:uppercase">
        Latest Content
      </h2>
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
        {data.map((content: Post, index: number) => (
          <Card
            key={index}
            className="overflow-hidden border-none shadow-none "
          >
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 h-full">
              <div className="flex flex-col gap-9 justify-start h-full">
                <div className="relative w-full h-[360px] ">
                  <Image
                    src={content?.featuredImage?.node?.sourceUrl}
                    alt="Blog"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-4 flex flex-col h-full">
                  <div className="flex items-center space-x-2 text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider text-[#A100FF]">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded-full bg-white">
                      <Image
                        src={"/icons/small-logo-icon.png"}
                        alt={content?.author?.node?.name}
                        width={16}
                        height={16}
                      />
                    </div>
                    <span>By {content?.author?.node?.name}</span>
                    <span>•</span>
                    <span className="font-light">
                      {/*content?.readTime ??*/ "5 mins read"}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium leading-tight text-[#21005E]">
                    {content.title}
                  </h3>
                </div>
                <div className="h-12">
                  <Link href={`/insights/${content.slug}`}>
                    <Button
                      variant="outline"
                      className="flex justify-between md:justify-center rounded-full h-full text-xs sm:text-sm font-semibold tracking-wider w-full lg:w-fit bg-transparent text-[#A100FF] border-[#A100FF] px-4 sm:px-6 py-2 sm:py-3"
                    >
                      LEARN MORE
                      <div className="w-6 h-6 sm:w-7 sm:h-7 ml-2 bg-[#A100FF] rounded-full flex items-center justify-center">
                        <Image
                          src={"/icons/right-arrow-white.svg"}
                          width={16}
                          height={16}
                          alt="right arrow"
                          className="text-white"
                        />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
