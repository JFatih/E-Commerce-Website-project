import { Link } from "react-router-dom";
import { PageCount, SubCategory } from "../mocks/ShopCardData";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import ProductCard2 from "../components/ProductCard2";
import PageNavigation from "../components/PageNavigation";

export default function Shop() {
  const [display, setDisplay] = useState("grid"); /* list */
  const [page, setPage] = useState(0);

  return (
    <section>
      <div className="bg-lightTextGray ">
        <div className="max-w-[1200px] mx-auto py-5">
          <div className="p-6 flex flex-col items-center text-textColor gap-10 sm:flex-row sm:justify-between">
            <p className=" sh3">Shop</p>
            <PageNavigation />
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {SubCategory.map((data, index) => {
              return (
                <Link to={data.link} key={index}>
                  <div className="relative flex justify-center items-center text-center sh5 text-lightTextColor sm:p-2 mobileCardPadding py-3">
                    <img
                      src={data.image}
                      alt={data.name}
                      className=" w-[332px] h-[300px] md:w-[205px] md:h-[223px] object-cover object-top "
                    />
                    <div className="absolute z-50 text-white">
                      <p className="p-3">{data.name}</p>
                      <p className="p-3">{data.items} Items</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" max-w-[1200px] mx-auto text-secondTextColor sh6 text-center flex flex-col gap-6 py-6 items-center sm:flex-row sm:justify-between">
        <p>Showing all 12 results</p>
        <div className="flex flex-row gap-2 justify-center items-center">
          <p>Views:</p>
          <button onClick={() => setDisplay("grid")}>
            <i
              className={`text-xl border px-2 py-1  rounded-md border-lightGray2 fa-solid fa-border-all ${
                display === "grid"
                  ? "bg-textColor text-white"
                  : "bg-white text-textColor"
              }`}
            ></i>
          </button>
          <button onClick={() => setDisplay("list")}>
            <i
              className={`text-xl border px-2 py-1 border-lightGray2 rounded-md text-textColor fa-solid fa-list ${
                display === "list"
                  ? "bg-textColor text-white"
                  : "bg-white text-textColor"
              }`}
            ></i>
          </button>
        </div>
        <div className="flex flex-row gap-3 justify-center">
          <div className="border border-[#DDDDDD] rounded-md bg-[#F9F9F9] p-2 text-sm font-normal leading-7">
            <select className="bg-[#F9F9F9] ">
              <option value="fruit">Popularity</option>
              <option value="vegetable">Ascending</option>
              <option value="meat">Descending</option>
            </select>
          </div>
          <button className="px-7 py-3 bg-primaryColor text-white rounded-md">
            Filter
          </button>
        </div>
      </div>
      {display === "grid" ? <ProductCard /> : <ProductCard2 />}
      <div className="max-w-[1200px] mx-auto flex flex-row justify-center items-center py-8 sbtn-text">
        <button
          className={`border border-mutedTextColor p-5 rounded-l-lg  shadow-md   ${
            page === 0
              ? "bg-[#f3f3f3] text-[#bdbdbd]"
              : "bg-white text-primaryColor hover:bg-primaryColor hover:text-white"
          }`}
          onClick={() => setPage(0)}
        >
          First
        </button>
        {(page === 0 || page === 1
          ? [1, 2, 3]
          : [page - 1, page, page + 1]
        ).map((data) => {
          return (
            <button
              className={`border border-mutedTextColor py-5 w-11 text-primaryColor shadow-md hover:text-white hover:bg-primaryColor ${
                page === data
                  ? "bg-primaryColor text-white"
                  : "bg-white text-primaryColor hover:bg-primaryColor hover:text-white"
              }`}
              key={data}
              value={data}
              onClick={() => setPage(data)}
            >
              {data}
            </button>
          );
        })}
        <button
          className="border border-mutedTextColor p-5 rounded-r-lg text-primaryColor shadow-md hover:text-white hover:bg-primaryColor"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
}
