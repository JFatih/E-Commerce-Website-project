import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function CartVerify({ direction }) {
  const cartData = useSelector((store) => store.ShoppingCart.cart);
  const [groupBySeller, setGroupBySeller] = useState({});

  const [totalShipDiscount, setTotalShipDiscount] = useState(0);
  const [totalShipCost, setTotalShipCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [discount, setDiscount] = useState("");
  const [discountRate, setDiscountRate] = useState(1);

  useEffect(() => {
    const grouped = cartData.reduce((result, data) => {
      if (!result[data.product.store_id]) {
        result[data.product.store_id] = [];
      }
      result[data.product.store_id].push(data);
      return result;
    }, {});

    setGroupBySeller(grouped);
  }, [cartData]);

  useEffect(() => {
    let shipDiscount = 0;
    let shipFee = 0;
    let cost = 0;

    Object.keys(groupBySeller).forEach((sellerId) => {
      const totalByseller = groupBySeller[sellerId].reduce((sum, data) => {
        if (data.checked) {
          sum += data.product.price * data.count;
        }
        return sum;
      }, 0);

      cost += totalByseller;
      shipFee += 29.99;
      if (totalByseller >= 300) {
        shipDiscount += 29.99;
      }
    });
    setTotalShipCost(shipFee);
    setTotalShipDiscount(shipDiscount);
    setTotalCost(cost);
  }, [groupBySeller]);

  const changeDiscountCode = (event) => {
    setDiscount(event.target.value.toUpperCase());
  };

  const applyDiscountCode = () => {
    if (discount == "WELCOME10") {
      setDiscountRate(0.9);
      setIsVisible(!isVisible);
      setDiscount("");
    } else {
      toast(discount + " not a valid code!!");
      setDiscount("");
      setDiscountRate(1);
      setIsVisible(!isVisible);
    }
  };

  const totalAmount =
    totalCost * discountRate + totalShipCost - totalShipDiscount;

  return (
    <div className="sh5 font-normal flex flex-col gap-3 sm:w-[450px] mx-auto  md:mt-20 md:mb-10 md:sticky md:top-20 md:self-start">
      <div className="border rounded-md	 mt-5 p-2 flex flex-col gap-4">
        <p className="sh3 py-3">Order Summary</p>
        <div className="flex justify-between">
          <p>Total Cost </p>
          <p>{totalCost.toFixed(2)} $</p>
        </div>
        <div className="flex justify-between">
          <p>Total Ship Cost</p>
          <p>{totalShipCost.toFixed(2)} $</p>
        </div>
        <div className="flex justify-between">
          <p>Free shipping above 300$ </p>
          <p>{-totalShipDiscount.toFixed(2)} $</p>
        </div>
        {discountRate == 1 ? (
          ""
        ) : (
          <div className="flex justify-between">
            <p>
              Discount Code{" "}
              <button
                className="text-dangerTextColor align-top text-xs font-bold"
                onClick={() => {
                  setDiscountRate(1), setDiscount(""), setIsVisible(false);
                }}
              >
                remove
              </button>
            </p>
            <p>-{(totalCost * (1 - discountRate)).toFixed(2)} $</p>
          </div>
        )}
        <span className="border-b-4"></span>
        <div className="flex justify-between sh5 pb-2">
          <p>Total</p>
          <p>{totalAmount.toFixed(2)} $</p>
        </div>
      </div>
      <div className="flex flex-col items-center font-semibold border rounded-md p-2">
        <div className="flex justify-center text-center">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className={`cursor-pointer ${!isVisible ? "" : "hidden"}`}
          >
            {discountRate !== 1 ? "Discount Applied" : "Enter Discount Code"}
          </button>
        </div>
        <div
          className={`text-center flex justify-around sh5 ${
            isVisible ? "" : "hidden"
          }`}
        >
          <input
            type="text"
            placeholder="Enter Code"
            value={discount}
            onChange={changeDiscountCode}
            className="w-3/6 mx-1 text-center"
          />
          <button onClick={applyDiscountCode}>Apply</button>
        </div>
      </div>

      <button
        className="bg-color3 text-white rounded-md sh4 py-2 w-full"
        disabled={!totalCost > 0}
        onClick={direction}
      >
        Confirm Cart
      </button>
    </div>
  );
}
