import FiltreCategories from "./components/FiltreCategories";
import ProductsContainer from "./components/ProductsContainer";

const page = async ({
    searchParams,
}: {
    searchParams: {
        category?: string;
        sort?: string;
        limit?: string;
    };
}) => {
    const { category, sort, limit } = searchParams;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <FiltreCategories />
            <ProductsContainer category={category} sort={sort} limit={limit} />
        </div>
    );
};

export default page;
