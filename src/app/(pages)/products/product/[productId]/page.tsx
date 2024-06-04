import { fakestoreapiPATH } from "@/app/utils/path";
import React from "react";
import SingleProduct from "./components/SingleProduct";
type Product = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    rating: { rate: Number; count: number };
};
const page = async ({ params }: { params: { productId: string } }) => {
    let product: Product = {
        id: NaN,
        title: "",
        description: "",
        image: "",
        price: NaN,
        category: "",
        rating: { rate: NaN, count: NaN },
    };
    try {
        const res = await fetch(
            fakestoreapiPATH + "/products/" + params.productId
        );
        if (res.ok) {
            product = await res.json();
        }
    } catch (error) {
        console.log(error);
    }

    return (
        <div>
            {!Number.isNaN(product.id) ? (
                <SingleProduct product={product} />
            ) : (
                "No Product, Please Check Your Interenet"
            )}
        </div>
    );
};

export default page;
