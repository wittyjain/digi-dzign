import Image from "next/image";

export default function MockupSection() {
  return (
    <div className="relative md:min-h-screen w-full  flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-[1400px] aspect-[16/9]">
        <Image
          src="/images/webservices/devices-mockup.svg" // Replace with your image path
          alt="Responsive device mockups showing Chic n Zip website"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
