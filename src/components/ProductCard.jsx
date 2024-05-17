import { Link } from "react-router-dom";
import { ProductCartColors } from "../mocks/ProductCardData";
import { useSelector } from "react-redux";

export default function ProductCard({ productsList, display }) {
  return (
    <div className="max-w-[1200px] flex flex-row flex-wrap gap-5 justify-start mx-auto  mobileCardPaddin">
      {productsList &&
        productsList.map((data) => {
          return display === "grid" ? (
            <div className="mx-auto bg-white w-[238px]" key={data.id}>
              <Link to="/Shop/:id">
                <img
                  src={data.images.map((datas) => {
                    return datas.url;
                  })}
                  className="sm:w-60 sm:h-[427px]  sm:object-cover"
                />
                <div className="text-center p-5 flex flex-col gap-2">
                  <h1 className="sh5 text-textColor">{data.name}</h1>
                  <p className="slink text-secondTextColor">
                    {data.description}
                  </p>
                  <span className="flex justify-center gap-2">
                    <p className="sh5 text-mutedTextColor">${data.price}</p>
                    <p className="sh5 text-secondaryColor">${data.price}</p>
                  </span>
                  <div className="flex justify-center gap-1">
                    {ProductCartColors.map((color) => {
                      return (
                        <div
                          className={`w-4 h-4 ${`bg-` + color} rounded-full`}
                          key={color}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <div
              className="mx-auto flex justify-center items-center w-[350px] sm:w-[500px]"
              key={data.id}
            >
              <img
                src={data.images.map((datas) => {
                  return datas.url;
                })}
                className="sm:w-60 sm:h-[427px] w-48  sm:object-cover"
              />
              <div className="text-center p-5 flex flex-col gap-2">
                <h1 className="sh5 text-textColor">{data.name}</h1>
                <p className="slink text-secondTextColor">{data.description}</p>
                <span className="flex justify-center gap-2">
                  <p className="sh5 text-mutedTextColor">${data.price}</p>
                  <p className="sh5 text-secondaryColor">${data.price}</p>
                </span>
                <div className="flex justify-center gap-1">
                  {ProductCartColors.map((color) => {
                    return (
                      <div
                        className={`w-4 h-4 ${`bg-` + color} rounded-full`}
                        key={color}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
