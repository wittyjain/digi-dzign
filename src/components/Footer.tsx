import Image from "next/image";
import { Button } from "./ui/button";
import AudioWaveIcon from "@/assets/icons/Audio_wave.svg";
import HamburgerIcon from "@/assets/icons/hamburger.svg";
import Logo from "./Logo";
import CTAButton from "./CTAButton";
import { Input } from "./ui/input";
import Link from "next/link";

interface FooterProps {}

const footerMenus = [
  {
    title: "Company",
    items: [
      { name: "Home", path: "/" },
      { name: "Work", path: "/services" },
      { name: "Why DIGIDZIGN", path: "#" },
      { name: "Insights", path: "/insights" },
    ],
  },
  {
    title: "Services",
    items: [
      { name: "Web Services", path: "#" },
      { name: "App Design", path: "#" },
      { name: "Branding & Digital Marketing", path: "#" },
      { name: "Illustrations & Motion", path: "#" },
      { name: "Consulting", path: "#" },
    ],
  },
];

const socialMedia = [
  {
    id: "facebook",
    logo: "/icons/facebook.svg",
  },
  {
    id: "instagram",
    logo: "/icons/instagram.svg",
  },
  {
    id: "linkedin",
    logo: "/icons/linkedin.svg",
  },
  {
    id: "tiktok",
    logo: "/icons/tiktok.svg",
  },
  {
    id: "pinterest",
    logo: "/icons/pinterest.svg",
  },
  {
    id: "x",
    logo: "/icons/x.svg",
  },
  {
    id: "youtube",
    logo: "/icons/youtube.svg",
  },
];

const Footer = ({}: FooterProps) => {
  return (
    <footer className="row-start-3 flex flex-col gap-8 flex-wrap p-4 md:p-8 xl:px-16 py-4 bg-footer-pastel bg-no-repeat bg-cover">
      <Logo />
      <div className="flex flex-row justify-between items-start flex-wrap">
        <div>
          <div className="max-w-96">
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-[#21005E]">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="mt-4">
            <CTAButton floatingImageUrl={"/images/partner_with_us.png"} />
          </div>
        </div>
        <div className="flex gap-x-24 flex-wrap">
          {footerMenus.map((menu) => (
            <div key={menu.title} className="flex flex-col max-w-[40%]">
              <ul className="list-none text-[#21005e]">
                <div className="font-medium uppercase text-xl mb-4">
                  {menu.title}
                </div>
                {menu.items.map((item) => (
                  <li key={item.name} className="font-light text-xl mb-2">
                    <Link href={item.path} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[#A100FF] text-lg">Working Worldwide</div>
        <div className="text-[#21005E] text-sm">Based in Miami</div>
        <div className="text-[#21005E] font-semibold text-3xl md:text-5xl lg:text-7xl mt-8">
          info@digidzign.com
        </div>
        <div className="flex justify-between items-end flex-wrap">
          <div className="flex gap-x-4">
            {socialMedia.map((platform) => (
              <div
                key={platform.id}
                className="w-8 h-8 lg:w-16 lg:h-16 rounded-full bg-[#21005E] flex justify-center items-center"
              >
                <Image
                  src={platform.logo}
                  alt={platform.id}
                  width={24}
                  height={24}
                ></Image>
              </div>
            ))}
          </div>
          <div className="">
            <div className="space-y-px mb-8">
              <div className="text-lg font-bold tracking-tight text-[#A100FF]">
                EMAIL NEWSLETTER
              </div>
              <p className="text-sm text-[#21005E]">
                Get the Latest Inspiration & Insights
              </p>
            </div>
            <form className="flex items-center gap-0 rounded-xl border border-[#21005E] bg-white">
              <Input
                className="flex-1 border-0 bg-transparent px-4 h-12 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                placeholder="Your Email"
                type="email"
                required
              />
              <Button
                className="rounded-xl bg-[#3A015C] hover:bg-[#2A014C] text-white px-8 py-5 text-base font-semibold h-12"
                type="submit"
              >
                SIGN UP
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-end text-[#ACACAC] mt-4">
        &copy; {new Date().getFullYear()} DigiDzign
      </div>
    </footer>
  );
};

export default Footer;
