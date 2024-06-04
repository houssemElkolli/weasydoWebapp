"use client";
import TextErea from "@/app/components/TextErea";
import { fakestoreapiPATH } from "@/app/utils/path";
import React, { EventHandler, useState } from "react";
import Input from "../../../components/Input";
type Product = {
    id?: number;
    title: string;
    description: string;
    price: number;
    category: string;
};
const UpdateForm = ({ product }: { product: Product }) => {
    const [updatedProduct, setProduct] = useState({
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
    });
    const [success, setSuccess] = useState({ message: "", status: false });
    let data: { id: number } = { id: NaN };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await fetch(
                fakestoreapiPATH + "/products/" + product.id,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        title: updatedProduct.title,
                        price: Number(updatedProduct.price),
                        description: updatedProduct.description,
                        category: updatedProduct.category,
                    }),
                }
            );
            if (res.ok) {
                data = await res.json();
                setSuccess({ message: "Updated Succesufully", status: true });
                setTimeout(
                    () => setSuccess({ message: "", status: false }),
                    3000
                );
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="product_form_container">
            {success.status && (
                <div className="success_message">{success.message}</div>
            )}
            <form onSubmit={(e) => handleSubmit(e)} className="">
                <Input
                    id="title"
                    name="title"
                    label="title"
                    placeholder="title"
                    type="text"
                    value={updatedProduct.title}
                    setProduct={setProduct}
                />
                <Input
                    id="price"
                    name="price"
                    label="price"
                    placeholder="price"
                    type="number"
                    value={String(updatedProduct.price)}
                    setProduct={setProduct}
                />
                <Input
                    id="category"
                    name="category"
                    label="category"
                    placeholder="category"
                    type="text"
                    value={updatedProduct.category}
                    setProduct={setProduct}
                />
                <TextErea
                    label="description"
                    name="description"
                    id="description"
                    value={updatedProduct.description}
                    setProduct={setProduct}
                />

                <button
                    className="base_button product_update_button "
                    type="submit"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateForm;
