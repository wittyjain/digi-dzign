import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Service } from "@/types/service";
import Link from "next/link";
import React, { Fragment } from "react";

const carouselItems = [
  {
    title: "Web Services",
    description:
      "Your landing page is the first thing your customers, investors, and partners see.",
    image: "path/to/web-services-image.png",
    bg: "bg-web-services bg-cover bg-no-repeat mix-blend-luminosity",
    textPosition: "translate-x-[75%] translate-y-[75%]",
  },
  {
    title: "App Design",
    description:
      "User experience makes all the difference between good products and great ones.",
    image: "path/to/app-design-image.png",
    bg: "bg-app-design bg-cover bg-no-repeat",
    textPosition: "-translate-x-1/2",
    // style: { background: "linear-gradient(90deg, #0C03AD 0%, #050337 100%)" },
  },
  {
    title: "Business Consulting",
    description:
      "AI, LLMs, NLP: Unlocking the future of intelligent interaction and language processing.",
    image: "path/to/business-consulting-image.png",
    bg: "bg-business-consulting bg-contain bg-left bg-no-repeat",
    textPosition: "translate-x-1/2",
    // style: {
    //   background: "linear-gradient(191.95deg, #A100FF 8.73%, #21005E 56.58%)",
    // },
  },
  {
    title: "Digital Marketing",
    description:
      "User experience makes all the difference between good products and great ones.",
    image: "path/to/digital-marketing-image.png",
    bg: "bg-digital-marketing bg-cover bg-no-repeat",
    textPosition: "-translate-x-1/2 -translate-y-1/2",
    // style: { background: "linear-gradient(90deg, #0C03AD 0%, #050337 100%)" },
  },
];

const textPositionMap: { [key: string]: string } = {
  center: "",
  left: "-translate-x-1/2",
  right: "translate-x-[75%]",
  top: "-translate-y-1/2",
  bottom: "translate-y-[75%]",
  "top-left": "-translate-x-1/2 -translate-y-1/2",
  "top-right": "translate-x-[75%] -translate-y-1/2",
  "bottom-left": "-translate-x-1/2 translate-y-[75%]",
  "bottom-right": "translate-x-[75%] translate-y-[60%] lg:translate-y-[75%]",
};

const organizeItems = (items: Service[]) => {
  const layout = [];
  let index = 0;

  if (!items) return [];

  while (index < items.length) {
    // First column - 1 card
    if (index < items.length) {
      layout.push([items[index]]);
      index += 1;
    }

    // Second column - 2 stacked cards
    if (index < items.length) {
      layout.push(items.slice(index, index + 2));
      index += 2;
    }
  }

  return layout;
};

interface ServicesCardCarouselProps {
  services: Service[];
}

const ServicesCardCarousel = ({ services }: ServicesCardCarouselProps) => {
  const organizedItems = organizeItems(services);

  return (
    <>
      {organizedItems.map((column, colIndex) => (
        <CarouselItem
          key={colIndex}
          className={`space-y-4 min-h-96 lg:min-h-[500px] flex flex-col w-fit ${
            colIndex % 2 === 0 ? "lg:basis-2/3" : "lg:basis-1/3"
          }`}
        >
          {column.map((item, index) => {
            const textPosition: keyof typeof textPositionMap =
              item.serviceData.textPosition;

            const serviceImg = item?.serviceData?.bgImage?.node;
            const serviceCardStyle = cn(
              `cursor-pointer w-full rounded-3xl p-4 h-full flex justify-center items-center hover:bg-[150%,150%] transition-all duration-500 ease-linear`,

              item.serviceData.bgPosition
            );

            return (
              <Fragment key={index}>
                {colIndex % 2 === 0 ? (
                  <Link
                  href={`/services/${item.slug}`}
                    key={item.title}
                    className={serviceCardStyle}
                    style={{
                      background: `url(${serviceImg?.sourceUrl || ""}), ${
                        item?.serviceData?.bgGradient
                      }`,
                    }}
                  >
                    <div
                      className={`max-w-[40%] ${textPositionMap[textPosition]}`}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {item.serviceData.description}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <Link
                  href={`/services/${item.slug}`}
                    key={item.title}
                    className={serviceCardStyle}
                    style={{
                      background: `url(${serviceImg?.sourceUrl || ""}), ${
                        item?.serviceData?.bgGradient
                      }`,
                    }}
                  >
                    <div
                      className={`max-w-[40%] ${textPositionMap[textPosition]}`}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {item.serviceData.description}
                      </p>
                    </div>
                  </Link>
                )}
              </Fragment>
            );
          })}
        </CarouselItem>
      ))}
    </>
  );
};

export default ServicesCardCarousel;
