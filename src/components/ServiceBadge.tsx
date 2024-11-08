import Image from "next/image";
import { Card } from "@/components/ui/card";

interface ServiceBadgeProps {
  name: string;
  icon?: string;
}

export default function ServiceBadge({ name, icon }: ServiceBadgeProps) {
  return (
    <Card className="flex rounded-full items-center gap-3 p-4 transition-colors hover:bg-accent cursor-pointer group">
      {icon && (
        <div className="relative w-8 h-8 flex-shrink-0">
          <Image
            src={icon}
            alt={`${name} icon`}
            fill
            className="object-contain"
          />
        </div>
      )}
      <span className="text-lg font-normal text-[#21005E]  group-hover:text-primary-foreground ">
        {name}
      </span>
    </Card>
  );
}
