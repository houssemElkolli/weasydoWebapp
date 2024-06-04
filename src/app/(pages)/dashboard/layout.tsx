import { appPATH } from "@/app/utils/path";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <div className="sidebar">
                <Link href={appPATH + "/dashboard/products"}>
                    All Products{" "}
                </Link>
                <Link href={"/dashboard/products/create"}>Add Product</Link>
            </div>

            <div className="dashboard_layout">{children}</div>
        </div>
    );
}
