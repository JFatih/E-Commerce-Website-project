import { legacy_createStore as createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import ClientReducer from "./reducers/ClientReducer.jsx";
import ProductReducer from "./reducers/ProductReducer.jsx";
import ShoppingCartReducer from "./reducers/ShoppingCartReducer.jsx";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  Client: ClientReducer,
  Product: ProductReducer,
  ShoppingCart: ShoppingCartReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
