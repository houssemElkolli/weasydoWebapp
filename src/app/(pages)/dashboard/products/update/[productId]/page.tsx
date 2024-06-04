import { fakestoreapiPATH } from "@/app/utils/path";
import React from "react";
import UpdateForm from "./components/UpdateForm";
type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
};
const page = async ({ params }: { params: { productId: string } }) => {
    let product: Product = {
        id: NaN,
        title: "",
        description: "",
        image: "",
        price: 0,
        category: "",
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
        <div className="product_update_container">
            <UpdateForm product={product} />
        </div>
    );
};

export default page;
