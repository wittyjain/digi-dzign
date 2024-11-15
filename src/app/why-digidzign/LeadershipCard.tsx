import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X, Plus } from "lucide-react";
import Image from "next/image";

// Leadership card component
const LeadershipCard = ({
  name,
  title,
  image,
  bio,
}: {
  name: string;
  title: string;
  image: string;
  bio: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (isExpanded) {
    return (
      <Card className="fixed inset-0 z-50 m-4 md:m-8 bg-white overflow-auto">
        <CardContent className="relative p-6">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute right-4 top-4 p-2 rounded-full bg-purple-600 text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src={image}
                alt={name}
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-[#A100FF]">BIO</h2>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#21005E]">{name}</h3>
                <p className="text-gray-600">{title}</p>
              </div>
              <p className="text-black">{bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className="group relative cursor-pointer outline-none border-none shadow-none rounded-none"
      onClick={() => setIsExpanded(true)}
    >
      <CardContent className="p-0">
        <div className="relative w-full h-full object-cover">
          <Image
            src={image}
            alt={name}
            className="object-cover w-full h-full "
            width={350}
            height={450}
          />
          <div className="absolute bottom-[-5%] right-[-9%]  p-2">
            <div className="p-2 rounded-full bg-purple-600 text-white">
              <Plus className="w-6 h-6 lg:w-10 lg:h-10" />
            </div>
          </div>
        </div>
        <div className="py-4 space-y-1">
          <h3 className="font-semibold md:text-2xl text-lg text-[#21005E]">
            {name}
          </h3>
          <p className="text-sm text-gray-600 md:text-base">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadershipCard;
