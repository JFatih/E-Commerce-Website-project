import { useEffect, useState } from "react";
import PaymentSelector from "./PaymentSelector";

export default function AddressSection() {
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="border rounded-sm shadow-md flex flex-col justify-start items-center sh5 gap-1 pb-3">
      <div className="w-full flex flex-col gap-5 lg:flex-row lg:px-3 lg:p-1 items-center lg:items-start">
        <div className="lg:w-full max-w-[331px]">
          <div className="py-1 flex flex-col justify-center items-center">
            <p className="text-center py-1 text-alertColor sh3">Payment Data</p>
          </div>
          <PaymentSelector />
        </div>
      </div>
    </div>
  );
}
