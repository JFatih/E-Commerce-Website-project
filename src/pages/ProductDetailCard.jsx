import { useState } from "react";
import ProductDetailSlider from "../components/ProductPageComponents/ProductDetailSlider";
import Description from "../components/ProductPageComponents/Description";
import AdditionalInfo from "../components/ProductPageComponents/AdditionalInfo";
import Reviews from "../components/ProductPageComponents/Reviews";
import ProductCard from "../components/ProductCard";
import PageNavigation from "../components/PageNavigation";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { setAddCart } from "../store/action/ShoppingCartAction";

export default function ProductDetailCard() {
  const [detail, setDetail] = useState("description");
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(productId);

  const productObject = useSelector((store) => store.Product.productList).find(
    (datas) => datas.id == productId
  );

  const cartData = useSelector((store) => store.ShoppingCart.cart);

  const handleAddtoCart = () => {
    let newData = { count: count, checked: true, product: productObject };
    dispatch;
  };

  console.log(productObject);
  return (
    <main className="w-screen ">
      <section className=" bg-lightTextGray ">
        <div className="py-5 mx-auto max-w-[1200px] px-8 sm:px-0 flex justify-start gap-5">
          <button onClick={() => history.goBack()}>
            <i className="sh5 fa-solid fa-arrow-left"></i>
          </button>
          <PageNavigation />
        </div>
        <div className="max-w-[1200px] mobileCardPadding mx-auto pb-8 flex flex-col justify-center sm:flex-row sm:justify-start sm:gap-5 2xl:px-0 ">
          <div>
            <ProductDetailSlider images={productObject.images} />
          </div>
          <div className="p-3 flex flex-col gap-5 sm:px-10 sm:py-10 sm:w-[550px]">
            <p className="sh4 text-textColor">{productObject.name}</p>
            <div className="text-[#F3CD03] flex flex-row gap-3 ">
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
              <p className="sh6 text-secondTextColor">10 Reviews</p>
            </div>
            <p className="sh3 text-textColor">${productObject.price}</p>
            <div className="sh6 text-secondTextColor flex flex-row gap-3">
              <p>Availability : </p>
              <p className="text-primaryColor">
                {productObject.stock > 0
                  ? `In Stock ${productObject.stock}`
                  : "Out of Stock"}
              </p>
            </div>
            <p className="sparagraph text-[#858585] ">
              {productObject.description}
            </p>
            <span className="border border-mutedTextColor"></span>
            <div className="flex flex-row gap-4 sh4 items-center my-2">
              <span>
                <button
                  className="bg-primaryColor px-3 py-1 rounded-l-lg text-white"
                  onClick={() => {
                    count > 1 ? setCount((prev) => prev - 1) : "";
                  }}
                >
                  -
                </button>
                <span className="px-3 py-[5.5px] border border-y-mutedTextColor ">
                  {count}
                </span>
                <button
                  className="bg-primaryColor px-3 py-1 rounded-r-lg text-white"
                  onClick={() => {
                    setCount((prev) => prev + 1);
                  }}
                >
                  +
                </button>
              </span>
              <span className="flex flex-row gap-1 ">
                <button className="rounded-full border-primaryColor border-[15px]"></button>
                <button className="rounded-full border-successColor border-[15px]"></button>
                <button className="rounded-full border-alertColor border-[15px]"></button>
                <button className="rounded-full border-darkBackgroundColor border-[15px]"></button>
              </span>
            </div>
            <div className="flex flex-row gap-3 my-2">
              <button
                onClick={handleAddtoCart}
                className="px-[18px] py-[10px] bg-primaryColor rounded-lg text-white sh4"
              >
                Add to Cart
              </button>
              <span className="flex flex-row gap-2 text-textColor">
                <button>
                  <i className="border rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="border rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center  fa-solid fa-cart-shopping"></i>
                </button>
                <button>
                  <i className="border rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center  fa-solid fa-eye"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] bg-white mobileCardPadding mx-auto py-3">
        <div className="sh6 text-secondTextColor flex flex-row gap-4 justify-center py-2">
          <button
            onClick={() => {
              setDetail("description");
            }}
            className={`${
              detail === "description" ? "text-black font-extrabold" : ""
            }`}
          >
            Description
          </button>
          <div className="border border-mutedTextColor"></div>
          <button
            onClick={() => {
              setDetail("addInfo");
            }}
            className={`${
              detail === "addInfo" ? "text-black font-extrabold" : ""
            }`}
          >
            Additional İnformation
          </button>
          <div className="border border-mutedTextColor"></div>
          <button
            onClick={() => {
              setDetail("reviews");
            }}
            className={`${
              detail === "reviews" ? "text-black font-extrabold" : ""
            }`}
          >
            Reviews
          </button>
        </div>
        {detail === "description" ? <Description /> : ""}
        {detail === "addInfo" ? <AdditionalInfo /> : ""}
        {detail === "reviews" ? <Reviews /> : ""}
      </section>
      <section className=" bg-lightTextGray py-3">
        <div className="max-w-[1100px] flex flex-col justify-center mx-auto">
          <p className="sh3 text-textColor text-center py-5 sm:text-start sm:px-2">
            BESTSELLER PRODUCTS
          </p>
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
