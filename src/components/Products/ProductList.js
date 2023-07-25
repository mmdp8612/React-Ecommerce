import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
    return (
        <div className="row">
            {
                products.length!==0 
                ? products.map(el => <ProductItem product={el} key={el.id} />)
                : <div className="alert alert-danger text-center">No se encontraron productos.</div>
            }
        </div>
    )
}

export default ProductList;