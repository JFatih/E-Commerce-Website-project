import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentModal from "./PaymentModal";
import { deleteCardData } from "../../../store/action/ClientReducerAction";
import { setAddPayment } from "../../../store/action/ShoppingCartAction";

export default function PaymentSelector() {
  const userCardData = useSelector((store) => store.Client.user.creditCards);
  const cartCardData = useSelector((store) => store.ShoppingCart.payment);
  useEffect(() => {
    if (cartCardData) {
      setSelectCardId(cartCardData.id);
    }
  }, []);
  const userToken = useSelector((store) => store.Client.user.token);
  const [selectCard, setSelectCard] = useState(undefined);
  const [selectCardId, setSelectCardId] = useState(undefined);
  const dispatch = useDispatch();

  const deleteCardHandle = (data) => {
    dispatch(deleteCardData(data, userToken));
  };

  const handleAddNewCard = () => {
    setSelectCard(undefined);
    document.getElementById("payment_modal").showModal();
  };

  const handleEditCard = (data) => {
    setSelectCard(data);
    document.getElementById("payment_modal").showModal();
  };

  const handleCheckboxSelect = (data) => {
    if (selectCardId !== undefined && selectCardId === data.id) {
      setSelectCardId(undefined);
      dispatch(setAddPayment(undefined));
    } else {
      setSelectCardId(data.id);
      dispatch(setAddPayment(data));
    }
  };

  return (
    <div>
      <PaymentModal paymentData={selectCard} />
      {userCardData.length >= 0 ? (
        <div>
          <button
            className={`${
              selectCardId ? "hidden" : "none"
            } py-2 px-5 bg-lightTextGray rounded-md w-full border`}
            onClick={handleAddNewCard}
          >
            <p className="sh2 leading-8 text-alertColor">+</p>
            <p className="sh5">Add Payment</p>
          </button>
          {userCardData.map((data, index) => (
            <div
              key={index}
              onClick={() => handleCheckboxSelect(data)}
              className={`${
                selectCardId == undefined
                  ? "none"
                  : selectCardId == data.id
                  ? "none"
                  : "hidden"
              }`}
            >
              <div className="flex gap-2 p-2 justify-between cursor-pointer">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    className="w-4 rounded-full"
                    checked={selectCardId === data.id}
                    id={`radio-${data.id}`}
                    onChange={() => handleCheckboxSelect(data)}
                  />
                </div>
                <div className="flex gap-3">
                  <button onClick={() => handleEditCard(data)}>Edit</button>
                  <button
                    className="pr-1"
                    onClick={() => deleteCardHandle(data)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
              <div
                className={`${
                  selectCardId === data.id ? "bg-mutedTextColor" : ""
                } p-2 bg-lightTextGray rounded-md w-full border py-4 flex flex-col gap-3`}
              >
                <div className="flex justify-end ">
                  <div className="flex flex-col items-end sh6 w-full gap-5">
                    <p className="sh5 pr-4 mb-6">
                      {data["card_no"].slice(0, 4) +
                        " " +
                        data["card_no"].slice(4, 6) +
                        "** **** " +
                        data["card_no"].slice(-4)}
                    </p>
                    <div className="flex justify-between w-full sh5">
                      <p className="text-left pl-4">{data["name_on_card"]}</p>
                      <p className="text-right pr-4">
                        {data.expire_month}/{data.expire_year}
                      </p>
                    </div>
                  </div>
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
