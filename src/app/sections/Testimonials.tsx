import TestimonialCard, { MediaType } from "@/components/TestimonialCard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    name: "Asya Rudikoff",
    title: "Manager of Physical and Occupational Therapy",
    quote:
      "We knew we had room for overall process improvement and greater efficiency. With Skedulo we’ve improved utilization and reduced costs significantly.",
    avatar: "/images/avatar1.png",
    media: { type: "image" as MediaType, src: "/images/testimonial.jpeg" },
  },
  {
    id: 1,
    name: "Alfonso Septimus",
    title: "Manager of Physical",
    quote:
      "We knew we had room for overall process improvement and greater efficiency. With Skedulo we’ve improved utilization and reduced costs significantly.",
    avatar: "/images/avatar1.png",
    media: { type: "image" as MediaType, src: "/images/testimonial.jpeg" },
  },
  {
    id: 1,
    name: "Asya Rudikoff",
    title: "Manager of Physical and Occupational Therapy",
    quote:
      "We knew we had room for overall process improvement and greater efficiency. With Skedulo we’ve improved utilization and reduced costs significantly.",
    avatar: "/images/avatar1.png",
    media: { type: "image" as MediaType, src: "/images/testimonial.jpeg" },
  },
];

const Testimonials = ({ showHeader = true }) => {
  return (
    <div className="bg-[#0A0219] py-8 px-4 lg:px-12 xl:px-16 lg:py-20 xl:py-24 bg-testimonials bg-cover bg-no-repeat">
      {showHeader && (
        <>
          <div>
            <h2 className="text-white text-5xl md:text-6xl lg:text-8xl font-semibold">
              WE GET THINGS
              <br /> DONE, <span className="text-[#A100FF]">RIGHT & FAST</span>
            </h2>
          </div>
          <div className="w-full flex justify-center items-center my-48">
            <div className="max-w-[50%]">
              <div className="max-w-[75%] text-[#A57CFF] text-5xl">
                WE MAKE THE COMPLEX SIMPLE
              </div>
              <p className="text-white text-2xl">
                From neurotech companies to admin tools with intricate access
                policies, we understand your product and simplify it for the
                people who use it.
              </p>
            </div>
          </div>
        </>
      )}
      <div className="pt-4 md:pt-8 lg:pt-16 rounded-xl bg-white h-fit">
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-16">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-semibold">
            WORD'S ON <br />
            <span className="text-[#A100FF]">THE STREET</span>
          </h2>
          <Image
            src={"/icons/quotes.svg"}
            alt={"quotes"}
            width={140}
            height={100}
          />
        </div>
        <Carousel
          className="w-full my-20"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent className="px-4 md:px-8 lg:px-16 py-24">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="lg:w-fit lg:max-w-lg">
                {/* <div
                className="rounded-3xl flex flex-col border p-6 space-y-12"
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#0C03AD",
                  //   borderImageSource:
                  //     "linear-gradient(90deg, #0C03AD 0%, #050337 100%)",
                }}
              >
                <Avatar className="size-24">
                  <AvatarImage
                    width={100}
                    height={100}
                    src="/images/avatar1.png"
                    alt="Avatar 2"
                  />
                </Avatar>
                <p className="text-[#002755] text-2xl leading-10">
                  “We knew we had room for overall process improvement and
                  greater efficiency. With Skedulo we’ve improved utilization
                  and reduced costs significantly.”
                </p>
                <div>
                  <div className="text-[#002755] text-2xl font-semibold">
                    Asya Rudikoff
                  </div>
                  <div className="text-[#424242] text-lg">
                    Manager of Physical and Occupational Therapy
                  </div>
                </div>
              </div> */}
                <TestimonialCard
                  name={testimonial.name}
                  title={testimonial.title}
                  quote={testimonial.quote}
                  avatar={testimonial.avatar}
                  media={testimonial.media}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
