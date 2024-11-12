// Flippable card component for values
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const FlipCard = ({
  title,
  logo = "/logo-white.svg",
  backContent,
}: {
  title: string;
  logo?: string;
  backContent: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="relative w-full aspect-[3/4] sm:aspect-square md:aspect-[3/4]  ">
      <div
        className={` relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] cursor-pointer ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        // onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <Card
          className="absolute w-full h-full [backface-visibility:hidden] bg-[#00008B] text-white border-2 border-white/20 cursor-pointer"
          onClick={() => setIsFlipped(true)}
        >
          {/* Background Image */}
          <div className="absolute inset-0 ">
            <Image
              src="/images/whydigi/frontcard-bg.svg"
              alt="Background Image"
              fill
              className="object-cover object-center"
            />
          </div>

          <CardContent className="p-6 sm:p-8 md:p-10 h-full flex flex-col justify-center items-center space-y-8">
            <div className=" w-24 h-24 lg:w-28 lg:h-28">
              <Image
                src={"/logo-white.svg"}
                alt="Logo"
                width={120}
                height={120}
                className="w-full h-full object-contain mix-blend-lighten"
              />
            </div>
            <h3 className="text-3xl font-semibold uppercase z-10 text-center ">
              {title}
            </h3>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] cursor-pointer"
          onClick={() => setIsFlipped(false)}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/whydigi/hiddencard-bg.svg"
              alt="Background Image"
              fill
              className="object-cover object-center"
            />
          </div>
          <CardContent className="p-6  md:p-10 py-20 h-full flex flex-col justify-between items-center">
            <p className="text-gray-700 font-semibold text-lg z-10 text-center uppercase">
              {backContent}
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#21005E] text-center uppercase opacity-30 z-10">
              {title}
            </h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlipCard;
