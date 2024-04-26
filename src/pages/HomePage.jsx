import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";
import Container from "../layout/Container";
import Slider from "../layout/Slider";
import Slider2 from "../layout/Slider2";
import Blog from "./Blog";

export default function HomePage() {
  return (
    <>
      <Slider />
      <ShopCard />
      <ProductCard />
      <Slider2 />
      <Container />
      <Blog />
    </>
  );
}
