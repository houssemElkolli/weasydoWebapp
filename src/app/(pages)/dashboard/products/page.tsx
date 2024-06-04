import { appPATH, fakestoreapiPATH } from "@/app/utils/path";
import Link from "next/link";
import React from "react";
import DeleteButton from "./components/DeleteButton";
type ProductsType = Product[];
type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
};
const page = async () => {
    let products: ProductsType = [];

    try {
        const res = await fetch(fakestoreapiPATH + "/products");
        if (res.ok) {
            products = await res.json();
        }
    } catch (error) {
        console.log(error);
    }

    return (
        <div>
            <div style={{ padding: "10px" }}>
                <table className="productsTable">
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td style={{ width: "50%" }}>
                                    {product.description}
                                </td>
                                <td>
                                    <Link
                                        className="base_button"
                                        style={{ color: "black" }}
                                        href={
                                            appPATH +
                                            "/dashboard/products/update/" +
                                            product.id
                                        }
                                    >
                                        Edit
                                    </Link>
                                </td>
                                <td>
                                    <DeleteButton id={product.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;
