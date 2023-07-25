import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

const CartList = () => {

    const { cart } = useContext(CartContext);

    return (
        cart.items.length !== 0 ? 
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mb-4">Carrito</h1>
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">Imagen</th>
                                <th className="text-left">Producto</th>
                                <th className="text-center">Precio</th>
                                <th className="text-center">Cantidad</th>
                                <th className="text-center">Total</th>
                                <th className="text-center">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.items.map(item => (
                                    <CartItem item={item} key={item.id} />
                                ))
                            }
                        </tbody>
                    </table>   
                </div>
            </div>
        : <div className="alert alert-danger text-center">
            Su carrito esta vacio
        </div>
    )
}

export default CartList;