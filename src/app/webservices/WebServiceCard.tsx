"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Check, Plus } from "lucide-react";

interface FeaturePoint {
  text: string;
}

interface FeatureCardProps {
  title?: string;
  description?: string;
  points?: FeaturePoint[];
  videoSrc?: string;
  className?: string;
  minMaxProgress?: number;
}

export default function Component({
  title = "Responsive Web and Mobile Design",
  description = "Our developers specialize in front-end and back-end...",
  points = [
    { text: "Data Migration Services" },
    { text: "Performance Optimization" },
  ],
  videoSrc = "/placeholder.mp4",
  className = "",
  minMaxProgress = 50,
}: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log("Component mounted");
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((e) => console.error("Video playback failed:", e));
    }
  }, []);

  return (
    <Card
      ref={cardRef}
      className={`relative overflow-hidden p-6 md:p-8 bg-white rounded-3xl ${className}`}
    >
      <button className="absolute top-4 right-4 w-10 h-10 bg-[#21005E] rounded-full flex items-center justify-center">
        <Plus className="w-6 h-6 text-white" />
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl md:text-3xl font-semibold text-[#21005E]">
            {title}
          </h2>
          <p className="text-[#21005ECC] text-lg font-normal md:font-medium leading-6">
            {description}
          </p>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5A00FF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-black font-normal md:font-medium text-lg">
                  {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </Card>
  );
}
