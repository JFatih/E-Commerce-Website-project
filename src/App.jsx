import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ProductDetailCard from "./pages/ProductDetailCard";
import Team from "./pages/TeamPage/Team";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/shop/:id2">
          <ProductDetailCard />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/team">
          <Team />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
