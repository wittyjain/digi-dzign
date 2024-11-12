import CraftSection from "./CraftSection";
import Hero from "./Hero";
import MockupSection from "./MockupSection";
import WebServiceCard from "./WebServiceCard";

const WebServices = () => {
  return (
    <div className="relative  w-full min-h-[calc(100vh-80px)]  flex flex-col gap-36 items-center mb-8 pb-12  ">
      <Hero />
      <MockupSection />
      <CraftSection />
      <WebServiceCard
        title="Responsive Web and Mobile Design"
        description="Our developers specialize in front-end and back-end, using AngularJS, Bootstrap, PHP, WordPress, and more to build scalable, secure websites. We integrate advanced tech like Blockchain, Smart Contracts, and data solutions (Warehousing, BI) for clean, efficient, and responsive designs across all devices."
        points={[
          { text: "Data Migration Services" },
          { text: "Performance Optimization" },
        ]}
        videoSrc="/images/webservices/responsive-video.mov"
        minMaxProgress={75}
      />
    </div>
  );
};

export default WebServices;
