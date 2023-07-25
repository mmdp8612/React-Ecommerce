import { createContext, useState } from 'react';

export const CartContext = createContext();

const initialCart = {
    items: [],
    total_items: 0,
    total: 0.00
};  

export const CartProvider = ({children}) => {
    
    const [ cart, setCart ] = useState(initialCart);

    const addProductCart = (product) => {
        const existingProduct = cart.items.find(item => item.id === product.id);
        if (existingProduct) {
            const updatedItems = cart.items.map(item => {
                    return item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
                }
            );
            const updatedTotalItems = cart.total_items + 1;
            const updatedTotal = Number(cart.total) + Number(product.precio);

            setCart({
                ...cart,
                items: updatedItems,
                total_items: updatedTotalItems,
                total: updatedTotal
            });
        } else {
            const newProduct = { ...product, cantidad: 1 };
            const updatedItems = [...cart.items, newProduct];
            const updatedTotalItems = cart.total_items + 1;
            const updatedTotal = Number(cart.total) + Number(product.precio);

            setCart({
                ...cart,
                items: updatedItems,
                total_items: updatedTotalItems,
                total: updatedTotal
            });
        }
    }

    const removeProductCart = (product) => {
        const existingProduct = cart.items.find(item => item.id === product.id);
        if (existingProduct) {
            if (existingProduct.cantidad === 1) {
                const updatedItems = cart.items.filter(item => item.id !== product.id);
                const updatedTotalItems = cart.total_items - 1;
                const updatedTotal = cart.total - product.precio;

                setCart({
                    ...cart,
                    items: updatedItems,
                    total_items: updatedTotalItems,
                    total: updatedTotal
                });
            } else {
                const updatedItems = cart.items.map(item =>
                item.id === product.id ? { ...item, cantidad: item.cantidad - 1 } : item
                );
                const updatedTotalItems = cart.total_items - 1;
                const updatedTotal = cart.total - product.precio;

                setCart({
                    ...cart,
                    items: updatedItems,
                    total_items: updatedTotalItems,
                    total: updatedTotal
                });
            }
        }
    }

    const clearCart = () => {
        setCart({
            ...cart,
            items: [],
            total_items: 0,
            total: 0.00
        });
    }
    
    return (
        <CartContext.Provider value={{cart, addProductCart, removeProductCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}