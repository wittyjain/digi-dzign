import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="w-full grid grid-cols-12 p-4 md:p-8 xl:p-16 pb-20 gap-8 sm:p-20">
        <h1 className="font-semibold text-9xl col-span-12 text-[#21005E] flex flex-col gap-y-12 mb-20">
          <div className="col-start-1">MIAMI'S AI</div>
          <div className="relative col-start-3 pl-[calc(var(--grid-space)*3+var(--grid-gap)*3)] before:block before:w-32 before:h-32 before:bg-hero-cyan before:bg-cover before:bg-no-repeat before:absolute before:top-0 before:left-48 before:rotate-3 after:block after:w-[680px] after:h-[680px] after:bg-hero-cube after:bg-cover after:bg-no-repeat after:absolute after:-bottom-72 after:right-[92px]">
            WEB DESIGN
          </div>
          <div className="col-start-1">AGENCY</div>
        </h1>
        <div className="col-span-12 flex justify-between items-start">
          <p className="text-[#21005E] max-w-[30%]">
            Out staffing of IT-specialists, strengthening teams and projects
          </p>
          <div className="min-w-[30%]">
            <CTAButton floatingImageUrl="/images/booked_fast.svg" />
          </div>
        </div>
      </div>
    </main>
  );
}
