"use client";
import SelectInput from "@/app/components/SelectInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const FiltreCategories = () => {
    const [filter, setFilter] = useState({ sort: "", limit: "" });
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );
    const handleChange = (name: string, value: string) => {
        setFilter((old) => ({ ...old, [name]: value }));
        router.replace(pathname + "?" + createQueryString(name, value));
    };
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <SelectInput
                options={["asc", "desc"]}
                handleChange={handleChange}
                value={filter.sort}
                name="sort"
                id="sort"
            />
            {!searchParams.has("category") && (
                <SelectInput
                    options={["2", "5", "20"]}
                    handleChange={handleChange}
                    value={filter.limit}
                    name="limit"
                    id="limit"
                />
            )}
        </div>
    );
};

export default FiltreCategories;
