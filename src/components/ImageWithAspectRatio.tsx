"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ImageWithAspectRatioProps extends ImageProps {
  src: string;
  alt: string;
}

const ImageWithAspectRatio: React.FC<ImageWithAspectRatioProps> = ({
  src,
  alt,
  ...props
}) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  const handleLoadingComplete = (result: {
    naturalWidth: number;
    naturalHeight: number;
  }) => {
    const { naturalWidth, naturalHeight } = result;
    setAspectRatio(naturalWidth / naturalHeight);
  };

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        onLoadingComplete={handleLoadingComplete}
        {...props}
      />
      {aspectRatio && <p>Aspect Ratio: {aspectRatio.toFixed(2)}</p>}
    </div>
  );
};

export default ImageWithAspectRatio;
