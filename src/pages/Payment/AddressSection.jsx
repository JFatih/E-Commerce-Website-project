import { useState } from "react";
import { useSelector } from "react-redux";

export default function AddressSection() {
  const [incoiceAdd, setInvoiceAdd] = useState(true);
  const userAddressData = useSelector((store) => store.Client.user.addressList);

  console.log(userAddressData);

  return (
    <div className="border raunded-sm shadow-md flex flex-col justify-center items-center sh5 gap-3">
      <div className="py-2">
        <p className="text-center py-2">Shipping Address</p>
        <div className="flex gap-1 text-start">
          <input
            type="checkbox"
            className="w-4"
            id="invoiceAddress"
            checked={incoiceAdd}
            onClick={() => setInvoiceAdd(!incoiceAdd)}
          />
          <label htmlFor="invoiceAddress">Same Invoice Address</label>
        </div>
      </div>
      <div className="md:w-72 w-full flex flex-col gap-5">
        <button className="py-2 px-5 bg-lightTextGray raunded-md w-full border">
          <p className="sh2 leading-8 text-alertColor">+</p>
          <p className="sh5">Add Address</p>
        </button>
        {userAddressData.length >= 1 ? (
          userAddressData.map((data, index) => (
            <div
              className="p-2 bg-lightTextGray raunded-md w-full border py-4 flex flex-col gap-3"
              key={index}
            >
              <div className="flex flex-row gap-2">
                <input type="checkbox" className="w-4 rounded-full" />
                <div className="flex justify-between w-full">
                  <p>{data.title}</p>
                  <button>Edit</button>
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <div className="flex justify-between">
                  <p>
                    {data.name} {data.surname}
                  </p>
                  <p>
                    <i className="fa-solid fa-mobile"></i> {data.phone}
                  </p>
                </div>
                <p>
                  {data.adress} {data.neigborhood}
                </p>
                <p>
                  {data.city} / {data.district}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No registered address</p>
        )}
      </div>
    </div>
  );
}
