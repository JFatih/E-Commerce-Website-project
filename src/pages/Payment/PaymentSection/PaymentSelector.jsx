import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress } from "../../../store/action/ClientReducerAction";
import Modal from "../Modal";

export default function PaymentSelector() {
  const userAddressData = useSelector((store) => store.Client.user.addressList);
  const userToken = useSelector((store) => store.Client.user.token);
  const [selectAddress, setSelectAddress] = useState(null);
  const [selectAddressId, setSelectAddressId] = useState(null);
  const dispatch = useDispatch();

  const deleteAddressHandle = (data) => {
    dispatch(deleteAddress(data, userToken));
  };

  const handleAddNewAddress = () => {
    setSelectAddress(null);
    document.getElementById("address_modal").showModal();
  };

  const handleEditNewAddress = (data) => {
    setSelectAddress(data);
    document.getElementById("address_modal").showModal();
  };

  const handleCheckboxSelect = (data) => {
    if (selectAddressId == data.id) {
      setSelectAddressId(null);
      setter(null);
    } else {
      setSelectAddressId(data.id);
      setter(data.id);
    }
  };
  return (
    <div>
      <Modal addressData={selectAddress} />
      {userAddressData.length >= 0 ? (
        <div>
          <button
            className="py-2 px-5 bg-lightTextGray rounded-md w-full border"
            onClick={handleAddNewAddress}
          >
            <p className="sh2 leading-8 text-alertColor">+</p>
            <p className="sh5">Add Address</p>
          </button>
          {userAddressData.map((data, index) => (
            <div
              key={index}
              onClick={() => handleCheckboxSelect(data)}
              className={`${
                selectAddressId == null
                  ? "none"
                  : selectAddressId == data.id
                  ? "none"
                  : "hidden"
              }`}
            >
              <div className="flex gap-2 p-2 justify-between cursor-pointer">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    className="w-4 rounded-full"
                    checked={selectAddressId === data.id}
                    id={`radio-${data.id}`}
                    onChange={() => handleCheckboxSelect(data)}
                  />
                  <label>{data.title}</label>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => handleEditNewAddress(data)}>
                    Edit
                  </button>
                  <button
                    className="pr-1"
                    onClick={() => deleteAddressHandle(data)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
              <div
                className={`${
                  selectAddressId === data.id ? "bg-mutedTextColor" : ""
                } p-2 bg-lightTextGray rounded-md w-full border py-4 flex flex-col gap-3`}
              >
                <div className="flex flex-col gap-1 justify-center">
                  <div className="flex justify-between">
                    <p>
                      {data.name} {data.surname}
                    </p>
                    <p className="sh6">
                      <i className="fa-solid fa-mobile"></i>{" "}
                      {"(" +
                        data.phone.slice(1, 4) +
                        ") *** ** " +
                        data.phone.slice(-2)}
                    </p>
                  </div>
                  <p>
                    {data.address} {data.neighborhood}
                  </p>
                  <p>
                    {data.city} / {data.district}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center p-2">Not Have Address</p>
      )}
    </div>
  );
}
