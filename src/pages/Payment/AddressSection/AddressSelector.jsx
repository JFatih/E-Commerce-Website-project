import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress } from "../../../store/action/ClientReducerAction";
import Modal from "./AddressModal";

export default function AddressSelector({
  selectedAddressData,
  dispatchAddress,
  setSelecetAddressData,
}) {
  const userAddressData = useSelector((store) => store.Client.user.addressList);
  const userToken = useSelector((store) => store.Client.user.token);
  const [modalAddress, setModalAddress] = useState(undefined);
  const dispatch = useDispatch();

  const deleteAddressHandle = (data) => {
    dispatch(deleteAddress(data, userToken));
  };

  const handleAddNewAddress = () => {
    setModalAddress(undefined);
    document.getElementById("address_modal").showModal();
  };

  const handleEditNewAddress = (data) => {
    setModalAddress(data);
    document.getElementById("address_modal").showModal();
  };

  const handleCheckboxSelect = (data) => {
    if (selectedAddressData === data) {
      setSelecetAddressData(undefined);
      dispatchAddress(undefined);
    } else {
      setSelecetAddressData(data);
      dispatchAddress(data);
    }
  };

  return (
    <div>
      <Modal addressData={modalAddress} />
      <button
        className={`${
          selectedAddressData ? "hidden" : "none"
        } py-2 px-5 bg-lightTextGray rounded-md w-full border`}
        onClick={handleAddNewAddress}
      >
        <p className="sh2 leading-8 text-alertColor">+</p>
        <p className="sh5">Add Address</p>
      </button>
      {selectedAddressData && Object.keys(selectedAddressData).length > 0 ? (
        <div
          key={selectedAddressData.id}
          onClick={() => handleCheckboxSelect(selectedAddressData)}
        >
          <div className="flex gap-2 p-2 justify-between cursor-pointer">
            <div className="flex gap-2">
              <input
                type="radio"
                className="w-4 rounded-full"
                checked={selectedAddressData === selectedAddressData}
                id={`radio-${selectedAddressData.id}`}
                onChange={() => handleCheckboxSelect(selectedAddressData)}
              />
              <label>{selectedAddressData.title}</label>
            </div>
            <div className="flex gap-3">
              <button onClick={() => handleEditNewAddress(selectedAddressData)}>
                Edit
              </button>
              <button
                className="pr-1"
                onClick={() => deleteAddressHandle(selectedAddressData)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <div className="bg-mutedTextColor p-2 bg-lightTextGray rounded-md w-full border py-4 flex flex-col gap-3">
            <div className="flex flex-col gap-1 justify-center">
              <div className="flex justify-between">
                <p>
                  {selectedAddressData.name} {selectedAddressData.surname}
                </p>
                <p className="sh6">
                  <i className="fa-solid fa-mobile"></i>{" "}
                  {"(" +
                    selectedAddressData?.phone?.slice(1, 4) +
                    ") *** ** " +
                    selectedAddressData?.phone?.slice(-2)}
                </p>
              </div>
              <p>
                {selectedAddressData.address} {selectedAddressData.neighborhood}
              </p>
              <p>
                {selectedAddressData.city} / {selectedAddressData.district}
              </p>
            </div>
          </div>
        </div>
      ) : (
        userAddressData.map((data, index) => (
          <div key={index} onClick={() => handleCheckboxSelect(data)}>
            <div className="flex gap-2 p-2 justify-between cursor-pointer">
              <div className="flex gap-2">
                <input
                  type="radio"
                  className="w-4 rounded-full"
                  checked={selectedAddressData === data}
                  id={`radio-${data.id}`}
                  onChange={() => handleCheckboxSelect(data)}
                />
                <label>{data.title}</label>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleEditNewAddress(data)}>Edit</button>
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
                selectedAddressData === data ? "bg-mutedTextColor" : ""
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
        ))
      )}
    </div>
  );
}
