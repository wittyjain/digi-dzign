import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "white";
}

const Logo = ({ variant = "default" }: LogoProps) => {
  const logoMap = {
    default: "/logo.svg",
    white: "/logo-white.svg",
  };

  return (
    <Link href="/">
      <Image
        src={logoMap[variant]}
        alt={"Digi Dzign Logo"}
        width={50}
        height={70}
      ></Image>
    </Link>
  );
};

export default Logo;
