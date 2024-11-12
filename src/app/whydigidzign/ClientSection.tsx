import Image from "next/image";

export default function ClietSection() {
  const clients = [
    {
      name: "Google",
      logo: "/icons/google.svg",
    },
    {
      name: "RedBull",
      logo: "/icons/redbull.svg",
    },
    {
      name: "Chan Zuckerberg Initiative",
      logo: "/icons/chan.svg",
    },
    {
      name: "Tinder",
      logo: "/icons/tinder.svg",
    },
  ];

  return (
    <section className="w-full  p-4 ">
      <div className="container">
        <div className="space-y-4 md:space-y-8 lg:space-y-12">
          <h2 className="text-5xl md:text-6xl lg:text-9xl font-semibold">
            <span className="text-[#21005E]">CLIENTS</span>
            <br />
            <span className="text-[#A100FF]">WE WORK WITH</span>
          </h2>

          <div className="relative pl-4 md:pl-8 max-w-4xl">
            <div className="absolute left-0 top-0 w-1 h-full bg-[#A100FF]  " />
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-normal">
              {
                "We've worked with business giants like Apple, RedBull, Uber Eats & Zara. We've designed products for startups that went from $0 to $120,000,000 in revenue. No matter what, we bring the same level of creativity and quality to every project, and we would love to do the same for you."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 max-w-3xl mx-auto pt-4 md:pt-16">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={400}
                  height={200}
                  className="h-auto w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
