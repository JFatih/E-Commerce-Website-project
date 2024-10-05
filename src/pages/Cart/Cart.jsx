import { useDispatch, useSelector } from "react-redux";
import {
  setAddCart,
  setChecked,
  setRemoveCart,
} from "../../store/action/ShoppingCartAction";
import CartVerify from "./CartVerify";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Cart() {
  const cartData = useSelector((store) => store.ShoppingCart.cart);
  const [groupBySeller, setGroupBySeller] = useState({});
  const dispatch = useDispatch();
  let history = useHistory();
  const direction = () => {
    if (!cartData) {
      toast("Add the product you want to buy to your cart");
    } else {
      history.push("/cart/payment");
    }
  };

  const increaseCount = (data) => {
    dispatch(
      setAddCart({ checked: data.checked, count: 1, product: data.product })
    );
  };

  const decreaseCount = (data) => {
    dispatch(
      setAddCart({ checked: data.checked, count: -1, product: data.product })
    );
  };

  const removeCart = (data) => {
    dispatch(setRemoveCart(data.product.id));
  };

  const updateChecked = (data) => {
    dispatch(setChecked(data.product.id));
  };

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

  return (
    <div className="mobileCardPadding my-10 mx-auto max-w-screen-xl lg:flex lg:gap-5 relative">
      <div className="flex flex-col gap-4 md w-full">
        <p className="sh3 text-center md:text-start">
          Sepetim: {cartData.length}
        </p>
        {Object.keys(groupBySeller).map((sellerId, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p>Seller Id: {sellerId}</p>
            {groupBySeller[sellerId].reduce((sum, data) => {
              if (data.checked) {
                sum += data.product.price * data.count;
              }
              return sum;
            }, 0) >= 300 ? (
              <p className="bg-successColor text-white p-1 rounded-t-md">
                Free Shipping
              </p>
            ) : (
              <p className="bg-dangerTextColor text-white p-1 rounded-t-md">
                Free Shipping Above 300 TL
              </p>
            )}
            {groupBySeller[sellerId].map((data, index) => (
              <div
                key={index}
                className="flex gap-2 border p-2 rounded-b-md shadow-sm"
              >
                <div>
                  <input
                    onChange={() => updateChecked(data)}
                    checked={data.checked}
                    id={`checkbox-${data.product.id}`}
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <img
                  src={data.product.images[0].url}
                  className="w-32 object-cover"
                />
                <div className="flex flex-col w-full justify-center items-center md:flex-row md:justify-between md:items-center">
                  <div className="flex flex-col w-full md:w-3/6 mb-4 mt-1">
                    <p className="sh5 md:text-start text-center">
                      {data.product.name}
                    </p>
                    <p className="hidden md:flex">{data.product.description}</p>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <div className="flex items-center mb-2 md:mb-0">
                      <button
                        className="bg-color3 w-9 h-9 rounded-l-lg text-white"
                        onClick={() =>
                          data.count === 1
                            ? removeCart(data)
                            : decreaseCount(data)
                        }
                      >
                        -
                      </button>
                      <span className="w-9 h-9 border text-center flex justify-center items-center">
                        {data.count}
                      </span>
                      <button
                        className="bg-color3 w-9 h-9 rounded-r-lg text-white"
                        onClick={() => increaseCount(data)}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                      <div className="flex gap-1">
                        <p className="sh5 hidden md:flex">Price: </p>
                        <p className="sh5">
                          {(data.product.price * data.count).toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeCart(data)}
                        className="text-color3 px-2"
                      >
                        <i className="fa-solid fa-trash text-[20px]"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <CartVerify direction={direction} />
    </div>
  );
}
