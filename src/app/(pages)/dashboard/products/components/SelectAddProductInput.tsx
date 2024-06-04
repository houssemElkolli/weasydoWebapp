import React from "react";
type Props = {
    options: string[];
    value: string;
    handleChange: any;
    name: string;
    id: string;
};
const SelectAddProductInput = ({
    id,
    options,
    value,
    handleChange,
    name,
}: Props) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin : "10px 0px"
            }}
        >
            <label className="product_label" htmlFor={id}>
                {name}{" "}
            </label>
            <select
                onChange={(e) =>
                    handleChange((name = name), (value = e.target.value))
                }
                id={id}
                value={value}
                style={{
                    padding: "5px",
                }}
                className="select_product_input"
            >
                <option>Default</option>
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectAddProductInput;
