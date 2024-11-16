import Image from "next/image";

Image;

export default function Component() {
  return (
    <div className="min-h-screen bg-white ">
      <div className="md:space-y-24 space-y-10 ">
        <h1 className="text-5xl md:text-9xl font-semibold">
          <span className="text-[#2D0066]">LOREM</span>
          <br />
          <span className="text-[#A100FF]">IPSUM DOLLAR</span>
        </h1>

        <div className="flex sm:gap-5 md:gap-10  md:flex-row flex-col">
          <div className="relative  md:w-1/2 aspect-square  rounded-3xl bg-gradient-to-tr from-[#21005E] to-[#A100FF] p-6">
            {/* World Map Background - Using a semi-transparent image */}
            <div className="absolute inset-0 opacity-100">
              <Image
                src="/images/whydigi/worldmap-bg.svg"
                alt="World Map"
                className="h-full w-full object-cover mix-blend-luminosity"
                height={500}
                width={650}
              />
            </div>

            {/* Flag Icons */}
            <div className="absolute left-6 top-1/3 flex flex-col gap-6">
              <div className="h-8 w-12 rounded ">
                <img
                  src="/images/whydigi/spain-flag.svg"
                  className="opacity-25"
                  alt="Spain Flag"
                />
              </div>
              <div className="h-8 w-12 rounded">
                <img
                  src="/images/whydigi/usa-flag.svg"
                  className="opacity-40"
                  alt="US Flag"
                />
              </div>
              <div className="h-8 w-12 rounded ">
                <img
                  src="/images/whydigi/uk-flag.svg"
                  className="opacity-50"
                  alt="UK Flag"
                />
              </div>
              <div className="h-8 w-12 rounded">
                <img
                  src="/images/whydigi/aus-flag.svg"
                  className="opacity-100"
                  alt="AU Flag"
                />
              </div>
            </div>
            {/* Network of Profile Images */}
            <div className="relative h-1/2  left-10 top-1/4">
              {/* Add profile images here with absolute positioning */}

              <Image
                src={`/images/whydigi/seed-map.svg`}
                alt={`Team member`}
                className="object-fill"
                fill
              />
            </div>
          </div>

          <div className="md:w-1/2 mt-10">
            <p className="text-base md:text-2xl text-gray-800 font-normal">
              If you&apos;ve just raised your seed, series A, or series B. Now,
              it&apos;s all about speed and quality to keep the momentum going.
              You can count on our designers to find your surest path to
              success.
            </p>
            <p className="text-base md:text-2xl font-semibold">
              Right and fast.
            </p>

            {/* Placeholder for Let's Talk button */}
            <div className="h-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
