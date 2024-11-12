import type { PluginAPI, Config } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-cyan": "url('/images/hero-cyan.svg')",
        "hero-cube": "url('/images/hero-cube.svg')",
        "footer-pastel": "url('/images/footer_bg.svg')",
        "card-mask": "url('/images/card-mask.png')",
        "contact-form-bg": "url('/images/contact-form-bg.svg')",
        "featured-projects": "url('/images/featured-projects-bg.png')",
        "web-services": "url('/images/work/web-services.png')",
        "app-design":
          "url('/images/work/app-design.png'), linear-gradient(90deg, #0C03AD 0%, #050337 100%)",
        "business-consulting":
          "url('/images/work/business-consulting.png'), linear-gradient(191.95deg, #A100FF 8.73%, #21005E 56.58%)",
        "digital-marketing":
          "url('/images/work/digital-marketing.png'), linear-gradient(90deg, #0C03AD 0%, #050337 100%)",
        testimonials: "url('/images/testimonials-bg.svg')",
        "contact-button": "url('/images/contact-button-bg.svg')",
      },
      extend: {
        rotate: {
          "y-180": "180deg",
        },
        perspective: {
          "1000": "1000px",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
      const newUtilities = {
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".transform-style-3d": {
          "transform-style": "preserve-3d",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      // @ts-ignore
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
