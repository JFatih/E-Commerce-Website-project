import { useSelector } from "react-redux";
import CartVerify from "../Cart/CartVerify";
import { useEffect, useState } from "react";
import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";
import {
  fetchAddress,
  fetchCardData,
} from "../../store/action/ClientReducerAction";
import { useDispatch } from "react-redux";

export default function Payment() {
  const userData = useSelector((store) => store.Client.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAddress(userData.token));
    dispatch(fetchCardData(userData.token));
  }, []);

  console.log(userData);
  const [addSection, setAddSection] = useState(true);
  const [paySection, setPaySection] = useState(false);

  return (
    <div className="flex md:flex-row flex-col gap-2 mobileCardPadding my-10 mx-auto max-w-screen-xl">
      <div className="flex flex-col md:flex-row mx-auto gap-5">
        <button
          className="bg-color3 text-white rounded-md py-10 px-16 shadow-md"
          onClick={() => {
            setAddSection(!addSection), setPaySection(false);
          }}
        >
          <p className="sh5">Address Information</p>
        </button>
        {addSection ? <AddressSection /> : ""}
        <button
          className=" bg-color3 text-white rounded-md py-10 px-16 shadow-md"
          onClick={() => {
            setPaySection(!paySection), setAddSection(false);
          }}
        >
          <p className="sh5">Payment Option</p>
        </button>
        {paySection ? <PaymentSection /> : ""}
      </div>
      <CartVerify />
    </div>
  );
}
