import { getDoc, getDocs, query, where, collection, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const productsDB = collection(db, "productos");

export const getAllProducts = async (search = null) => {
    try {
        if(search){
            const searchTxt = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();
            const q = query(productsDB, where('nombre', '>=', searchTxt), where('nombre', '<=', searchTxt + "\uf8ff"));
            const products = await getDocs(q);
            const allProducts = products.docs.map((product) => ({...product.data(), id: product.id}));
            return allProducts;
        }else{
            const products = await getDocs(productsDB);
            const allProducts = products.docs.map((product) => ({...product.data(), id: product.id}));
            return allProducts;
        }    
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (id) => {
    try {
        const findProduct = doc(productsDB, id);
        const product = await getDoc(findProduct);
        return product.data();
    } catch (error) {
        console.log(error);
    }   
}