import Image from "next/image";
import Link from "next/link";
import React from "react";

const quickLinks = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum ",
    url: "#",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum ",
    url: "#",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum ",
    url: "#",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum ",
    url: "#",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum ",
    url: "#",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum ",
    url: "#",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet consectetur. Rhoncus vestibulum ",
    url: "#",
  },
];

const QuickLinks = () => {
  return (
    <div className="p-6 rounded-xl flex flex-col space-y-6">
      <div className="text-xl text-[#21005E]">Quick Links</div>
      {quickLinks.map((link) => (
        <Link key={link.id} href={link.url} className="flex items-start gap-x-4">
          <Image
            src={"/icons/paper-plane-right.svg"}
            alt={"quick link"}
            width={24}
            height={24}
          />
          <span className="font-medium text-base text-[#413E47] underline">
          {link.title}

          </span>
        </Link>
      ))}
    </div>
  );
};

export default QuickLinks;
