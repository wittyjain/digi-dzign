import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredContent } from "@/data/data";

export function Featured() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider text-[#21005E] mb-1">
        Featured
      </h2>
      <Card className="overflow-hidden">
        <div className="relative flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-[#2E1065]">
          <div className="space-y-4 text-white">
            <h4 className="text-white text-base sm:text-lg font-medium tracking-wider">
              {featuredContent.category}
            </h4>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">
              {featuredContent.title}
            </h3>
            <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg pt-4 sm:pt-8 md:pt-16 lg:pt-24">
              <Image
                src={featuredContent.icon}
                alt={featuredContent.author}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>By {featuredContent.author}</span>
              <span>•</span>
              <span>{featuredContent.readTime}</span>
            </div>
          </div>
          <div className="relative h-[200px] sm:h-[250px] md:h-full">
            <Image
              src={featuredContent.imageUrl}
              alt="Featured"
              fill
              className="object-cover rounded-lg bg-blend-luminosity"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
