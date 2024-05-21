import {
  Categories,
  FetchState,
  Filter,
  Limit,
  Offset,
  ProductList,
  RemoveFilter,
  Total,
} from "../action/ProductReducerAction";

const initialValue = {
  categories: null,
  productList: null,
  total: null,
  limit: 8,
  offset: 0,
  filter: { inputFilter: null, sortFilter: null },
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
      console.log(action.payload.inputFilter, action.payload.selectedSort);
      return {
        ...state,
        filter: {
          inputFilter: action.payload.inputFilter,
          sortFilter: action.payload.selectedSort,
        },
      };
    case RemoveFilter:
      return {
        ...state,
        filter: {
          inputFilter: initialValue.filter.inputFilter,
          sortFilter: initialValue.filter.selectedSort,
        },
      };
    default:
      return state;
  }
};
export default ProductReducer;
