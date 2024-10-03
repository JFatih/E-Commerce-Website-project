import { useSelector } from "react-redux";
import CartVerify from "../Cart/CartVerify";
import { useEffect, useState } from "react";
import AddressSection from "./AddressSection/AddressSection";
import PaymentSection from "./PaymentSection/PaymentSection";
import {
  fetchAddress,
  fetchCardData,
} from "../../store/action/ClientReducerAction";
import { useDispatch } from "react-redux";

export default function PaymentPage() {
  const userData = useSelector((store) => store.Client.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData?.token) {
      dispatch(fetchAddress(userData.token));
      dispatch(fetchCardData(userData.token));
    }
  }, [dispatch, userData.token]);

  const [section, setSection] = useState(true);

  return (
    <div className="flex lg:flex-row flex-col gap-2 mobileCardPadding my-10 mx-auto max-w-screen-xl ">
      <div className="flex flex-col gap-5 lg:w-7/12">
        <div className="flex flex-col gap-4 lg:flex-row">
          <button
            className={`bg-color3 text-white rounded-md py-4 px-8 shadow-md flex-1 ${
              section ? "active-section" : ""
            }`}
            onClick={() => setSection(true)}
          >
            <p className="sh5 text-center">Address Information</p>
          </button>
          <button
            className={`bg-color3 text-white rounded-md py-4 px-8 shadow-md flex-1 ${
              !section ? "active-section" : ""
            }`}
            onClick={() => setSection(false)}
          >
            <p className="sh5 text-center">Payment Option</p>
          </button>
        </div>
        <div className="">
          {section ? <AddressSection /> : <PaymentSection />}
        </div>
      </div>
      <CartVerify />
    </div>
  );
}
