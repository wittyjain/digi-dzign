"use client";

import { Card } from "@/components/ui/card";
import { Check, Plus } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";

// Types for our card props
interface ServiceCardProps {
  title: string;
  description: string;
  points: string[];
  backgroundColor?: string;
  mediaUrl: string;
  isVideo?: boolean;
  titleColor?: string;
  descriptionColor?: string;
  pointsColor?: string;
  iconColor?: string;
  iconbackground?: string;
  imageTransitionClass?: string;
}

// WebService Card Component
export default function WebServiceCard({
  title,
  description,
  points,
  backgroundColor = "",
  mediaUrl,
  isVideo = false,

  titleColor = "text-[#21005E]",
  descriptionColor = "text-[#21005ECC] ",
  pointsColor = "text-black",
  iconColor = "text-white",
  iconbackground = "bg-[#21005E]",
  imageTransitionClass = "",
}: ServiceCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && isVideo) {
      videoRef.current.play();
    }
  }, [isVideo]);
  return (
    <Card className={`h-full ${backgroundColor} overflow-hidden relative`}>
      <div className="flex flex-col lg:flex-row h-full">
        <div className="p-6 lg:w-1/2">
          <div className="flex justify-between items-start ">
            <h2
              className={`text-xl md:text-2xl w-1/2 md:w-full font-semibold ${titleColor}`}
            >
              {title}
            </h2>
            <div
              className={`absolute md:right-[2%] md:top-[4%] top-[2%] right-[5%] flex items-center justify-center ${iconbackground}  rounded-full p-2 max-w-[3rem] max-h-[3rem]`}
            >
              <Plus className={`${iconColor} w-full h-full`} />
            </div>
          </div>
          <p
            className={`my-6 text-base font-normal md:font-medium leading-6 ${descriptionColor}`}
          >
            {description}
          </p>
          <ul className="space-y-5 text-base font-normal md:font-medium">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-[#21005E] rounded-full p-2 max-w-[2rem] max-h-[2rem]">
                  <Check className="text-white w-full h-full" />
                </div>
                <span className={pointsColor}>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 h-full md:absolute md:right-0 md:top-1/3">
          {isVideo ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              src={mediaUrl}
              aria-label={`Video illustrating ${title}`}
            />
          ) : (
            <Image
              src={mediaUrl}
              alt={title}
              fill
              className={`object-cover ${imageTransitionClass}`}
            />
          )}
        </div>
      </div>
    </Card>
  );
}
