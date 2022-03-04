import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import roorReducer from "./rootReducer";

const store = createStore(roorReducer, applyMiddleware(thunk));

export default store;
