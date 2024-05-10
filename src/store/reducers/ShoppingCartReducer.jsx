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
    case AddCart:
      return { ...state, cart: [...state.cart, action.payload] };
    case RemoveCart:
      return {
        ...state,
        cart: state.cart.filter((data) => data.id !== action.payload),
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
