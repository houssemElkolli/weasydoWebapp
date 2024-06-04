import Image from "next/image";
import React from "react";
import rateStar from "../../../../../image/ratingStar.png";
import ImageContainer from "./ImageContainer";
type Product = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    rating: { rate: Number; count: number };
};
const SingleProduct = async ({ product }: { product: Product }) => {
    const roundRate = Math.round(Number(product.rating.rate));
    const diffrence = 5 - Math.round(Number(product.rating.rate));
    const Comments: { [index: string]: string } = {
        1: "Ok",
        2: "Ok",
        3: "good",
        4: "Great",
        5: "Excellent",
    };
    return (
        <div className="single_product_container">
            <Image
                className="single_product_image"
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
            />

            <div className="single_product_right_side">
                <span className="single_product_price">{product.price} $ </span>
                <h2 style={{ maxWidth: "400px" }}>{product.title} </h2>
                <p className="single_product_description">
                    {product.description}{" "}
                </p>
                <div className="rate_container">
                    <span>
                        {String(product.rating.rate)}
                        {" / 5"}{" "}
                    </span>
                    <div>
                        {Array(roundRate)
                            .fill(0)
                            .map((item) => (
                                <ImageContainer
                                    key={item}
                                    src={rateStar}
                                    alt="star"
                                    width={40}
                                    height={40}
                                />
                            ))}
                        {Array(diffrence)
                            .fill(0)
                            .map((item) => (
                                <ImageContainer
                                    key={item}
                                    style={{ opacity: "0.5" }}
                                    src={rateStar}
                                    alt="star"
                                    width={40}
                                    height={40}
                                />
                            ))}{" "}
                    </div>
                </div>
                <div>
                    <span style={{ fontSize: "25px" }}>
                        {String(product.rating.count)}{" "}
                    </span>
                    <span>People Find this Product </span>
                    <span
                        className="comment_container"
                    >
                        {Comments[roundRate]}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
