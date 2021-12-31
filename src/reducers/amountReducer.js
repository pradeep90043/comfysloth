const initialState = {
  item: [],
  totalQuant: 0,
};
const cartUpdate = (state = initialState, action) => {
  if (action.type === "ADD") {
    console.log();
    const updatedItem = [...state.item, action.payload];
    return {
      ...state,
      item: updatedItem,
      totalQuant: 0,
    };
  }
  return state;
};
export default cartUpdate;
