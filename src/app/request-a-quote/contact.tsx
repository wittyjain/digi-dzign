import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-[#0A0219] px-4  md:px-8 lg:px-12 xl:px-16 py-8 lg:py-16">
      <Card className="w-full rounded-3xl">
        <CardContent className="p-0">
          <div className="w-full flex flex-col space-y-6 p-6 lg:p-8">
            <h2 className="text-4xl font-semibold  text-[#21005E] md:text-5xl lg:text-9xl ">
              YOU CAN FIND
              <br />
              US <span className="text-[#3A47F4]">HERE</span>
            </h2>

            <p className="text-lg text-gray-600 lg:pt-20 md:pt-14">
              Contact us directly at
              <Link
                href="tel:833-846-8484"
                className="text-[#6B46FF] hover:underline"
              >
                833-846-8484
              </Link>
              or
              <Link
                href="mailto:hello@tinuiti.com"
                className="text-[#6B46FF] hover:underline"
              >
                hello@tinuiti.com
              </Link>
              .
            </p>

            <div className="relative h-[300px] w-full overflow-hidden rounded-3xl rounded-b-none lg:h-[400px]">
              <Image
                src="/images/requestquote/office-1.jpg"
                alt="Modern office interior with marble reception desk"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-4 text-2xl font-semibold text-[#21005E]">
                New York
              </h3>
              <p className="mb-4 text-xl text-[#3F444D] font-normal">
                111 West 33rd Street, Suite 1510
                <br />
                New York, NY 10120
              </p>
              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#6B46FF] hover:underline text-2xl pt-6"
              >
                Google Maps
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
