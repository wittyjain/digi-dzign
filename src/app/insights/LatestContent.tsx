import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { latestContentList, LatestContentSection } from "@/data/data";

export function LatestContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider text-[#21005E] mb-6">
        Latest Content
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {latestContentList.map(
          (content: LatestContentSection, index: number) => (
            <Card key={index} className="overflow-hidden border-none">
              <CardContent className="p-10">
                <div className="flex flex-col gap-4 justify-start">
                  <div className="relative w-full  h-[360px]">
                    <Image
                      src={content.imageUrl}
                      alt="Blog"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-2 text-xl font-medium tracking-wider text-[#A100FF]">
                      <Image
                        src={content.icon}
                        alt={content.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span>By {content.author}</span>
                      <span>•</span>
                      <span>{content.readTime}</span>
                    </div>
                    <h3 className="md:text-3xl font-medium leading-9 text-[#21005E]">
                      {content.title}
                    </h3>
                    <Button
                      variant="outline"
                      className="rounded-full text-sm font-semibold tracking-widet text-[#A100FF] border-[#A100FF] px-4 py-2"
                    >
                      LEARN MORE
                      {/* Arrow icon placeholder */}
                      <div className="w-7 h-7 ml-2 bg-[#A100FF] rounded-full ">
                        <Image
                          src={"/icons/right-arrow-white.svg"}
                          width={40}
                          height={40}
                          alt="right arrow"
                          className="text-white"
                        />
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
