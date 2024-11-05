import Image from "next/image";

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  return (
    <div>
      <Image
        src={"/logo.svg"}
        alt={"Digi Dzign Logo"}
        width={50}
        height={70}
      ></Image>
    </div>
  );
};

export default Logo;
