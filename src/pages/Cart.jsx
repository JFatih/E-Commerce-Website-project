import { useDispatch, useSelector } from "react-redux";
import {
  setAddCart,
  setChecked,
  setRemoveCart,
} from "../store/action/ShoppingCartAction";

export default function Cart() {
  const cartData = useSelector((store) => store.ShoppingCart.cart);

  const dispatch = useDispatch();

  const inreaseCount = (data) => {
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

  return (
    <div className="mobileCardPadding flex flex-col gap-4 my-10 mx-auto max-w-screen-xl">
      <p className="sh3 text-center md:text-start">
        Sepetim: {cartData.length}
      </p>
      {cartData.map((data, index) => {
        return (
          <div key={index}>
            <div className="text-center">
              {data.count * data.product.price >= 300 ? (
                <p className="bg-successColor text-white p-1 rounded-t-md">
                  Free Shipping
                </p>
              ) : (
                <p className="bg-dangerTextColor text-white p-1 rounded-t-md">
                  Free Shipping Above 300 TL
                </p>
              )}
            </div>
            <div
              key={index}
              className="flex gap-2 items-start border p-2 rounded-b-md shadow-sm "
            >
              <div>
                <input
                  onChange={() => updateChecked(data)}
                  checked={data.checked}
                  id="checkbox-${data.product.id}"
                  type="checkbox"
                  value=""
                  className="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
              <img
                src={data.product.images[0].url}
                className="w-32  object-cover"
              />
              <div className="flex flex-col gap-2 justify-start w-30 md:flex-row md:items-center">
                <div className="md:w-2/6 mb-4 mt-1">
                  <p className="sh5">{data.product.name}</p>
                  <p className="hidden md:flex">{data.product.description}</p>
                </div>
                <div className="flex items-ceter gap-3 justify-start">
                  <div className="flex items-center">
                    <button
                      className="bg-color3 w-9 h-9  rounded-l-lg text-white"
                      onClick={() =>
                        data.count == 1 ? removeCart(data) : decreaseCount(data)
                      }
                    >
                      -
                    </button>
                    <span className="w-9 h-9 border text-center flex justify-center items-center">
                      {data.count}
                    </span>
                    <button
                      className="bg-color3 w-9 h-9 rounded-r-lg text-white"
                      onClick={() => inreaseCount(data)}
                    >
                      +
                    </button>
                    <div className="justify-start items-center gap-2 sh5 hidden md:flex md:mx-2">
                      <p>Price: </p>
                      <p>{(data.product.price * data.count).toFixed(2)}</p>
                    </div>
                  </div>
                  <button onClick={() => removeCart(data)}>
                    <i className="fa-solid fa-trash text-color3 text-[20px]"></i>
                  </button>
                </div>
                <div className="flex justify-start items-center gap-2 sh5 md:hidden mt-2">
                  <p>Price: </p>
                  <p>{(data.product.price * data.count).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {cartData.length > 0 && (
        <div className="flex gap-4 text-center ">
          <p className="sh4">Total price</p>
          <p className="sh4">
            {cartData
              .reduce(
                (acc, data) =>
                  data.checked ? acc + data.count * data.product.price : acc,
                0
              )
              .toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
