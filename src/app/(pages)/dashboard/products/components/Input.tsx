"use client";

import { Dispatch, SetStateAction, useRef } from "react";

type Props = {
    placeholder: string;
    id: string;
    label: string;
    type: string;
    value: string | number;
    name: string;
    setProduct: Dispatch<
        SetStateAction<{
            title: string;
            description: string;
            price: number;
            category: string;
        }>
    >;
};
const Input = ({
    placeholder,
    id,
    label,
    type,
    value,
    name,
    setProduct,
}: Props) => {
    const ref: any = useRef();
    return (
        <div className="product_input_wrapper">
            <label className="product_label" htmlFor={name}>
                {label}
            </label>
            <input
                ref={ref}
                className="product_input"
                placeholder={placeholder}
                type={type}
                value={value}
                name={name}
                onChange={(e) => {
                    setProduct((old) => ({
                        ...old,
                        [name]: e.target.value,
                    }));
                }}
                id={id}
                autoComplete="off"
            />
        </div>
    );
};

export default Input;
