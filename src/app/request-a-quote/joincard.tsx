import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function JoinCard() {
  return (
    <div className="bg-[#0A0219] py-8 px-4 lg:px-12 xl:px-16 lg:py-20 xl:py-24">
      <Card className="w-full  border-none">
        <CardContent className="p-6 lg:p-8">
          <div className="flex flex-col">
            <div className="w-full flex flex-col gap-20">
              <h2 className="text-4xl font-semibold  text-[#21005E] md:text-5xl lg:text-[120px]">
                LOOKING TO WORK
                <span className="block lg:inline">
                  <span className="text-[#A100FF] "> AT DIGIDZIGN</span>
                </span>
              </h2>

              <div className="flex flex-row">
                <div className="lg:pt-4 w-1/3 flex flex-col justify-center">
                  <p className="text-xl text-gray-600">
                    We're always in the market for great marketers. If growing
                    your career and your happiness is something you like the
                    sound of, we want to hear from you.
                  </p>
                  <Button
                    variant="outline"
                    className="group h-14 w-2/3 m-auto text-[#A300FF] rounded-full border-[#B341FF] px-8 text-lg hover:bg-[#B341FF] hover:text-white"
                  >
                    <span className="mr-2 text-sm font-semibold ">
                      JOIN OUR TEAM
                    </span>
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      <div className="w-7 h-7 bg-gradient-to-br from-[#A100FF] to-[#21005E] rounded-full p-1">
                        <Image
                          src={"/icons/right-arrow-white.svg"}
                          alt={"Calender icon"}
                          width={30}
                          height={30}
                        ></Image>
                      </div>
                    </span>
                  </Button>
                </div>

                <div className="mt-8 ml-10 grid grid-cols-4 grid-rows-2 gap-4 lg:mt-0 lg:flex-1">
                  <div className="rounded-3xl overflow-hidden lg:row-span-2  col-start-1 col-end-3">
                    <Image
                      src="/images/requestquote/modernoffice.jpg"
                      alt="Modern office space"
                      width={350}
                      height={400}
                    />
                  </div>
                  <div className="overflow-hidden rounded-tr-3xl col">
                    <Image
                      src="/images/requestquote/team.jpg"
                      alt="Team collaboration"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src="/images/requestquote/meeting.jpg"
                      alt="Office meeting"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src="/images/requestquote/discussion.jpg"
                      alt="Team discussion"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="overflow-hidden rounded-tl-3xl">
                    <Image
                      src="/images/requestquote/officepet.jpg"
                      alt="Working with pet"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
