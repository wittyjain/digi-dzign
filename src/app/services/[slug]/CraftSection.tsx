import LetsTalkBtn from "./LetsTalkBtn";

export default function CraftSection() {
  return (
    <section className="min-h-screen w-full  px-4 py-12 md:px-6 lg:px-16 ">
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Heading */}
        <h1 className="text-5xl tracking-tight md:text-6xl lg:text-8xl font-semibold">
          <span className="block text-[#21005E]">CRAFTING SEAMLESS</span>
          <span className="block text-[#A100FF]">WEBSITES AND MOBILE</span>
          <span className="block text-[#21005E]">DESIGNS FOR ALL</span>
        </h1>

        {/* Description */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="md:col-start-2 flex flex-col justify-start items-start space-y-24">
            <p className="block border-l-4 border-[#A100FF] pl-6 text-lg text-[#0F0928] md:text-xl lg:text-3xl p-2 lg:leading-10">
              At DigiDzign, we build high-performance, AI-powered websites that
              exceed user expectations. We focus on accessibility, responsive
              design, and the latest AI technology to deliver digital solutions
              that drive business success.
            </p>

            {/* Button placeholder - as requested by user */}
            <div className="flex justify-end">
              <LetsTalkBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
