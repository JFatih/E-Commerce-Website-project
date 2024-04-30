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

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/shop/id">
          <ProductDetailCard />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
