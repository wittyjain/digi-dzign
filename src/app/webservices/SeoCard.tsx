// import { Plus } from "lucide-react";
// import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// interface ServiceCardProps {
//   title: string;
//   description: string;
//   backgroundColor: string;
//   bottomImage: string;
// }

// export default function SeoCard({
//   title = "AI-Enhanced eCommerce Development",
//   description = "We design AI-powered eCommerce platforms for B2B and B2C, providing personalized shopping, optimized recommendations, and seamless checkout with WooCommerce or Shopify—driving engagement, conversions, and long-term revenue growth.",
//   backgroundColor = "bg-[#7928CA]",
//   bottomImage = "/placeholder.svg?height=400&width=800",
// }: ServiceCardProps) {
//   return (
//     <Card
//       className={`relative w-full max-w-4xl overflow-hidden rounded-3xl ${backgroundColor}`}
//     >
//       <CardContent className="relative z-10 p-8 md:p-12 ">
//         <CardHeader className="p-0">
//           <div className="flex justify-between items-start">
//             <CardTitle className="text-white text-xl md:text-2xl font-semibold max-w-2xl leading-10">
//               {title}
//             </CardTitle>
//             <Button
//               size="icon"
//               variant="secondary"
//               className="rounded-full w-8 h-8"
//             >
//               <Plus className="w-full h-full" />
//             </Button>
//           </div>
//         </CardHeader>

//         <p className="text-white/90 text-base font-normal  md:font-medium mt-8 md:mt-12 max-w-3xl leading-relaxed">
//           {description}
//         </p>

//         <div className=" h-[300px] md:h-[400px]">
//           <Image
//             src={bottomImage}
//             alt="Service illustration"
//             fill
//             className="object-cover object-top"
//             priority
//           />
//         </div>
//       </CardContent>

//       {/* Gradient Overlay */}
//     </Card>
//   );
// }

import { Card } from "@/components/ui/card";
import { Check, Plus } from "lucide-react";
import Image from "next/image";

// Types for our card props
interface ServiceCardProps {
  title: string;
  description: string;
  points?: string[];
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

// SEO Card Component
export default function SEOCard({
  title,
  description,
  points = [],
  backgroundColor = "bg-gradient-to-tr from-[#21005E] to-[#A100FF] ",
  mediaUrl,
  isVideo = false,
  titleColor = "text-white",
  descriptionColor = "text-[#FFFFFFCC]",
  pointsColor = "text-black",
  iconColor = "text-white",
  iconbackground = "bg-[#21005E]",
  imageTransitionClass = "",
}: ServiceCardProps) {
  return (
    <Card className={`h-full ${backgroundColor} overflow-hidden`}>
      <div className="flex flex-col h-full">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2
              className={`text-xl md:text-3xl  font-semibold  mb-4 w-1/2   ${titleColor}`}
            >
              {title}
            </h2>
            <div
              className={`flex items-center justify-center ${iconbackground}  rounded-full p-2 max-w-[3rem] max-h-[3rem]`}
            >
              <Plus className={`${iconColor} w-full h-full`} />
            </div>
          </div>
          <p
            className={`mb-6 text-base font-normal md:font-medium ${descriptionColor}`}
          >
            {description}
          </p>
          <ul className="space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="text-blue-600 w-5 h-5" />
                <span className={pointsColor}>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-full">
          {isVideo ? (
            <video
              className="w-full h-full object-cover"
              controls
              src={mediaUrl}
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
