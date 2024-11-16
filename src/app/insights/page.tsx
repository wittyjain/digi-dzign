import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import { Resources } from "@/app/insights/Resources";
import { Topics } from "@/app/insights/Topics";
import { Featured } from "@/app/insights/Featured";
import { LatestContent } from "@/app/insights/LatestContent";
import ContactForm from "@/app/sections/ContactForm";
import { getClient } from "@/lib/ApolloClient";
import getAllPosts from "@/queries/Posts/getAllPosts";
import Hero from "@/components/Hero";

export default async function insights() {
  const data = await getAllPosts({ after: "null", first: 10 });

  return (
    <main className="relative min-h-[calc(100vh-80px)] flex flex-col gap-16 sm:gap-24 md:gap-36 items-center mb-8 pb-12 md:py-8 w-full">
      <div className="w-full ">
        <Hero
          headings={[
            {
              text: "Our",
              className: "row-start-1 col-start-1 md:col-start-4 ",
            },
            {
              text: "Insigths",
              className:
                "row-start-2 col-start-4 md:col-start-5 text-[#21005E]",
            },
          ]}
          backgroundImage={{
            desktop: "/images/our-insights/hero-bg.svg",
            mobile: "/images/our-insights/hero-bg-mobile.svg",
          }}
          backgroundPosition={{
            desktop:
              "lg:top-[-35%] md:top-[-4%] left-[5%] lg:h-[900px] lg:w-[950px]",
            mobile: "top-[-15%] left-0",
          }}
        />
      </div>

      <div className=" p-4 md:px-8  lg:px-16">
        <div className="w-full md:grid md:grid-cols-12 ">
          <div className="col-start-1 col-span-2  mb-8 md:mb-0 ">
            <Resources />
          </div>
          <div className="col-start-4 col-span-10 flex flex-col gap-16 sm:gap-20">
            <Topics />
            <Featured />
            <LatestContent data={data.posts.nodes} />
          </div>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
