import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import filterReducer from "./filter/filterReducer";

const roorReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
  filterState: filterReducer,
});

export default roorReducer;
