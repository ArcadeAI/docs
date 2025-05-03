import React from "react";
import Image from "next/image";
import styles from "./PolaroidImage.module.css";

const width = 500;
const height = width;

interface PolaroidImageProps {
  src: string;
  alt: string;
}

export const PolaroidImage: React.FC<PolaroidImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={styles.polaroid}
    />
  );
};
