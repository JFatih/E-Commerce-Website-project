import { instance } from "./ClientReducerAction";

export const Categories = "Api Categories";
export const ProductList = "Api Product List";
export const Total = "Total Products";
export const FetchState = "Fetch State";
export const Limit = "Product Count on the Page";
export const Offset = "Offset for Pagination";
export const Filter = "Filter Products";

export const setCategories = (user) => {
  try {
    const res = await instance.get("/categories")
  }
  return { type: Categories, payload: user };
};

export const setProductList = (user) => {
  return { type: ProductList, payload: user };
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
