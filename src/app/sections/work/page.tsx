// app/sections/work/page.tsx
import ServiceCard from "@/components/ServiceCard";
import React from "react";

const WorkPage = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 grid-flow-col gap-4 overflow-x-auto md:grid-cols-2 mx-auto max-w-fit px-4 md:h-[530px]">
      <div className="md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2">
        <ServiceCard
          title="Web Services"
          description="Your landing page is the first thing your customers, investors and partners see."
          deviceImage="/images/work/macbook.jpg"
          backgroundImage="/images/work/background.png"
          className="md:w-full md:h-full"
        />
      </div>

      <div className="md:w-[442px]">
        <ServiceCard
          title="App Design"
          description="User experience makes all the difference between good products and great ones."
          deviceImage="/images/work/mobile.svg"
          backgroundImage="/images/work/sand-cloud.png"
          className="md:w-full md:h-full "
        />
      </div>

      <div className="md:w-[442px]">
        <ServiceCard
          title="Business Consulting"
          description="AI, LLMs, NLP: Unlocking the Future of Intelligent Interaction and Language Processing."
          deviceImage="/images/work/ai-image.svg"
          backgroundImage="/images/work/background.png"
          className="md:w-full md:h-full "
        />
      </div>
    </div>
  );
};

export default WorkPage;
