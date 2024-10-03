import { useEffect, useState } from "react";
import AddressSelector from "./AddressSelector";
import {
  setAddInvoiceAddress,
  setAddShippingAddress,
} from "../../../store/action/ShoppingCartAction";

export default function AddressSection() {
  const [seperateAddress, setSeperateAddress] = useState(true);
  const [shipAddress, setShipAddress] = useState(null);
  const [invoiceAddress, setInvoiceAddress] = useState(null);

  useEffect(() => {
    if (seperateAddress) {
      setInvoiceAddress(null);
      setAddInvoiceAddress(null);
    } else {
      setAddInvoiceAddress(invoiceAddress);
    }
    setAddShippingAddress(shipAddress);
  }, [seperateAddress, invoiceAddress, shipAddress]);

  const AddressCheckbox = ({ id }) => (
    <div className="flex gap-1">
      <input
        type="checkbox"
        className="w-4"
        id={id}
        checked={seperateAddress}
        onChange={() => setSeperateAddress(!seperateAddress)}
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
        <div className="lg:w-full max-w-[331px]">
          <div className="py-1 flex flex-col justify-center items-center">
            <p className="text-center py-1 text-alertColor sh3">
              Shipping Address
            </p>
            <div className="lg:hidden">
              <AddressCheckbox id="invoiceAddress-sm" />
            </div>
          </div>
          <AddressSelector setter={setShipAddress} />
        </div>
        {!seperateAddress && (
          <div className="lg:w-full max-w-[331px]">
            <p className="text-center py-2 text-alertColor sh3">
              Invoice Address
            </p>
            <AddressSelector setter={setInvoiceAddress} />
          </div>
        )}
      </div>
    </div>
  );
}
