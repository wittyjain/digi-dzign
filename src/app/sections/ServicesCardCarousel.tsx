import ServiceCard from "@/components/ServiceCard";
import { CarouselItem } from "@/components/ui/carousel";
import React, { Fragment } from "react";

const carouselItems = [
  {
    title: "Web Services",
    description:
      "Your landing page is the first thing your customers, investors, and partners see.",
    image: "path/to/web-services-image.png",
    bg: "bg-web-services bg-cover bg-no-repeat mix-blend-luminosity",
    textPosition: "translate-x-1/2 translate-y-1/2"
  },
  {
    title: "App Design",
    description:
      "User experience makes all the difference between good products and great ones.",
    image: "path/to/app-design-image.png",
    bg: "bg-web-services bg-cover bg-no-repeat",
  },
  {
    title: "Digital Marketing",
    description:
      "User experience makes all the difference between good products and great ones.",
    image: "path/to/digital-marketing-image.png",
    bg: "bg-web-services bg-cover bg-no-repeat",
  },
  {
    title: "Business Consulting",
    description:
      "AI, LLMs, NLP: Unlocking the future of intelligent interaction and language processing.",
    image: "path/to/business-consulting-image.png",
    bg: "bg-web-services bg-cover bg-no-repeat",
  },
];

const organizeItems = (items: typeof carouselItems) => {
  const layout = [];
  let index = 0;

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

const ServicesCardCarousel = () => {
  const organizedItems = organizeItems(carouselItems);

  return (
    <>
      {organizedItems.map((column, colIndex) => (
        <CarouselItem
          key={colIndex}
          className={`space-y-4 min-h-96 flex flex-col w-fit ${
            colIndex % 2 === 0 ? "lg:basis-2/3" : "lg:basis-1/3"
          }`}
        >
          {column.map((item, index) => (
            <>
              {colIndex % 2 === 0 ? (
                <div
                  key={index}
                  className={`w-full rounded-3xl p-4 h-full flex justify-center items-center ${item.bg}`}
                >
                    <div className={`max-w-[40%] ${item.textPosition}`}>
                        <h3 className="text-lg font-semibold text-white">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                </div>
              ) : (
                <div
                  key={index}
                  className={`rounded-3xl w-full p-4 grow ${item.bg}`}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              )}
            </>
          ))}
        </CarouselItem>
      ))}
    </>
  );
};

export default ServicesCardCarousel;
