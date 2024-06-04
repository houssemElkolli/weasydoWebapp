import React, { Dispatch, SetStateAction } from "react";
type Props = {
    id: string;
    label: string;
    value: string;
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
const TextErea = ({ label, name, value, id, setProduct }: Props) => {
    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                flexDirection: "column",
                margin: "10px 0px",
            }}
        >
            <label
               className="product_label"
                htmlFor={id}
            >
                {label}
            </label>
            <textarea
                value={value}
                name={name}
                id={id}
                className="texterea"
                onChange={(e) => {
                    setProduct((old) => ({
                        ...old,
                        [name]: e.target.value,
                    }));
                }}
            ></textarea>
        </div>
    );
};

export default TextErea;
