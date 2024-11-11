"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Play, Pause } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

interface TestimonialCardProps {
  name: string;
  title: string;
  quote: string;
  avatar: string;
  media: {
    type: "image" | "video";
    src: string;
  };
}

export default function TestimonialCard({
  name = "Asya Rudikoff",
  title = "Manager of Physical and Occupational Therapy",
  quote = "We knew we had room for overall process improvement and greater efficiency. With Skedulo we've improved utilization and reduced costs significantly.",
  avatar = "/placeholder.svg?height=80&width=80",
  media = { type: "image", src: "/placeholder.svg?height=400&width=300" },
}: TestimonialCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isFlipped) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isFlipped]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="group flip-card border-0 w-full h-[540px] perspective-1000 relative">
      <div
        className={`flip-card-inner border-0 w-full h-full transition-transform duration-1000 transform-style-3d relative group-hover:rotate-y-180`}
      >
        {/* Front of card */}
        <Card className="rounded-3xl flip-card-front w-full h-full border-0 absolute backface-hidden">
          <div
            className="rounded-3xl flex w-full h-full flex-col border p-6 space-y-12"
            style={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#0C03AD",
              //   borderImageSource:
              //     "linear-gradient(90deg, #0C03AD 0%, #050337 100%)",
            }}
          >
            <Avatar className="size-24">
              <AvatarImage
                width={100}
                height={100}
                src={avatar}
                alt="Avatar 2"
              />
            </Avatar>
            <p className="text-[#002755] text-2xl leading-10">“{quote}”</p>
            <div>
              <div className="text-[#002755] text-2xl font-semibold">
                {name}
              </div>
              <div className="text-[#424242] text-lg">{title}</div>
            </div>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="flip-card-back w-full h-full rounded-3xl border-0 absolute backface-hidden rotate-y-180 overflow-hidden">
          <div className="relative h-full">
            {media.type === "image" ? (
              <img
                src={media.src}
                alt=""
                className="h-full w-full object-cover rounded-3xl"
              />
            ) : (
              <video
                ref={videoRef}
                src={media.src}
                className="h-full w-full object-cover rounded-3xl"
                loop
                muted
                playsInline
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-white">
              <div className="w-full h-full flex flex-col justify-between">
                <Avatar className="size-24">
                  <AvatarImage
                    width={100}
                    height={100}
                    src={avatar}
                    alt="Avatar 2"
                  />
                </Avatar>
                <div className="w-full flex justify-center items-center">
                  {media.type === "image" && (
                    <button
                      onClick={togglePlay}
                      className="mb-4 rounded-xl h-[100px] w-[100px] flex justify-center items-center p-4 backdrop-blur-2xl transition-transform hover:scale-110"
                      style={{
                        backdropFilter: "blur(31.63333511352539px)",

                        boxShadow: "0px 18.25px 91.25px 0px #1B19444D",
                      }}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8" />
                      )}
                    </button>
                  )}
                </div>
                <footer className="text-left">
                  <cite className="not-italic">
                    <div className="text-white text-2xl font-semibold">
                      {name}
                    </div>
                    <div className="text-white text-lg">{title}</div>
                  </cite>
                </footer>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
