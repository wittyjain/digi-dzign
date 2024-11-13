import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialMedia = [
  {
    id: "instagram",
    logo: "/icons/instagram.svg",
    url: "#",
  },
  {
    id: "facebook",
    logo: "/icons/facebook.svg",
    url: "#",
    height: 10,
    width: 10
  },
  {
    id: "linkedin",
    logo: "/icons/linkedin.svg",
    url: "#",
  },
];

export default function SocialMediaSidebar() {
  return (
    <div className="fixed left-0 top-[50%] flex w-[40px] flex-col items-start justify-center gap-5 rounded-r-[24px] bg-[#21005E] px-2 py-5">
      {socialMedia.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white transition-colors hover:bg-white/80"
          aria-label={`Follow us on ${item.id}`}
        >
          <Image
            aria-hidden
            src={`/icons/${item.id}-black.svg`}
            alt={`share on ${item.id}`}
            width={item.width ?? 12}
            height={item.height ?? 12}
            className="z-10"
          />
        </Link>
      ))}
    </div>
  );
}
