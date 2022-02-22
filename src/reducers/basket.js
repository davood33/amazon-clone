export const initialState = {
  basket: [],
};
const basketReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
        return {
          ...state,
          basket: newBasket,
        };
      }

      break;
    default:
      return state;
  }
};
export default basketReducer;
