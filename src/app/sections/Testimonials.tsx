import { Carousel } from "@/components/ui/carousel";
import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#0A0219] px-16 py-24">
      <div>
        <h2>
          WE GET THINGS DONE, <span>RIGHT & FAST</span>
        </h2>
      </div>
      <div>
        <div>WE MAKE THE COMPLEX SIMPLE</div>
        <p>
          From neurotech companies to admin tools with intricate access
          policies, we understand your product and simplify it for the people
          who use it.
        </p>
      </div>
      <div className="p-6">
        <h2>WORD'S ON THE STREET</h2>
        <Carousel></Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
