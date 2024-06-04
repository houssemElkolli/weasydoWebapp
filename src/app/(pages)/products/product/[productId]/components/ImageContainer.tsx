import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageContainer = ({
    src,
    alt,
    width,
    height,
    style,
}: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
    style?: any;
}) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={style}
        />
    );
};

export default ImageContainer;
