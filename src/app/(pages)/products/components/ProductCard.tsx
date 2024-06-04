import { appPATH } from "@/app/utils/path";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
};
const ProductCard = ({ id, title, image, price, category }: Props) => {
    return (
        <Link href={appPATH + "/products/product/" + id}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Image alt="title" width={200} height={200} src={image} />{" "}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                        style={{
                            height: "auto",
                            width: "200px",
                        }}
                    >
                        {title}
                    </span>
                    <span>{price} $</span>
                    <span> {category}</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
