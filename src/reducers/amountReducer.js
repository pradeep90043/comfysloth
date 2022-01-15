const initialState = {
  cartItems: [],
  currentProduct: {},
  totalPrice: 0,
  totalQuantity: 0,
  selectedColor: [],
  resetSlider:""
};
const cartUpdate = (state = initialState, action) => {
  if (action.type === "ADD") {
    //add inside product page
    const updatedItem = action.payload;

    return {
      ...state,
      currentProduct: updatedItem,
    };
  }
  if (action.type === "ADDTOCART") {
    console.log(action.payload);

    let updatedItems = [...state.cartItems];

    let updatedQty;

    const existingItemID = updatedItems.findIndex(
      (item) => item.id === action.payload.id
    );
    if (existingItemID !== -1) {
      updatedQty =
        updatedItems[existingItemID].quantity + action.payload.quantity;
      updatedItems[existingItemID].quantity = updatedQty;
    } else {
      console.log(action.payload);
      updatedItems.push(action.payload);
    }
    const updatedPrice = updatedItems.reduce((acc, curEl) => {
      return acc + curEl.price * curEl.quantity;
    }, 0);
    const updatedTotalQuantity = updatedItems.reduce((acc, curEl) => {
      return acc + curEl.quantity;
    }, 0);
    return {
      ...state,
      cartItems: updatedItems,
      totalPrice: updatedPrice,
      totalQuantity: updatedTotalQuantity,
    };
  }
  if (action.type === "REMOVE") {
    console.log("action :" + action.payload);
    let updatedItems = [...state.cartItems];
    console.log(updatedItems, "updatedItems1");
    updatedItems = updatedItems.filter((item) => {
      console.log("state :" + item.id);
      return item.id !== action.payload;
    });
    console.log(updatedItems, "updatedItems");
    const updatedPrice = updatedItems.reduce((acc, curEl) => {
      return acc + curEl.price * curEl.quantity;
    }, 0);
    const updatedTotalQuantity = updatedItems.reduce((acc, curEl) => {
      return acc + curEl.quantity;
    }, 0);
    console.log(updatedTotalQuantity);
    return {
      ...state,
      cartItems: updatedItems,
      totalPrice: updatedPrice,
      totalQuantity: updatedTotalQuantity,
    };
  }

  if (action.type === "SENDTOTALPRICE") {
    return {
      ...state,
      cartItems: [],
      currentProduct: {},
      totalPrice: 0,
    };
  }
  if (action.type === "CLEAR") {
    return {
      ...state,
      cartItems: [],
      currentProduct: {},
      totalPrice: 0,
      totalQuantity: 0,
      selectedColor: [],
    };
  }
 
  

  return state;
};
export default cartUpdate;
