import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import type { ButtonProps } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface CTAButtonProps extends ButtonProps {
  circleCount?: number;
  floatingImageUrl?: string;
}

export default function LetsTalkBtn({
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
      <div className="relative md:w-fit w-full">
        <Link href={"/request-a-quote"}>
          <Button
            className={`relative h-auto p-0 overflow-hidden rounded-full w-full md:w-fit ${className}`}
            style={{
              background: `
                  linear-gradient(81.55deg, #DBEF33 12.1%, #60EA5B 65.02%, #32E2CF 101.37%)
                  `,
              backgroundBlendMode: "overlay",
            }}
            {...props}
          >
            <div className="w-full md:w-fit relative flex items-center justify-between gap-4 px-12 md:px-6 py-3">
              <span className="font-semibold text-lg text-[#21005E]">
                {children}
              </span>
              <div className="flex -space-x-2">
                {[...Array(circleCount)].map((_, index) => (
                  <Avatar
                    key={index}
                    className="border-2 border-white w-10 h-10"
                  >
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
        </Link>
      </div>
    </>
  );
}
