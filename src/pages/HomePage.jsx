import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";
import Slider from "../layout/Slider";
import Slider2 from "../layout/Slider2";

export default function HomePage() {
  return (
    <>
      <Slider />
      <ShopCard />
      <ProductCard />
      <Slider2 />
    </>
  );
}
