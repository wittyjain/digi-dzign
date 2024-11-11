"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import AudioWaveIcon from "@/assets/icons/Audio_wave.svg";
import HamburgerIcon from "@/assets/icons/hamburger.svg";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Link from "next/link";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10 flex justify-between items-center p-4 md:p-8 xl:px-16 py-4">
      <div>
        <Logo />
      </div>
      <div className="flex gap-x-4">
        <Button
          variant="outline"
          className="hidden md:inline-flex rounded-3xl border-primary px-[10px]"
        >
          <Image
            src={"/icons/audio_wave.svg"}
            alt={"turn on audio"}
            width={24}
            height={5}
          ></Image>
        </Button>
        <Link href="/contact-us" className="hidden md:inline-flex rounded-xl">
          <Button>GET IN TOUCH</Button>
        </Link>
        <Button
          variant="ghost"
          className="rounded-3xl border-primary px-2"
          onClick={() => setIsMenuOpen(true)}
        >
          <Image
            src={"/icons/hamburger.svg"}
            alt={""}
            width={24}
            height={5}
          ></Image>
        </Button>
      </div>
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
