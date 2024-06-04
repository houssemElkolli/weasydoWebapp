"use client";
import React, { useState } from "react";

const DeleteButton = ({ id }: { id: number }) => {
    const [success, setSuccess] = useState(false);
    let data = { id: NaN };
    const handleDelete = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products/" + id, {
                method: "DELETE",
            });
            if (res.ok) {
                data = await res.json();
                setSuccess(true);
            }
        } catch (error) {}
    };
    return (
        <button
            className="base_button"
            type="button"
            onClick={handleDelete}
            style={{ color: success ? "green" : "black" }}
        >
            Delete
        </button>
    );
};

export default DeleteButton;
