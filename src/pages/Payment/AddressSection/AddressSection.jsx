import { useEffect, useState } from "react";
import AddressSelector from "./AddressSelector";
import {
  setAddInvoiceAddress,
  setAddShippingAddress,
} from "../../../store/action/ShoppingCartAction";
import { useDispatch, useSelector } from "react-redux";

export default function AddressSection() {
  const cartAddress = useSelector((store) => store.ShoppingCart.address);
  const dispatch = useDispatch();

  const isSeperate = !cartAddress.invoiceAddress;

  const [seperateAddress, setSeperateAddress] = useState(isSeperate);
  const [shipAddress, setShipAddress] = useState(
    cartAddress.shippingAddress || undefined
  );
  const [invoiceAddress, setInvoiceAddress] = useState(
    cartAddress.invoiceAddress || undefined
  );

  useEffect(() => {
    if (seperateAddress) {
      dispatch(setAddInvoiceAddress(undefined));
    }
  }, [seperateAddress, dispatch]);

  const handleShippingAddressChange = (data) => {
    dispatch(setAddShippingAddress(data));
    setShipAddress(data);
  };

  const handleInvoiceAddressChange = (data) => {
    dispatch(setAddInvoiceAddress(data));
    setInvoiceAddress(data);
  };

  const AddressCheckbox = ({ id }) => (
    <div className="flex gap-1">
      <input
        type="checkbox"
        className="w-4"
        id={id}
        checked={seperateAddress}
        onChange={() => setSeperateAddress((prev) => !prev)}
      />
      <label htmlFor={id} className="cursor-pointer">
        Same Invoice Address
      </label>
    </div>
  );

  return (
    <div className="border rounded-sm shadow-md flex flex-col justify-start items-center sh5 gap-1 pb-3">
      <div className="hidden lg:flex lg:w-full lg:justify-end lg:px-5 lg:pt-2">
        <AddressCheckbox id="invoiceAddress-lg" />
      </div>

      <div className="w-full flex flex-col gap-5 lg:flex-row lg:px-3 lg:p-1 items-center lg:items-start">
        <div className="w-full max-w-[331px]">
          <div className="py-1 flex flex-col justify-center items-center">
            <p className="text-center py-1 text-alertColor sh3">
              Shipping Address
            </p>
            <div className="lg:hidden">
              <AddressCheckbox id="invoiceAddress-sm" />
            </div>
          </div>
          <AddressSelector
            selectedAddressData={shipAddress}
            setSelecetAddressData={setShipAddress}
            dispatchAddress={handleShippingAddressChange}
          />
        </div>
        {!seperateAddress && (
          <div className="w-full max-w-[331px]">
            <p className="text-center py-2 text-alertColor sh3">
              Invoice Address
            </p>
            <AddressSelector
              selectedAddressData={invoiceAddress}
              setSelecetAddressData={setInvoiceAddress}
              dispatchAddress={handleInvoiceAddressChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
