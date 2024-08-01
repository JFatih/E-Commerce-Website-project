import { useDispatch, useSelector } from "react-redux";
import { setAddCart, setRemoveCart } from "../store/action/ShoppingCartAction";

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

  return (
    <div className="mobileCardPadding flex flex-col gap-2">
      <p className="sh5 py-4">Sepetim ({cartData.length} Ürün)</p>
      {cartData.map((data, index) => {
        return (
          <div key={index} className="flex flex-row items-start gap-3">
            <img
              src={data.product.images[0].url}
              className="w-32  object-cover"
            />
            <div className="flex flex-col gap-2 justify-start items-start">
              <p>{data.product.name}</p>
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
              </div>
              <p>{data.product.price}</p>
              <button onClick={() => removeCart(data)}>
                <i className="fa-solid fa-trash text-color3 text-slist"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
