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
  console.log(data);
  return (
    <div className="space-y-4">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider text-[#21005E] mb-6">
        Latest Content
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((content: Post, index: number) => (
          <Card
            key={index}
            className="overflow-hidden border-none bg-[#F5F5F5]"
          >
            <CardContent className="p-10 h-full">
              <div className="flex flex-col gap-4 justify-start h-full">
                <div className="relative w-full  h-[360px]">
                  <Image
                    src={content?.featuredImage?.node?.sourceUrl}
                    alt="Blog"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-4 flex flex-col h-full">
                  <div className="flex items-center space-x-2 text-xl font-medium tracking-wider text-[#A100FF] ">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white">
                      <Image
                        src={"/icons/small-logo-icon.png"}
                        alt={content?.author?.node?.name}
                        width={20}
                        height={20}
                      />
                    </div>
                    <span>By {content?.author?.node?.name}</span>
                    <span>•</span>
                    <span className="font-light">
                      {content?.readTime ?? "5 mins read"}
                    </span>
                  </div>
                  <h3 className="md:text-3xl font-medium leading-9 text-[#21005E]">
                    {content.title}
                  </h3>
                </div>
                <div className="h-12">
                  <Link href={`/insights/${content.slug}`}>
                    <Button
                      variant="outline"
                      className="rounded-full h-full text-sm font-semibold tracking-wider w-full lg:w-fit bg-transparent text-[#A100FF] border-[#A100FF] px-6 py-3"
                    >
                      LEARN MORE
                      {/* Arrow icon placeholder */}
                      <div className="w-7 h-7 ml-2 bg-[#A100FF] rounded-full ">
                        <Image
                          src={"/icons/right-arrow-white.svg"}
                          width={32}
                          height={32}
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
