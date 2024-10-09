import { useSelector } from "react-redux";
import CartVerify from "../Cart/CartVerify";
import { useEffect, useState } from "react";
import AddressSection from "./AddressSection/AddressSection";
import PaymentSection from "./PaymentSection/PaymentSection";

import {
  fetchAddress,
  fetchCardData,
  instance,
} from "../../store/action/ClientReducerAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CcvModal from "./CcvModal";
import { resetCart } from "../../store/action/ShoppingCartAction";
import OrderStatus from "../Order/OrderStatus";

export default function PaymentPage() {
  const cartData = useSelector((store) => store.ShoppingCart);
  const userData = useSelector((store) => store.Client.user);
  const dispatch = useDispatch();
  const [section, setSection] = useState(true);

  useEffect(() => {
    if (userData?.token) {
      dispatch(fetchAddress(userData.token));
      dispatch(fetchCardData(userData.token));
    }
  }, [dispatch, userData.token]);

  let history = useHistory();

  const direction = () => {
    if (
      !cartData.address.shippingAddress ||
      cartData.address.shippingAddress.length === 0
    ) {
      toast("Please Select Address!!");
      return;
    } else if (
      !cartData.payment ||
      Object.keys(cartData.payment).length === 0
    ) {
      toast("Please Select Payment Card!!");
      return;
    }

    if (!cartData.payment.card_ccv) {
      document.getElementById("ccv_modal").showModal();
      return;
    }

    submitOrder();
  };

  const submitOrder = () => {
    if (cartData.payment.card_ccv) {
      const orderData = {
        address_id: cartData.address.shippingAddress.id,
        order_date: new Date().toISOString().slice(0, 19),
        card_no: cartData.payment.card_no,
        card_name: cartData.payment.name_on_card,
        card_expire_month: cartData.payment.expire_month,
        card_expire_year: cartData.payment.expire_year,
        card_ccv: cartData.payment.card_ccv,
        price: cartData.cart.reduce((tot, cur) => {
          if (cur.checked) {
            return tot + cur.count * cur.product.price;
          }
          return tot;
        }, 0),
        products: cartData.cart.map((item) => ({
          product_id: item.product.id,
          count: item.count,
          detail: item.product.description,
        })),
      };

      const makeOrder = async () => {
        try {
          const res = await instance.post("/order", orderData, {
            headers: { Authorization: userData.token },
          });
          history.push({
            pathname: `/order/status/${res.data.id}`,
            state: { orderResponse: res.data },
          });
          dispatch(resetCart());
        } catch (err) {
          toast("Order could not be placed: " + err);
        }
      };

      makeOrder();
    }
  };

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
      <CartVerify direction={direction} />
      <CcvModal orderPaymentData={cartData.payment} direction={direction} />
    </div>
  );
}
