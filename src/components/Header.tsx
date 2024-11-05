import Image from "next/image";
import { Button } from "./ui/button";
import AudioWaveIcon from "@/assets/icons/Audio_wave.svg";
import HamburgerIcon from "@/assets/icons/hamburger.svg";
import Logo from "./Logo";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="flex justify-between items-center p-4 md:p-8 xl:px-16 py-4">
      <div>
        <Logo />
      </div>
      <div className="flex gap-x-4">
        <Button
          variant="outline"
          className="hidden md:inline-flex rounded-3xl border-primary px-[10px]"
        >
          <Image src={AudioWaveIcon} alt={""} width={24} height={5}></Image>
        </Button>
        <Button className="hidden md:inline-flex">GET IN TOUCH</Button>
        <Button variant="ghost" className="rounded-3xl border-primary px-2">
          <Image src={HamburgerIcon} alt={""} width={24} height={5}></Image>
        </Button>
      </div>
    </header>
  );
};

export default Header;
