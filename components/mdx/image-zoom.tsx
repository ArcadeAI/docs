"use client";

import { ImageZoom as RmizImageZoom } from "fumadocs-ui/components/image-zoom";
import NextImage, { type ImageProps } from "next/image";
import { type ComponentProps, useEffect, useRef, useState } from "react";

type ZoomableImageProps = Omit<ComponentProps<"img">, "src"> & {
  src?: ComponentProps<"img">["src"] | ImageProps["src"];
  placeholder?: ImageProps["placeholder"];
};

const ZOOM_MARGIN = 40;

/**
 * Nextra's `ImageZoom`, the renderer of Markdown images: click to zoom
 * (react-medium-image-zoom, 40px margin), except when the image sits inside a
 * link. Imported images go through `next/image`; URL strings stay a plain
 * `<img>`.
 */
export function ImageZoom(props: ZoomableImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isInsideAnchor, setIsInsideAnchor] = useState(false);

  useEffect(() => {
    setIsInsideAnchor(Boolean(imgRef.current?.closest("a")));
  }, []);

  const { src, placeholder, alt = "", ...rest } = props;
  if (!src || src instanceof Blob) {
    return null;
  }

  const img =
    typeof src === "object" ? (
      <NextImage
        {...(rest as Omit<ImageProps, "src" | "alt">)}
        alt={alt}
        data-pagefind-index-attrs="title,alt"
        placeholder={
          placeholder === "blur" && !("blurDataURL" in src)
            ? "empty"
            : placeholder
        }
        ref={imgRef}
        src={src}
      />
    ) : (
      // A URL image keeps the size attributes the author wrote, as in Nextra.
      <img
        {...rest}
        alt={alt}
        data-pagefind-index-attrs="title,alt"
        height={rest.height}
        ref={imgRef}
        src={src}
        width={rest.width}
      />
    );

  if (isInsideAnchor) {
    return img;
  }

  return (
    <RmizImageZoom
      alt={alt}
      rmiz={{ children: img, zoomMargin: ZOOM_MARGIN }}
      src={typeof src === "object" && "default" in src ? src.default : src}
    >
      {img}
    </RmizImageZoom>
  );
}
