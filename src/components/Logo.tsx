import Image from "next/image";

interface LogoProps {
  variant?: 'default' | 'white';
}

const Logo = ({variant = 'default'}: LogoProps) => {
  const logoMap = {
    default: '/logo.svg',
    white: '/logo-white.svg',
  };

  return (
    <div>
      <Image
        src={logoMap[variant]}
        alt={"Digi Dzign Logo"}
        width={50}
        height={70}
      ></Image>
    </div>
  );
};

export default Logo;
