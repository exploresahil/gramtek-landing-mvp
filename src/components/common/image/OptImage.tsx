"use client";

import "./style.scss";
import { buildSrc, Image, ImageKitProvider } from "@imagekit/next";
import { useState } from "react";

const OptImage = ({
  src,
  alt = "OptImage",
  width = 500,
  height = 500,
  loading = "lazy",
  sizes,
  className,
}: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  sizes?: string;
  className?: string;
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  return (
    <div className={`opt_img_container ${className}`}>
      <ImageKitProvider urlEndpoint="https://ik.imagekit.io/thecitclstudio/gramtek/">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          loading={loading}
          sizes={sizes}
          style={
            showPlaceholder
              ? {
                  backgroundImage: `url(${buildSrc({
                    urlEndpoint:
                      "https://ik.imagekit.io/thecitclstudio/gramtek/",
                    src,
                    transformation: [
                      {
                        width,
                        height,
                        quality: 10,
                        blur: 10,
                      },
                    ],
                  })})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }
              : {}
          }
          onLoad={() => {
            setShowPlaceholder(false);
          }}
        />
      </ImageKitProvider>
    </div>
  );
};

export default OptImage;
