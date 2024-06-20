export const AddCart = "Add to Cart";
export const RemoveCart = "Remove to Cart";
export const AddPayment = "Add Payment Data";
export const RemovePayment = "Remove Payment Data";
export const AddAddress = "Add Address Data";
export const RemoveAddress = "Remove Address Data";

export const setAddCart = (data) => {
  return { type: AddCart, payload: data };
};

export const setRemoveCart = (id) => {
  return { type: RemoveCart, payload: id };
};

export const setAddPayment = (data) => {
  return { type: AddPayment, payload: data };
};

export const setRemovePayment = (data) => {
  return { type: RemovePayment, payload: data };
};

export const setAddAddress = (data) => {
  return { type: AddAddress, payload: data };
};

export const setRemoveAddress = (data) => {
  return { type: RemoveAddress, payload: data };
};