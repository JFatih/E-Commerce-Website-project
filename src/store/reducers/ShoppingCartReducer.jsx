import {
  AddAddress,
  AddCart,
  AddPayment,
  RemoveAddress,
  RemoveCart,
  RemovePayment,
} from "../action/ShoppingCartAction";

const initialValue = { cart: [], payment: {}, address: {} };

const ShoppingCartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case AddCart: {
      let isHave = state.cart.find(
        (data) => data.product.id === action.payload.product.id
      );
      if (isHave) {
        return {
          ...state,
          cart: state.cart.map((data) =>
            data.product.id === action.payload.product.id
              ? { ...data, count: data.count + action.payload.count }
              : data
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }
    case RemoveCart:
      return {
        ...state,
        cart: state.cart.filter((data) => data.product.id !== action.payload),
      };
    case AddPayment:
      return { ...state, payment: { ...state.payment, ...action.payload } };
    case RemovePayment:
      return {
        ...state,
        payment: state.payment.filter((data) => data !== action.payload),
      };
    case AddAddress:
      return { ...state, address: { ...state.address, ...action.payload } };
    case RemoveAddress:
      return {
        ...state,
        address: state.address.filter((data) => data !== action.payload),
      };
    default:
      return state;
  }
};
export default ShoppingCartReducer;
