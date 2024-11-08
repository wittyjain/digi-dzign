import Image from "next/image";
import { servicesList } from "@/data/data";
import { appServices } from "@/data/data";
import { brandingServices } from "@/data/data";
import { consultingServices } from "@/data/data";

import ServiceBadge from "@/components/ServiceBadge";

export default function ServicesShowcase() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-[1400px] mx-auto ">
        {/* ALL SERVICES Header */}
        <h1 className="text-[#21005E] text-sm font-normal tracking-wider border-l-4 border-[#A100FF] pl-5 w-1/2">
          ALL SERVICES
        </h1>

        {/* Web Services Section */}
        <section className="py-10">
          <div className="relative grid grid-cols-12">
            <h2 className="md:text-[40px] text-3xl font-semibold absolute md:top-32 top">
              <span className="text-[#21005E]">Web</span> <br />
              <span className="text-[#A100FF]">Services</span>
            </h2>

            <div className=" absolute z-[-10] md:top-12 md:left-28 top-1 left-14">
              <img
                src="/images/services/showcase-1.jpg"
                alt={"Digi Dzign Logo"}
                width={320}
                height={320}
              />
            </div>
            <div className="py-4 col-start-7 col-span-6	">
              <div className="flex flex-wrap justify-start items-center gap-1 max-w- mx-auto">
                {servicesList.map((service, index) => {
                  // Calculate column span based on service name length
                  const isLongName = service.name.length > 25;
                  const colSpan = isLongName ? "sm:col-span-2" : "";

                  return (
                    <div key={index} className={colSpan}>
                      <ServiceBadge name={service.name} icon={service.icon} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* App Design Section */}
        <section className="py-10">
          <div className="relative grid grid-cols-12">
            <h2 className="text-[40px] font-semibold absolute top-32">
              <span className="text-[#21005E]">App</span> <br />
              <span className="text-[#A100FF]">Design</span>
            </h2>

            <div className=" absolute z-[-10] top-12 left-28">
              <img
                src="/images/services/showcase-2.jpg"
                alt={"Digi Dzign Logo"}
                width={320}
                height={320}
              />
            </div>
            <div className="py-4 col-start-7 col-span-6	">
              <div className="flex flex-wrap justify-start gap-1 max-w- mx-auto">
                {appServices.map((service, index) => {
                  // Calculate column span based on service name length
                  const isLongName = service.name.length > 25;
                  const colSpan = isLongName ? "sm:col-span-2" : "";

                  return (
                    <div key={index} className={colSpan}>
                      <ServiceBadge name={service.name} icon={service.icon} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Branding Section */}
        <section className="py-10">
          <div className="relative grid grid-cols-12">
            <h2 className="text-[40px] font-semibold absolute top-32">
              <span className="text-[#21005E]">Branding</span> <br />
              <span className="text-[#A100FF]">& Digital Marketing</span>
            </h2>

            <div className=" absolute z-[-10] top-12 left-28">
              <img
                src="/images/services/showcase-3.jpg"
                alt={"Digi Dzign Logo"}
                width={320}
                height={320}
              />
            </div>
            <div className="py-4 col-start-7 col-span-6	">
              <div className="flex flex-wrap justify-start gap-1 max-w- mx-auto">
                {brandingServices.map((service, index) => {
                  // Calculate column span based on service name length
                  const isLongName = service.name.length > 25;
                  const colSpan = isLongName ? "sm:col-span-2" : "";

                  return (
                    <div key={index} className={colSpan}>
                      <ServiceBadge name={service.name} icon={service.icon} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Business Consulting Section */}
        <section className="py-10">
          <div className="relative grid grid-cols-12">
            <h2 className="text-[40px] font-semibold absolute top-32">
              <span className="text-[#21005E]">Business</span> <br />
              <span className="text-[#A100FF]">Consulting</span>
            </h2>

            <div className=" absolute z-[-10] top-12 left-28">
              <img
                src="/images/services/showcase-4.jpg"
                alt={"Digi Dzign Logo"}
                width={320}
                height={320}
              />
            </div>
            <div className="py-4 col-start-7 col-span-6	">
              <div className="flex flex-wrap justify-start gap-1  mx-auto">
                {consultingServices.map((service, index) => {
                  // Calculate column span based on service name length
                  const isLongName = service.name.length > 25;
                  const colSpan = isLongName ? "sm:col-span-2" : "";

                  return (
                    <div key={index} className={colSpan}>
                      <ServiceBadge name={service.name} icon={service.icon} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
