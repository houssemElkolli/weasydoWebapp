"use client";
import TextErea from "@/app/components/TextErea";
import { fakestoreapiPATH } from "@/app/utils/path";
import React, { EventHandler, useState } from "react";
import Input from "../../components/Input";
import SelectAddProductInput from "../../components/SelectAddProductInput";
import * as yup from "yup";

const UpdateForm = ({ options }: { options: string[] }) => {
    const [createdProduct, setProduct] = useState({
        title: "",
        description: "",
        price: 0,
        category: "",
    });
    const [success, setSuccess] = useState({ message: "", status: false });
    const [error, setError] = useState({
        message: "",
        field: "",
        status: false,
    });
    let data: { id: number } = { id: NaN };

    const ValidationSchema = yup.object().shape({
        title: yup.string(),
        description: yup.string(),
        price: yup.number(),
        category: yup.string(),
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            await ValidationSchema.validate(createdProduct, {
                abortEarly: false,
            });

            const res = await fetch(fakestoreapiPATH + "/products", {
                method: "POST",
                body: JSON.stringify({
                    title: createdProduct.title,
                    price: Number(createdProduct.price),
                    description: createdProduct.description,
                    category: createdProduct.category,
                }),
            });
            if (res.ok) {
                data = await res.json();
                setError({
                    field: "",
                    message: "",
                    status: false,
                });
                setProduct({
                    title: "",
                    description: "",
                    price: 0,
                    category: "",
                });
                setSuccess({ message: "Created Succesufully", status: true });
                setTimeout(
                    () => setSuccess({ message: "", status: false }),
                    3000
                );
                console.log(data);
            }
        } catch (error: any) {
            setError({
                field: error.inner[0].path,
                message: error.inner[0].message,
                status: true,
            });
        }
    };

    return (
        <div className="product_form_container">
            {success.status && (
                <div className="success_message">{success.message}</div>
            )}
            {error.status && (
                <div className="error_message">
                    {" "}
                    field : {error.field} - message :{error.message}
                </div>
            )}
            <form onSubmit={(e) => handleSubmit(e)} className="">
                <Input
                    id="title"
                    name="title"
                    label="title"
                    placeholder="title"
                    type="text"
                    value={createdProduct.title}
                    setProduct={setProduct}
                />
                <Input
                    id="price"
                    name="price"
                    label="price"
                    placeholder="price"
                    type="number"
                    value={createdProduct.price}
                    setProduct={setProduct}
                />
                <SelectAddProductInput
                    value={createdProduct.category}
                    options={options}
                    id="category"
                    name="category"
                    handleChange={setProduct}
                />
                <TextErea
                    label="description"
                    name="description"
                    id="description"
                    value={createdProduct.description}
                    setProduct={setProduct}
                />

                <button
                    className="base_button product_update_button "
                    type="submit"
                >
                    create
                </button>
            </form>
        </div>
    );
};

export default UpdateForm;
