import CraftSection from "./CraftSection";
import FeatureGrid from "./FeatureGrid";
import Hero from "./Hero";
import MockupSection from "./MockupSection";

const ServicePage = () => {
  return (
    <div className="relative  w-full min-h-[calc(100vh-80px)]  flex flex-col gap-36 items-center mb-8 pb-12  ">
      <Hero />
      <MockupSection />
      <CraftSection />
      <FeatureGrid />
    </div>
  );
};

export default ServicePage;
