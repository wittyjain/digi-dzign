import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredContent } from "@/data/data";

export function Featured() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-wider text-[#21005E] mb-1">
        Featured
      </h2>
      <Card className="overflow-hidden">
        <div className="relative flex flex-col md:grid md:grid-cols-2 gap-6 p-6 bg-[#2E1065]">
          <div className="space-y-4 text-white">
            <h4 className="text-white text-lg font-medium tracking-wider">
              {featuredContent.category}
            </h4>
            <h3 className="text-2xl md:text-3xl font-medium">
              {featuredContent.title}
            </h3>
            <div className="flex items-center space-x-2 text-sm md:text-lg pt-24">
              <Image
                src={featuredContent.icon}
                alt={featuredContent.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>By {featuredContent.author}</span>
              <span>•</span>
              <span>{featuredContent.readTime}</span>
            </div>
          </div>
          <div className="relative">
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
