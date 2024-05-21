import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import PageNavigation from "../components/PageNavigation";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import {
  fetchProductList,
  setFilter,
  setOffset,
  setRemoveFilter,
} from "../store/action/ProductReducerAction";
import ReactPaginate from "react-paginate";

export default function Shop() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState("grid");
  let { gender, categoryName, categoryId } = useParams();
  const [selectedSort, setSelectedSort] = useState(null);
  const [inputFilter, setInputFilter] = useState(null);

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const handleFilterChange = (event) => {
    setInputFilter(event.target.value);
  };

  const handleFilterRemove = () => {
    setSelectedSort(null);
    setInputFilter(null);
    dispatch(setRemoveFilter());
  };

  const handleSortToRedux = () => {
    dispatch(setFilter(inputFilter, selectedSort));
  };

  useEffect(() => {
    dispatch(fetchProductList("/products"));
  }, []);

  const ReduxProduct = useSelector((store) => store.Product);

  useEffect(() => {
    console.log(ReduxProduct.sort);
    let url = "/products?category=" + categoryId;
    if (ReduxProduct.filter.inputFilter) {
      url += "&filter=" + ReduxProduct.filter.inputFilter;
    }
    if (ReduxProduct.filter.sortFilter) {
      url += "&sort=" + ReduxProduct.filter.sortFilter;
    }
    console.log(url);
    dispatch(fetchProductList(url));
  }, [
    categoryId,
    ReduxProduct.filter.inputFilter,
    ReduxProduct.filter.sortFilter,
  ]);

  const useCategoryData =
    ReduxProduct.categories &&
    ReduxProduct.categories
      .sort((a, b) => b.rating - a.rating)
      .filter(
        (data) =>
          data.gender.toLowerCase() ===
          (gender === "men" ? "e" : gender === "women" ? "k" : "")
      );

  const endOffset = ReduxProduct.offset + ReduxProduct.limit;
  console.log(`Loading items from ${ReduxProduct.offset} to ${endOffset}`);
  const currentItems =
    ReduxProduct.productList &&
    ReduxProduct.productList.slice(ReduxProduct.offset, endOffset);
  const pageCount =
    ReduxProduct.productList &&
    Math.ceil(ReduxProduct.productList.length / ReduxProduct.limit);
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * ReduxProduct.limit) % ReduxProduct.productList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    dispatch(setOffset(newOffset));
  };

  return (
    <main>
      <section className="bg-lightTextGray ">
        <div className="max-w-[1200px] mx-auto py-5">
          <div className="p-6 flex flex-col items-center text-textColor gap-10 sm:flex-row sm:justify-between">
            <p className=" sh3">Shop</p>
            <PageNavigation />
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {useCategoryData &&
              useCategoryData
                .filter((data) => {
                  if (categoryName) {
                    return data.title !== categoryName;
                  }
                  return true;
                })
                .slice(0, 5)
                .map((data) => {
                  return (
                    <Link
                      to={`/shop/${gender}/${data.title.toLowerCase().trim()}/${
                        data.id
                      }`}
                      key={data.title}
                    >
                      <div className="relative flex justify-center items-center text-center sh5 text-lightTextColor sm:p-2 mobileCardPadding py-3">
                        <img
                          src={data.img}
                          alt={data.title}
                          className=" w-[332px] h-[300px] md:w-[205px] md:h-[223px] object-cover object-top "
                        />
                        <div className="absolute z-50 text-white">
                          <p className="p-3">{data.title}</p>
                          <p className="p-3">{data.title} Items</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
          </div>
        </div>
      </section>
      <section className=" max-w-[1200px] mx-auto text-secondTextColor sh6 text-center">
        <div className="flex flex-col gap-6 py-6 items-center sm:flex-row sm:justify-between mx-auto">
          <p>Showing all {ReduxProduct.total} results</p>
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
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="flex flex-col gap-3 justify-center sm:flex-row">
              <input
                className="border border-[#DDDDDD] rounded-md bg-[#F9F9F9] p-2 text-sm font-normal leading-7 "
                placeholder="Color Filter like black"
                onChange={handleFilterChange}
                value={inputFilter}
              ></input>
              <div className="border border-[#DDDDDD] rounded-md bg-[#F9F9F9] p-2 text-sm font-normal leading-7">
                <select
                  className="bg-[#F9F9F9]"
                  value={selectedSort}
                  onChange={handleSortChange}
                >
                  <option value="rating:asc">Rating Ascending</option>
                  <option value="rating:desc">Rating Descending</option>
                  <option value="price:asc">Price Ascending</option>
                  <option value="price:desc">Price Descending</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                className="px-7 py-3 bg-primaryColor text-white rounded-md"
                onClick={handleSortToRedux}
              >
                Filter
              </button>
              <button
                className="px-7 py-3 bg-dangerTextColor text-white rounded-md"
                onClick={handleFilterRemove}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row flex-wrap items-center gap-8">
          {ReduxProduct.filter.inputFilter && (
            <button>
              {ReduxProduct.filter.inputFilter + " color filtered"}
            </button>
          )}
          {ReduxProduct.filter.inputFilter && (
            <button>{ReduxProduct.filter.sortFilter + " filtered"}</button>
          )}
        </div> */}
      </section>
      <section className="flex justify-center items-center">
        {ReduxProduct.fetchState === "FETCHING" && (
          <RotatingLines
            visible={true}
            height="150"
            width="150"
            color="black"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
        {ReduxProduct.fetchState === "FETCHED" && (
          <ProductCard productsList={currentItems} display={display} />
        )}
      </section>
      <section className="max-w-[1200px] mx-auto flex flex-row justify-center items-center py-8 px-10 sbtn-text">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          nextClassName="text-primaryColor"
          nextLinkClassName="border border-mutedTextColor sm:px-4 px-3 sm:py-5 py-4 rounded-r-lg"
          previousClassName="text-primaryColor"
          previousLinkClassName="border border-mutedTextColor sm:px-4 px-3 sm:py-5 py-4 rounded-l-lg "
          pageClassName="text-primaryColor"
          pageLinkClassName="flex items-center justify-center w-full h-full border border-mutedTextColor  s:w-[52px] w-[32px] sm:h-[58.4px] h-[50.4px]"
          activeClassName="bg-primaryColor text-white"
          disabledLinkClassName="bg-[#F3F3F3] text-mutedTextColor"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="flex flex-row justify-center items-center text-center shadow-md"
        />
      </section>
    </main>
  );
}
