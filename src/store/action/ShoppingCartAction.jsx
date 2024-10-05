export const AddCart = "Add to Cart";
export const RemoveCart = "Remove to Cart";
export const AddPayment = "Add Payment Data";
export const RemovePayment = "Remove Payment Data";
export const AddAddress = "Add Address Data";
export const RemoveAddress = "Remove Address Data";
export const Checked = "Change product check";
export const AddInvoiceAddress = "Add Invoice Address";
export const AddShippingAddress = "Add ship address";

export const setAddCart = (data) => {
  return { type: AddCart, payload: data };
};

export const setRemoveCart = (id) => {
  return { type: RemoveCart, payload: id };
};

export const setChecked = (id) => {
  return { type: Checked, payload: id };
};

export const setAddPayment = (data) => {
  return { type: AddPayment, payload: data };
};

export const setRemovePayment = (data) => {
  return { type: RemovePayment, payload: data };
};

export const setAddInvoiceAddress = (data) => {
  return { type: AddInvoiceAddress, payload: data };
};

export const setAddShippingAddress = (data) => {
  return { type: AddShippingAddress, payload: data };
};

export const setRemoveAddress = (data) => {
  return { type: RemoveAddress, payload: data };
};
