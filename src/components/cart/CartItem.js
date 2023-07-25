import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const CartItem = ({item}) => {

    const { removeProductCart } = useContext(CartContext);

    const removeItemCart = (item) => {
        MySwal.fire({
            title: 'Seguro que quiere quitar del carrito el producto?',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                removeProductCart(item);
            } 
        })
    }

    return (
        <tr>
            <td className="text-center"><img src={item.img} width="90" alt={item.nombre} /></td>
            <td className="text-left" valign="middle">{ item.nombre }</td>
            <td className="text-center" valign="middle">{ item.precio }</td>
            <td className="text-center" valign="middle">{ item.cantidad }</td>
            <td className="text-center" valign="middle">{ Number(item.precio * item.cantidad).toFixed(2) }</td>
            <td className="text-center" valign="middle">
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={() => removeItemCart(item)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
}

export default CartItem;