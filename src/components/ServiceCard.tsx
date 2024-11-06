import Image from "next/image";
import { Card } from "@/components/ui/card";

interface WebServicesCardProps {
  title: string;
  description: string;
  deviceImage: string;
  backgroundImage: string;
  className?: string;
}

export default function Component({
  title = "Web Services",
  description = "Your landing page is the first thing your customers, investors and partners see.",
  deviceImage = "",
  backgroundImage = "/placeholder.svg?height=600&width=800",
  className = "",
}: WebServicesCardProps) {
  return (
    <Card
      className={`relative overflow-hidden w-[296px] h-[446px] ${className}`}
    >
      {/* Background image with blend mode */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundBlendMode: "luminosity",
        }}
      />
      <div>
        <div className="relative z-10 py-8 md:p-8 text-white px-4">
          <h2 className="text-3xl md:text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-[16px] leading-6 font-normal md:text-base text-white/90 max-w-md">
            {description}
          </p>
        </div>

        <div className="relative w-72  md:w-80 aspect-[4/3]">
          <Image
            src={deviceImage}
            alt="Device preview"
            fill
            className="object-cover rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
    </Card>
  );
}
