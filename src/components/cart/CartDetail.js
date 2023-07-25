import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const CartDetail = () => {

    const { cart, clearCart } = useContext(CartContext);

    const clearItemsCart = () => {
        MySwal.fire({
            title: 'Esta accion eliminara todos los productos del carrito, desea continuar?',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
            } 
        })
    }

    return (
        cart.items.length !== 0 ? 
            <div className="row">
                <div className="col-6">
                    <button type="button" className="btn btn-primary">
                        Finalizar Compra
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={()=>clearItemsCart()}>
                        Vaciar Carrito
                    </button>
                </div>
                <div className="col-6 text-end pt-2 pb-2">
                    <h4>Total: $ { Number(cart.total).toFixed(2) }</h4>
                </div>
            </div>
        : null
        
    )
}

export default CartDetail;