import Image from "next/image";
import { Button } from "./ui/button";
import AudioWaveIcon from "@/assets/icons/Audio_wave.svg";
import HamburgerIcon from "@/assets/icons/hamburger.svg";
import Logo from "./Logo";
import CTAButton from "./CTAButton";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="row-start-3 flex flex-col gap-8 flex-wrap p-4 md:p-8 xl:px-16 py-4">
      <Logo />
      <div className="flex flex-row justify-between items-center">
        <div>
          <div className="max-w-96">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="mt-4">
            <CTAButton floatingImageUrl={"/images/partner_with_us.png"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
