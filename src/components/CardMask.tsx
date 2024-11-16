import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CardMaskProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CardMask({
  imageSrc = "/images/card-mask-old.png",
  alt = "Masked image",
  className = "",
  children,
  ...props
}: CardMaskProps) {
  return (
    <Card
      className={`relative w-full max-w-2xl overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="relative aspect-[1.6/1]"
        style={{
          maskImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/card-mask-dl8UL1N1IN6SBGZRc5hhC0Ed3Z2dlR.png)",
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/card-mask-dl8UL1N1IN6SBGZRc5hhC0Ed3Z2dlR.png)",
          WebkitMaskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover aria-hidden"
        />
      </div>
      {children && <div className="absolute inset-0 p-6">{children}</div>}
    </Card>
  );
}
