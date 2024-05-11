import { legacy_createStore as createStore, applyMiddleware } from "redux"; // legacy_createStore'ı kullanacaksanız, createStore'ı doğru şekilde içe aktarın
import thunk from "redux-thunk"; // redux-thunk'u doğru şekilde içe aktarın
import logger from "redux-logger";
import { combineReducers } from "redux"; // combineReducers'ı doğru şekilde içe aktarın
import ClientReducer from "./reducers/ClientReducer.jsx";
import ProductReducer from "./reducers/ProductReducer.jsx";
import ShoppingCartReducer from "./reducers/ShoppingCartReducer.jsx";

const reducers = combineReducers({
  Client: ClientReducer,
  Product: ProductReducer,
  ShoppingCart: ShoppingCartReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
