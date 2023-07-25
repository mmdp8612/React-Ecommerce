import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/ProductService";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Loading from "../Loading";

const ProductDetail = () => {

    const params = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { addProductCart } = useContext(CartContext);

    useEffect(() => {
        const getProduct = async () => {
            const product = await getProductById(params.productId);
            setProduct(product);
            setIsLoading(false);
        }
        getProduct();
    });

    return (
        <>
            <h1 className="mb-4 d-flex justify-content-between align-items-center">
                <span>Ficha del Producto</span>
                <Link className="btn text-primary" to="/productos">Volver al listado</Link>
            </h1>  
            <hr />
            {
                isLoading
                ? <Loading />
                : <div className="row">
                    <div className="col-6 text-center">
                        <img src={ product.img } width="50%" alt={product.nombre} />
                    </div>
                    <div className="col-6">
                        <h2 className="mb-4 text-uppercase">{ product.nombre }</h2>
                        <p>Precio: <b>$ { Number(product.precio).toFixed(2) }</b></p>
                        <p>{ product.descrip }</p>
                        <button 
                            type="button" 
                            className="btn btn-success"
                            onClick={() => addProductCart(product)}
                        >Agregar al carrito</button>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductDetail;