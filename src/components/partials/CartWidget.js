import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { cart } = useContext(CartContext);

    return (
        <Link to="/cart" className="btn position-relative text-white">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                { (cart.total_items < 10)?cart.total_items:`+9` }
            </span>
        </Link>
    );
}

export default CartWidget;