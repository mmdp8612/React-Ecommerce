import { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductService";
import ProductList from "../components/Products/ProductList";
import ProductSearch from "../components/Products/ProductSearch";
import Loading from "../components/Loading";

const Products = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const products = await getAllProducts();
            setProducts(products);
            setIsLoading(false);
        }
        getProducts();
        return () => {
            
        };
    }, []);

    const handlerSearch = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const query = event.target.search.value;
        const products = await getAllProducts(query);
        setProducts(products);
        setIsLoading(false);
    }

    return (
        <>
            <ProductSearch handlerSearch={handlerSearch} />
            {
                isLoading 
                ? <Loading /> 
                : <ProductList products={products} />
            }
            
        </>
    )
}

export default Products;