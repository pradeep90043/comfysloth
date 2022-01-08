
const initialState = {
  cartItems: [],
  currentProduct: {},
  totalPrice:0
};
const cartUpdate = (state = initialState, action) => {
  if (action.type === "ADD") {
    const updatedItem = action.payload;

    return {
      ...state,
      currentProduct: updatedItem,
    };
  }
  if (action.type === "ADDTOCART") {
    console.log(action.payload);

    let updatedItems = [...state.cartItems];

   

    const existingItemID = updatedItems.findIndex(
      (item) => item.id === action.payload.id
    );
    if (existingItemID !== -1) {
      const updatedQty =
        updatedItems[existingItemID].quantity + action.payload.quantity;
      updatedItems[existingItemID].quantity = updatedQty;
    } else {
      updatedItems = state.cartItems.concat(action.payload);
    }
    const updatedPrice = updatedItems.reduce((acc, curEl) => {
      return acc + curEl.price * curEl.quantity
    },0)
    return {
      ...state,
      cartItems: updatedItems,
      totalPrice:updatedPrice
    };
  }
  if(action.type === "SENDTOTALPRICE"){
   
    return{
      ...state,
      cartItems: [],
      currentProduct: {},
      totalPrice:0
    }
  }
  if(action.type === "CLEAR"){
    return {
      cartItems: [],
      currentProduct: {},
      totalPrice:0
    }
  }

  return state;
};
export default cartUpdate;
