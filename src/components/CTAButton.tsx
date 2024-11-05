import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import type { ButtonProps } from "@/components/ui/button";
import Image from "next/image";

interface CTAButtonProps extends ButtonProps {
  circleCount?: number;
  floatingImageUrl?: string;
}

export default function CTAButton({
  children = "LET'S TALK",
  circleCount = 3,
  floatingImageUrl = "",
  className,
  ...props
}: CTAButtonProps) {
  const avatars = [
    "/images/avatar1.png",
    "/images/avatar2.png",
    "/images/avatar3.png",
  ];
  return (
    <>
      <div className="relative">
        <Button
          className={`relative h-auto p-0 overflow-hidden rounded-2xl ${className}`}
          style={{
            background: `
                linear-gradient(81.55deg, #DBEF33 12.1%, #60EA5B 65.02%, #32E2CF 101.37%)
                `,
            backgroundBlendMode: "overlay",
          }}
          {...props}
        >
          <div className="relative flex items-center gap-4 px-6 py-3">
            <span className="font-semibold text-lg text-white">{children}</span>
            <div className="flex -space-x-2">
              {[...Array(circleCount)].map((_, index) => (
                <Avatar key={index} className="border-2 border-white w-10 h-10">
                  <Image
                    src={avatars[index]}
                    alt={`Team member ${index + 1}`}
                    width={40}
                    height={40}
                  />
                </Avatar>
              ))}
            </div>
          </div>
        </Button>
        <div className="absolute -bottom-4 -right-12">
          <Image src={floatingImageUrl} alt={"partner with us"} width="150" height="40" />
        </div>
      </div>
    </>
  );
}
