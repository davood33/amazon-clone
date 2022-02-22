import { combineReducers } from "redux";
import isLoggedReducer from "./isLogged";
import basketReducer from "./basket";
const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  basket: basketReducer,
});
export default allReducers;