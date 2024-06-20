import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const cartData = useSelector((store) => store.ShoppingCart.cart);

  return (
    <div className="relative group">
      <i className="fa-solid fa-cart-shopping"></i>
      <div className="absolute hidden group-hover:block rounded-md border-t-0 z-10 p-2 sparagraph right-0 bg-white">
        <div className="flex flex-col gap-3">
          <p className="text-start">Sepetim: {cartData.length} ürün</p>
          {cartData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-row gap-3 justify-center items-center border border-color3 w-60"
              >
                <img src={data.product.images[0].url} className="w-14 " />
                <div className="flex flex-col gap-2">
                  <p>{data.product.name}</p>
                  <p>Count: {data.count}</p>
                  <p>Price: {data.product.price * data.count}</p>
                </div>
              </div>
            );
          })}
          <Link to="/cart">
            <button className="bg-color3 text-white rounded-md py-1 px-3 block">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
