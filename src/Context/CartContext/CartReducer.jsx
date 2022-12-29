export const CartReducer = (state, action) => {

    switch (action.type) {
        
        case "ADD_TO_CART":
            return {
                ...state,
                cartList: action.payload.updatedCart,
                count: state.count + action.payload.count
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                cartList: action.payload.cartList,
                count: action.payload.updateCantidad
            };
        case "REMOVE_CART":
            return {
                ...state,
                cartList: action.payload.cartList,
                count: action.payload.cantidad
            };
        
        default:
            return state;
    }


};