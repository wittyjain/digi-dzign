import CTAButton from "@/components/CTAButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn, formatDate, isNew } from "@/lib/utils";
import getAllPosts from "@/queries/Posts/getAllPosts";
import { Post } from "@/types/post";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const insights = [
  {
    id: 1,
    img: "/images/our-insights/1.png",
    title: "Lorem ipsum dolor sit amet consectetur. Morbi lorem eget senectus",
    isNew: true,
    url: "",
    updatedAt: new Date(),
  },
  {
    id: 1,
    img: "/images/our-insights/2.png",
    title: "Lorem ipsum dolor sit amet consectetur. Morbi lorem eget senectus",
    isNew: true,
    url: "",
    updatedAt: new Date(),
  },
  {
    id: 1,
    img: "/images/our-insights/1.png",
    title: "Lorem ipsum dolor sit amet consectetur. Morbi lorem eget senectus",
    isNew: true,
    url: "",
    updatedAt: new Date(),
  },
];

export default async function OurInsights({ showHead = true }) {
  const data = await getAllPosts({ after: "null", first: 5 });
  const posts = data.posts.nodes;
  // const carouselRef = useRef<HTMLDivElement>(null);

  // const scroll = (direction: "left" | "right") => {
  //   if (carouselRef.current) {
  //     const { scrollLeft, clientWidth } = carouselRef.current;
  //     const scrollTo =
  //       direction === "left"
  //         ? scrollLeft - clientWidth
  //         : scrollLeft + clientWidth;
  //     carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  //   }
  // };

  return (
    <div className="bg-[#0A0219] px-4 py-12 md:p-8 lg:px-16 lg:py-20 lg:pt-28">
      {/* Hero Section */}
      {showHead && (
        <section className="mx-auto py-8 px-4 leading-[60px] lg:py-20 lg:px-16">
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold leading-[60px] lg:leading-[120px] w-fit mx-auto">
            <span className="text-[#3A47F4] lg:leading-[120px]">
              CREATIVE DESIGN
            </span>{" "}
            ATTRACTS PEOPLE.{" "}
            <span className="text-[#3A47F4] leading-[60px] lg:leading-[120px]">
              SMART UX
            </span>{" "}
            MAKES{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 43%, rgba(255, 255, 255, 0) 100%)",
              }}
              className="leading-[60px] lg:leading-[120px] block bg-clip-text bg-cover bg-no-repeat text-transparent"
            >
              THEM STAY AT OUT CROWD
              <br />- WE DELIVER BOTH.
            </span>
          </h2>
          <div className="mt-8 lg:mt-24 flex justify-end w-full">
            <div className="w-full lg:mr-40 md:w-fit lg:min-w-[40%]">
              <CTAButton floatingImageUrl="/images/booked_fast.svg" />
            </div>
          </div>
        </section>
      )}

      {/* Insights Section */}
      <section className="mx-auto py-20">
        <div className="bg-white rounded-3xl py-8 lg:py-16 xl:py-20">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full mx-auto"
          >
            <div className="px-4 lg:px-8 xl:px-12 mb-16">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-5xl lg:text-7xl xl:text-9xl font-bold">
                  <span className="text-[#21005E]">OUR</span>
                  <br />
                  <span className="text-[#3A47F4]">INSIGHTS</span>
                </h2>
                <div className="hidden md:flex justify-center items-center space-x-20">
                  <Link
                    href="/insights"
                    className="hidden md:flex items-center gap-2 bg-white border border-[#A300FF] text-[#A300FF] hover:bg-white/90 rounded-xl px-6 py-4"
                  >
                    VIEW ALL INSIGHTS
                    <span
                      className="rounded-full"
                      style={{
                        background:
                          "linear-gradient(191.95deg, #A100FF 8.73%, #21005E 56.58%)",
                      }}
                    >
                      <Image
                        src={"/icons/right-arrow.svg"}
                        alt={"right arrow"}
                        width={25}
                        height={25}
                        className="invert"
                      />
                    </span>
                  </Link>
                  <div className="w-0.5 h-12 bg-[#644D8E]"></div>
                  <div className="flex gap-2">
                    <CarouselPrevious
                      className={`m-0 static translate-y-0 border border-[#A300FF]`}
                    />
                    <CarouselNext
                      className={`m-0 static translate-y-0 border border-[#A300FF]`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1">
              <CarouselContent className="px-4 lg:px-8 xl:px-12 gap-x-4 lg:gap-x-6 xl:gap-x-8">
                {posts.map((insight: Post, index: number) => {
                  const imageUrl = insight?.featuredImage?.node?.sourceUrl;

                  return (
                    <CarouselItem
                      key={index}
                      className={`lg:basis-${index % 2 === 0 ? 1 : 2}/3`}
                    >
                      <Card
                        className="text-white h-full rounded-3xl"
                        style={{
                          background:
                            "linear-gradient(191.95deg, #A100FF 8.73%, #21005E 56.58%)",
                        }}
                      >
                        <CardContent
                          className={cn(
                            `p-0 h-full flex`,
                            index % 2 === 0 ? "flex-col" : "flex-col lg:flex-row-reverse"
                          )}
                        >
                          <div className={`${index % 2 === 0 ? "" : "h-full"}`}>
                            <Image
                              src={imageUrl}
                              alt={""}
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{
                                width: index % 2 === 0 ? "100%" : "auto",
                                height: index % 2 === 0 ? "auto" : "100%",
                              }} // optional
                              className={cn(
                                index % 2 === 0
                                  ? "rounded-t-3xl"
                                  : "rounded-r-3xl"
                              )}
                            />
                          </div>
                          <div
                            className={`p-6 flex flex-col justify-between ${
                              index % 2 === 0 ? "" : "max-w-[50%]"
                            }`}
                          >
                            <span className="text-sm lg:text-base text-gray-300">
                              {isNew(new Date(insight.date)) ? "NEW  • " : ""}
                              {formatDate(new Date(insight.date))}
                            </span>
                            <h3
                              className={cn(
                                "font-semibold mt-4 mb-6 flex-grow",
                                index % 2 === 0
                                  ? "text-xl xl:text-2xl"
                                  : "text-xl lg:text-2xl xl:text-4xl"
                              )}
                            >
                              {insight.title}
                            </h3>
                            <Link href={`/insights/${insight.slug}`} className="w-full lg:w-fit">
                              <Button
                                variant="outline"
                                className="w-full text-[#A300FF] border-white hover:bg-white/80 mt-auto py-6"
                              >
                                LEARN MORE
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </div>
            <div className="px-4 lg:px-8 xl:px-12">
              <Link href={"/insights"} className="w-full">
                <Button
                  variant="outline"
                  className="lg:hidden flex w-full mt-12 items-center gap-12 bg-white border border-[#A300FF] text-[#A300FF] hover:bg-white/90 rounded-xl px-6 py-6"
                >
                  VIEW ALL INSIGHTS
                  <span
                    className="rounded-full"
                    style={{
                      background:
                        "linear-gradient(191.95deg, #A100FF 8.73%, #21005E 56.58%)",
                    }}
                  >
                    <Image
                      src={"/icons/right-arrow-white.svg"}
                      alt={"right arrow"}
                      width={25}
                      height={25}
                      className=""
                    />
                  </span>
                </Button>
              </Link>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
