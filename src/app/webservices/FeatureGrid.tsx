// // "use client";

// // // Props for the Grid Layout
// // interface FeatureGridProps {
// //   children: React.ReactNode;
// //   className?: string;
// // }

// // // export default function FeatureGrid({
// // //   children,
// // //   className = "",
// // // }: FeatureGridProps) {
// // //   return (
// // //     <div className={`container mx-auto p-4 space-y-8 ${className}`}>
// // //       <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
// // //         {/* First row for desktop, first and second items for mobile */}
// // //         <div className="md:col-span-8 order-1 md:order-1">
// // //           {Array.isArray(children) ? children[0] : null}
// // //         </div>
// // //         <div className="md:col-span-4 order-2 md:order-2">
// // //           {Array.isArray(children) ? children[1] : null}
// // //         </div>

// // //         {/* Second row for desktop, third and fourth items for mobile */}
// // //         <div className="md:col-span-8 order-3 md:order-4">
// // //           {Array.isArray(children) ? children[3] : null}
// // //         </div>
// // //         <div className="md:col-span-4 order-4 md:order-3">
// // //           {Array.isArray(children) ? children[2] : null}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // export default function FeatureGrid({
// //   children,
// //   className = "",
// // }: FeatureGridProps) {
// //   return (
// //     <div className={`container mx-auto p-4 space-y-8 ${className}`}>
// //       {/* First row */}
// //       <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
// //         <div className="md:col-span-8">
// //           {/* Large card slot */}
// //           {Array.isArray(children) ? children[0] : null}
// //         </div>
// //         <div className="md:col-span-4">
// //           {/* Small card slot */}
// //           {Array.isArray(children) ? children[1] : null}
// //         </div>
// //       </div>

// //       {/* Second row (reversed) */}
// //       <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
// //         <div className="md:col-span-4">
// //           {/* Small card slot */}
// //           {Array.isArray(children) ? children[2] : null}
// //         </div>
// //         <div className="md:col-span-8">
// //           {/* Large card slot */}
// //           {Array.isArray(children) ? children[3] : null}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import WebServiceCard from "./WebServiceCard";
// import SeoCard from "./SeoCard";

// interface FeatureGridProps {
//   cards: Array<{ type: "webservice" | "seo"; props: any }>;
// }

// export default function FeatureGrid({ cards }: FeatureGridProps) {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="container mx-auto p-4 space-y-8">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`grid grid-cols-1 md:grid-cols-12 gap-6 ${
//             isMobile ? "h-screen" : "h-[60vh]"
//           }`}
//         >
//           {index % 2 === 0 ? (
//             <>
//               <div className="md:col-span-8 h-full">
//                 {card.type === "webservice" && (
//                   <WebServiceCard {...card.props} className="h-full" />
//                 )}
//               </div>
//               <div className="md:col-span-4 h-full">
//                 {card.type === "seo" && (
//                   <SeoCard {...card.props} className="h-full" />
//                 )}
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="md:col-span-4 h-full">
//                 {card.type === "seo" && (
//                   <SeoCard {...card.props} className="h-full" />
//                 )}
//               </div>
//               <div className="md:col-span-8 h-full">
//                 {card.type === "webservice" && (
//                   <WebServiceCard {...card.props} className="h-full" />
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

import { Card } from "@/components/ui/card";
import { Check, Plus } from "lucide-react";
import Image from "next/image";
import WebServiceCard from "./WebServiceCard";
import SEOCard from "./SeoCard";

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

// Grid Layout Component
export default function FeatureGrid() {
  const services = [
    {
      type: "web",
      title: "Responsive Web and Mobile Design",
      description:
        "Our developers specialize in front-end and back-end, using AngularJS, Bootstrap, PHP, WordPress, and more to build scalable, secure websites. We integrate advanced tech like Blockchain, Smart Contracts, and data solutions (Warehousing, BI) for clean, efficient, and responsive designs across all devices.",
      points: ["Data Migration Services", "Performance Optimization"],
      mediaUrl: "/images/webservices/responsive-video.mov",
      isVideo: true,
      titleColor: "text-[#21005E]",
      descriptionColor: "text-[#21005ECC] ",
      pointsColor: "text-black",
      iconColor: "text-white",
      iconbackground: "bg-[#21005E]",
      imageTransitionClass: "",
    },
    {
      type: "seo",
      title: "AI-Enhanced eCommerce Development",
      backgroundColor: "bg-gradient-to-tr from-[#21005E] to-[#A100FF] ",
      description:
        "We design AI-powered eCommerce platforms for B2B and B2C, providing personalized shopping, optimized recommendations, and seamless checkout with WooCommerce or Shopify—driving engagement, conversions, and long-term revenue growth.",
      points: [],
      mediaUrl: "/images/webservices/seo-image.svg",
      titleColor: "text-white",
      descriptionColor: "text-[#FFFFFFCC]",
      pointsColor: "text-black",
      iconColor: "text-purple-800",
      iconbackground: "bg-white",
      imageTransitionClass: "",
    },

    {
      type: "seo",
      title: "AI-Enhanced eCommerce Development",
      backgroundColor: "bg-gradient-to-tr from-[#21005E] to-[#A100FF] ",
      description:
        "We design AI-powered eCommerce platforms for B2B and B2C, providing personalized shopping, optimized recommendations, and seamless checkout with WooCommerce or Shopify—driving engagement, conversions, and long-term revenue growth.",
      points: [],
      mediaUrl: "/images/webservices/seo-image.svg",
      titleColor: "text-white",
      descriptionColor: "text-[#FFFFFFCC]",
      pointsColor: "text-black",
      iconColor: "text-purple-800",
      iconbackground: "bg-white",
      imageTransitionClass: "",
    },
    {
      type: "web",
      title: "Responsive Web and Mobile Design",
      description:
        "Our developers specialize in front-end and back-end, using AngularJS, Bootstrap, PHP, WordPress, and more to build scalable, secure websites. We integrate advanced tech like Blockchain, Smart Contracts, and data solutions (Warehousing, BI) for clean, efficient, and responsive designs across all devices.",
      points: ["Data Migration Services", "Performance Optimization"],
      mediaUrl: "/images/webservices/responsive-video.mov",
      isVideo: true,
      titleColor: "text-[#21005E]",
      descriptionColor: "text-[#21005ECC] ",
      pointsColor: "text-black",
      iconColor: "text-white",
      iconbackground: "bg-[#21005E]",
      imageTransitionClass: "",
    },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto space-y-6 w-full  flex items-center justify-center p-4 md:p-8 px-4 md:px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {services.map((service, index) => {
          const isEvenRow = Math.floor(index / 2) % 2 === 0;
          const isFirstInRow = index % 2 === 0;

          return (
            <div
              key={index}
              className={`
                  lg:h-[60vh] min-h-screen lg:min-h-0
                  ${
                    isFirstInRow
                      ? isEvenRow
                        ? "lg:col-span-8"
                        : "lg:col-span-4"
                      : isEvenRow
                      ? "lg:col-span-4"
                      : "lg:col-span-8"
                  }
                `}
            >
              {service.type === "web" ? (
                <WebServiceCard {...service} />
              ) : (
                <SEOCard {...service} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
