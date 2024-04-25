import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ProductCard from "./ProductCard";

export default function ShopCard() {
  return (
    <>
      <section className="w-max-[1200px] flex flex-col">
        <div className="flex flex-col justify-center items-center mobileTextPadding text-center gap-5">
          <p className="sh3">Categories</p>
          <p>Problem trying to resolve the conflict between</p>
        </div>
        <div className="max-w-[1200px] mx-auto flex sm:flex-col flex-wrap sm:h-[580px] static justify-center items-center">
          <div className="relative px-8 py-4 sm:px-4">
            <img
              src="/men.png"
              className="sm:aspect-w-1 sm:aspect-h-1 sm:object-cover sm:w-[500px] sm:h-[500px]"
            />
            <Link to="/men">
              <button className="absolute bg-white px-8 py-1 min-w-32 sh5 left-16 bottom-10">
                MEN
              </button>
            </Link>
          </div>
          <div className="relative px-8 py-4 sm:px-4">
            <img
              src="/women.png"
              className="sm:aspect-h-1 sm:object-cover sm:w-[240px] sm:h-[500px]"
            />
            <Link to="/women">
              <button className="absolute bg-white px-8 py-1 min-w-32 sh5 left-16 bottom-10">
                WOMEN
              </button>
            </Link>
          </div>
          <div className="relative px-8 py-4 sm:px-4">
            <img
              src="/accessories.png"
              className="sm:aspect-h-1 sm:object-cover sm:w-[240px] sm:h-[234px]"
            />
            <Link to="/accessories">
              <button className="absolute bg-white px-8 py-1 min-w-32 sh5 left-16 top-48">
                ACCESSORIES
              </button>
            </Link>
          </div>
          <div className="relative px-8 py-4 sm:px-4">
            <img
              src="/kids.png"
              className="sm:aspect-h-1 sm:object-cover sm:w-[240px] sm:h-[234px]"
            />
            <Link to="/kids">
              <button className="absolute bg-white px-8 py-1 min-w-32 sh5 left-16 top-48">
                KIDS
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
