import {
  Categories,
  FetchState,
  Filter,
  Limit,
  Offset,
  ProductList,
  Total,
} from "../action/ProductReducerAction";

const initialValue = {
  categories: null,
  productList: null,
  total: null,
  limit: 25,
  offset: 0,
  filter: "Popularity",
  fetchState: "NOT_FETCHED",
};

const ProductReducer = (state = initialValue, action) => {
  switch (action.type) {
    case Categories:
      return {
        ...state,
        categories: action.payload,
      };
    case ProductList:
      return {
        ...state,
        productList: action.payload,
      };
    case Total:
      return { ...state, total: action.payload };
    case FetchState:
      return { ...state, fetchState: action.payload };
    case Limit:
      return { ...state, limit: action.payload };
    case Offset:
      return { ...state, offset: action.payload };
    case Filter:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
export default ProductReducer;
