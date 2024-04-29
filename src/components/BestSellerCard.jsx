import { ProductCartData } from "../mocks/ProductCardData";
import ProductCard from "./ProductCard";

export default function BestSellerCard() {
  return (
    <section className="max-w-[1200px] mx-auto py-5">
      <div className="mobileTextPadding text-center flex flex-col gap-3">
        <p className="sh4 text-secondTextColor">Featured Products</p>
        <p className="sh3 text-textColor">BESTSELLER PRODUCTS</p>
        <p className="sparagraph text-secondTextColor">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <ProductCard />
    </section>
  );
}
