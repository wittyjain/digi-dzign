import Image from "next/image";
import React from "react";
Image;

const PhotoGrid = () => {
  return (
    <div className="relative flex flex-col md:gap-10 gap-3 justify-center">
      <div className="flex justify-center items-center rounded-3xl overflow-hidden">
        <Image
          src={"images/whydigi/laptop-grid.svg"}
          alt={`Laptop Image`}
          width={1400}
          height={700}
          className="h-auto w-auto object-contain"
        />
      </div>
      <div className="flex md:gap-5 gap-3 items-center justify-center">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src={"images/whydigi/mobile-1.svg"}
            alt={`Laptop Image`}
            width={1400}
            height={700}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="rounded-3xl overflow-hidden">
          <Image
            src={"images/whydigi/mobile-2.svg"}
            alt={`Laptop Image`}
            width={1400}
            height={700}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
