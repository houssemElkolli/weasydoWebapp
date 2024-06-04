import React from "react";
import CreateForm from "./components/CreateForm";
import { fakestoreapiPATH } from "@/app/utils/path";

const page = async () => {
    let data: string[] = [];
    try {
        const res = await fetch(fakestoreapiPATH + "/products/categories");
        if (res.ok) {
            data = await res.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
    return (
        <div className="product_update_container">
            <CreateForm options={data} />
        </div>
    );
};

export default page;
