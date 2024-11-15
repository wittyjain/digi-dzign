import CTAButton from "@/components/CTAButton";
import ContactForm from "@/app/sections/ContactForm";
import Image from "next/image";
import FeaturedProjects from "./sections/FeaturedProjects";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import OurInsights from "./sections/OurInsights";
import { getClient } from "@/lib/ApolloClient";
import getAllServices from "@/queries/Services/getAllServices";

export default async function Home() {
  const { data } = await getClient().query({
    query: getAllServices,
  });

  console.log(data)

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="w-full">
        <Hero />
        <FeaturedProjects />
        <Services services={data?.services?.nodes} />
        <Testimonials />
        <div>
          <Image
            src="/images/mammoth-winner.png"
            alt={""}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </div>
        <OurInsights />
        <ContactForm />
      </div>
    </main>
  );
}
