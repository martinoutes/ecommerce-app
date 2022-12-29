import { createContext, useContext, useReducer, useEffect } from "react";
import { CartReducer } from "./CartReducer";



export const CartContext = createContext(null)
export const useCartContext = () => useContext(CartContext);

const cartListLocalStorage = JSON.parse(localStorage.getItem('cartList') || '[]')
const countLocalStorage = JSON.parse(localStorage.getItem('count') || '0')

const initialState = {
    cartList: cartListLocalStorage,
    count: countLocalStorage
}


export const CartContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(CartReducer, initialState)
    
    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(state.cartList));
        localStorage.setItem('count', JSON.stringify(state.count));

    }, [state.cartList, state.count])
    

    function addToCart(item, count){

        const updatedCart = [...state.cartList]

        if(isInCart(item.id)){

            //Si ya esta en el carrito
            const itemIndex = updatedCart.findIndex(product => product.id === item.id);

            const Item = state.cartList.find(item => item.id === state.cartList[itemIndex].id);
            const previousCount = Item.cantidad;

            const newItemCount = {...state.cartList[itemIndex], cantidad:previousCount+count};
            updatedCart.splice(itemIndex, 1, newItemCount);

        } else {
            //Si no esta en el carrito
            const newItem = {...item, cantidad: count}
            updatedCart.push(newItem);
        }

        dispatch({
            type: "ADD_TO_CART",
            payload: {updatedCart, count},
          });
    }


    function removeItem(itemId){
        
        const cartList = [...state.cartList];
        const updatedItemIndex = cartList.findIndex(item => item.id === itemId);

        const updatedItem = {
            ...cartList[updatedItemIndex]
         };

        let updateCantidad = state.count - updatedItem.cantidad 
        cartList.splice(updatedItemIndex, 1);
        
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: { cartList , updateCantidad },
          });
    }

    function clearCart(){
        const cartList = [];
        let cantidad = 0;
        
        dispatch({
            type: "REMOVE_CART",
            payload: {cartList, cantidad},
          });
    }


    const isInCart = (id) => state.cartList.find(item => item.id === id) ? true : false;
    

 
    return (
        
        <CartContext.Provider value={{ 
            
            cartList: state.cartList, 
            count: state.count,
            addToCart, 
            clearCart,
            removeItem,
            isInCart
            }}>

            {children}
        </CartContext.Provider>
        
    )
}