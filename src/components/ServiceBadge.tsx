import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceBadgeProps {
  name: string;
  icon?: string;
  color?: string;
}

export default function ServiceBadge({ name, icon, color }: ServiceBadgeProps) {
  return (
    <Card
      className={cn(
        "flex rounded-full items-center gap-3 p-4 transition-colors hover:bg-accent cursor-pointer group",
        color ? `border-[${color}]` : ""
      )}
    >
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
      <span
        className={cn(
          "text-sm md:text-lg font-normal text-[#21005E]  group-hover:text-primary-foreground ",
          color ? `text-[${color}]` : ""
        )}
      >
        {name}
      </span>
    </Card>
  );
}
