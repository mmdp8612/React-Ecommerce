import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

const ProductItem = ({product}) => {

    const { addProductCart } = useContext(CartContext);

    return (
        <div className="col-3">
            <div className="card my-2">
                <Link to={`/productos/${product.id}`}>
                    <img src={ product.img } className="card-img-top" alt={ product.nombre } />
                </Link>
                <div className="card-body text-center">
                    <h5 className="card-title">{ product.nombre }</h5>
                    <p className="card-text">Precio: $ { product.precio }</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <Link to={`/productos/${product.id}`} className="btn btn-primary w-100">Ver ficha</Link>
                        <button 
                            type="button" 
                            className="btn btn-default w-90"
                            onClick={() => addProductCart(product)}
                        >
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;