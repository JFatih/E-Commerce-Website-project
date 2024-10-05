import {
  AddCart,
  AddInvoiceAddress,
  AddPayment,
  AddShippingAddress,
  Checked,
  RemoveCart,
} from "../action/ShoppingCartAction";

const initialValue = {
  cart: [],
  payment: {},
  address: { shippingAddress: [], invoiceAddress: [] },
};

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
    case Checked:
      return {
        ...state,
        cart: state.cart.map((data) => {
          if (data.product.id === action.payload) {
            return {
              ...data,
              checked: !data.checked,
            };
          }
          return data;
        }),
      };
    case AddPayment:
      return { ...state, payment: { ...action.payload } };
    case AddShippingAddress:
      return {
        ...state,
        address: { ...state.address, shippingAddress: action.payload },
      };
    case AddInvoiceAddress:
      return {
        ...state,
        address: { ...state.address, invoiceAddress: action.payload },
      };
    default:
      return state;
  }
};
export default ShoppingCartReducer;
