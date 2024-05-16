import { instance } from "./ClientReducerAction";

export const Categories = "Api Categories";
export const ProductList = "Api Product List";
export const Total = "Total Products";
export const FetchState = "Fetch State";
export const Limit = "Product Count on the Page";
export const Offset = "Offset for Pagination";
export const Filter = "Filter Products";

export const setCategories = () => async (dispatch) => {
  try {
    const res = await instance.get("/categories");
    dispatch({ type: Categories, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const setProductList = (data) => {
  return { type: ProductList, payload: data };
};

export const setTotal = (user) => {
  return { type: Total, payload: user };
};

export const setFetchState = (user) => {
  return { type: FetchState, payload: user };
};

export const setLimit = (numb) => {
  return { type: Limit, payload: numb };
};

export const setOffset = (numb) => {
  return { type: Offset, payload: numb };
};

export const setFilter = (data) => {
  return { type: Filter, payload: data };
};

export const fetchProductList = (setProductLoading) => async (dispatch) => {
  setProductLoading(true);
  try {
    const res = await instance.get("/products");
    dispatch(setProductList(res.data.products));
    dispatch(setTotal(res.data.total));
    setProductLoading(false);
  } catch (err) {
    console.log(err);
  }
};
