"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSVGPath() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (svgRef.current && pathRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();

      // Set up initial styles
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });

      // Create the animation
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 50%", // Start animation when the top of the SVG is 70% from the top of the viewport
          end: "bottom 80%", // End animation when the bottom of the SVG is 11% from the top of the viewport
          scrub: 1, // Smooth scrubbing effect
          // markers: process.env.NODE_ENV === "development", // Show markers in development mode
        },
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[200vh] ">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        <h1 className="absolute top-0 text-3xl md:text-5xl lg:text-7xl font-semibold text-left max-w-6xl sm:p-20">
          Making <span className="text-blue-600">people smile</span> gets us out
          of bed every morning.
        </h1>
        <svg
          ref={svgRef}
          width="1440"
          height="930"
          viewBox="0 0 1440 930"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full ab"
        >
          <path
            ref={pathRef}
            d="M-202 21C124.018 206.06 452 759.515 175.5 778.484C-84.3891 796.314 51.0272 293.876 422.018 637C741.5 932.484 779 480 1066.5 759.515C1152.64 843.263 1296.13 806.529 1386.52 835.774C1421 846.929 1468.2 874.862 1503.87 881.229C1522.68 884.586 1546.12 889.677 1575 896.988C1734.6 937.388 1631.37 863.167 1616.04 826.5"
            stroke="url(#paint0_linear_752_61042)"
            strokeWidth="41.216"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_752_61042"
              x1="-202"
              y1="464.847"
              x2="1662.99"
              y2="464.847"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0C03AD" />
              <stop offset="1" stopColor="#050337" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
