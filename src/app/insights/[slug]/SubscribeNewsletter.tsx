import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const SubscribeNewsletter = () => {
  return (
    <div className="p-6 rounded-xl border border-[#A100FF] flex flex-col space-y-6">
      <h2 className="text-[#21005E] text-xl">Subscribe to our newsletter</h2>
      <Input placeholder="TYPE YOUR EMAIL" />
      <div className="w-full">
        <Button
          type="submit"
          className="text-white font-semibold px-12 md:px-6 py-8 rounded-full w-full  flex justify-between"
          style={{
            background: `linear-gradient(90deg, #0C03AD 0%, #050337 100%)`,
          }}
          disabled={false}
        >
          <span>GET IN TOUCH</span>
          <span className="w-10 h-10 rounded-full flex justify-center items-center bg-white pr-1 text-base">
            <Image
              src={"/icons/right-arrow.svg"}
              alt={"right arrow"}
              width={25}
              height={25}
            />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
