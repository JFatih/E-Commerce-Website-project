import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { headerData } from "../../mocks/headerdata";
import { useSelector } from "react-redux";

export const HeaderPageNavigation = () => {
  const categories = useSelector((store) => store.Product.categories);
  return (
    <nav>
      <ul className="flex gap-5 lg:flex-row flex-col items-center justify-center sh6">
        {headerData.map((data, index) => {
          if (data.name !== "Shop") {
            return (
              <Link to={data.link} key={index}>
                {data.name}
              </Link>
            );
          } else if (data.name === "Shop") {
            return (
              <li key={index} className="group relative dropdown">
                <div className="flex gap-1 items-center">
                  Shop<i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="group-hover:block dropdown-menu absolute hidden z-50">
                  <div className="flex flex-row ">
                    <div>
                      <ul className="top-0 w-auto bg-white  px-3 py-3 flex flex-col gap-3 sh6 ">
                        <li className="py-1 relative group">
                          <Link to="/shop/men">
                            <a className="block text-secondColor font-bold cursor-pointer ">
                              Men
                            </a>
                          </Link>
                        </li>
                        {categories &&
                          categories
                            .filter((data) => data.gender === "e")
                            .map((data, index) => {
                              return (
                                <Link
                                  to={`/shop/men/${data.title
                                    .toLowerCase()
                                    .trim()}/${data.id}`}
                                  key={index}
                                >
                                  {" "}
                                  <li className="py-1 relative group">
                                    <a className="block text-secondColor hover:font-bold cursor-pointer">
                                      {data.title}
                                    </a>
                                  </li>
                                </Link>
                              );
                            })}
                      </ul>
                    </div>
                    <div>
                      <ul className="top-0 w-auto bg-white px-3 py-3 flex flex-col gap-3 sh6">
                        <li className="py-1 relative group">
                          <Link to="/shop/women">
                            <a className="block text-secondColor font-bold cursor-pointer">
                              Women
                            </a>
                          </Link>
                        </li>
                        {categories &&
                          categories
                            .filter((data) => data.gender === "k")
                            .map((data, index) => {
                              return (
                                <Link
                                  to={`/shop/women/${data.title
                                    .toLowerCase()
                                    .trim()}/${data.id}`}
                                  key={index}
                                >
                                  {" "}
                                  <li className="py-1 relative group">
                                    <a className="block text-secondColor hover:font-bold cursor-pointer">
                                      {data.title}
                                    </a>
                                  </li>
                                </Link>
                              );
                            })}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};
