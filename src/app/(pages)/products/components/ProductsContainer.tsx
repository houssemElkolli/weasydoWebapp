import { fakestoreapiPATH } from "@/app/utils/path";
import ProductCard from "./ProductCard";
type ProductsType = Product[];
type Product = {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
};
const ProductsContainer = async ({
    category,
    sort,
    limit,
}: {
    category?: string;
    sort?: string;
    limit?: string;
}) => {
    let products: ProductsType = [];
    console.log(sort);

    try {
        const res = await fetch(
            fakestoreapiPATH +
                "/products" +
                (category !== undefined
                    ? "/category/" +
                      category +
                      "?" +
                      "sort=" +
                      sort +
                      "&" +
                      limit
                    : "?" + "sort=" + sort + "&" + "limit=" + limit)
        );
        if (res.ok) {
            products = await res.json();
        }
    } catch (error) {
        console.log(error);
    }
    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "100px auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "50px",
            }}
        >
            {products.length > 0
                ? // !Number.isNaN(products[0].id)
                  products.map((product) => (
                      <ProductCard
                          key={product.id}
                          id={product.id}
                          title={product.title}
                          image={product.image}
                          price={product.price}
                          category={product.category}
                      />
                  ))
                : "No Products, Please check Your Internet "}
        </div>
    );
};

export default ProductsContainer;
