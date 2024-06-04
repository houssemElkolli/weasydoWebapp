import React from "react";
type Props = {
    options: string[];
    value: string;
    handleChange: any;
    name: string;
    id: string;
};
const SelectInput = ({ id, options, value, handleChange, name }: Props) => {
    return (
        <div
            style={{
                margin: "10px",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
            }}
        >
            <label htmlFor={id} style={{ fontSize: "20px" }}>
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
            >
                <option>Default</option>
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
