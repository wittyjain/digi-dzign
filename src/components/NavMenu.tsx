"use client";

import { useState, useEffect } from "react";
import {
  X,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./Logo";
import AudioWaveIcon from "@/assets/icons/Audio_wave.svg";

const menuAnimationKeyframes = `
  @keyframes menuSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    60% {
      opacity: 1;
      transform: translateY(25px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes menuSlideUp {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
  @keyframes closeIconRotate {
    0% {
      transform: rotate(0) scale(1);
    }
    100% {
      transform: rotate(180deg) scale(1.2);
    }
  }
`;

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavMenu({ isOpen, onClose }: OverlayMenuProps) {
  const [email, setEmail] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isOpen) {
      setIsAnimating(true);
    } else {
      timer = setTimeout(() => setIsAnimating(false), 500); // Match this with animation duration
    }
    return () => timer && clearTimeout(timer);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      <style>{menuAnimationKeyframes}</style>
      <div
        className={`fixed inset-0 z-50 overflow-auto ${
          isOpen
            ? "animate-[menuSlideDown_0.5s_ease-in-out]"
            : "animate-[menuSlideUp_0.5s_ease-in-out] -translate-y-full"
        }`}
        style={{
          background:
            "linear-gradient(191.95deg, #A100FF 8.73%, #21005E 56.58%)",
        }}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <div className="text-white text-2xl font-bold">
              <Logo variant="white" />
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="hidden md:inline-flex rounded-3xl border-primary px-[10px]"
              >
                <Image
                  src={AudioWaveIcon}
                  alt={""}
                  width={24}
                  height={5}
                ></Image>
              </Button>
              <Button
                variant="outline"
                className="text-[#A100FF] hover:text-opacity/80"
              >
                CONTACT US
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-transparent hover:animate-[closeIconRotate.5s_ease-in-out]"
              >
                <Image
                  src={"/icons/x-icon.svg"}
                  alt={"close menu"}
                  width={32}
                  height={32}
                />
              </Button>
            </div>
          </div>

          <nav className="mt-20">
            <ul className="space-y-8">
              {["WORK", "SERVICES", "WHY DIGIDZIGN", "INSIGHTS"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white text-5xl font-bold hover:text-white/80 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="fixed bottom-0 right-0 p-8 w-full md:w-auto">
            <div className="flex flex-col items-start gap-8">
              <div className="text-white grid gap-8">
                <div className="mb-4">
                  <div className="text-[#B73DFE] text-lg mb-2">
                    WORKING WORLDWIDE
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-6 w-6" />
                    <span className="text-base">MIAMI</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <Link
                    href="tel:(310)999-999"
                    className="block hover:text-[#B73DFE] text-sm font-light underline"
                  >
                    (310) 999-999
                  </Link>
                  <Link
                    href="mailto:example@gmail.com"
                    className="block hover:text-[#B73DFE] text-sm font-light underline"
                  >
                    example@gmail.com
                  </Link>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link href="#" className="text-white hover:text-[#B73DFE]">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-white hover:text-[#B73DFE]">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-white hover:text-[#B73DFE]">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="text-white">
                <div className="text-[#B73DFE] mb-4">
                  SUBSCRIBE TO OUR NEWSLETTER
                </div>
                <form onSubmit={handleSubmit} className="relative">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 rounded-xl bg-white focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#21005E]"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-primary transition-colors"
                    aria-label="Submit email"
                  >
                    <Image
                      src={"/icons/right-arrow.svg"}
                      alt={"right arrow"}
                      width={25}
                      height={25}
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* Frame 1000005308 */

/* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 8px 12px;
// gap: 43px;

// width: 149.96px;
// height: 34.96px;

// background: #FFFFFF;
// border-radius: 12px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
