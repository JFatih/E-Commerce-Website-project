import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/header/Header";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ProductDetailCard from "./pages/ProductDetailCard";
import Team from "./pages/TeamPage/Team";
import ContactUs from "./pages/ContactUs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoginRegister from "./pages/RegisterLogin/LoginRegister";
import SignIn from "./pages/RegisterLogin/SignIn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserWToken } from "./store/action/ClientReducerAction";
import {
  fetchProductList,
  setCategories,
} from "./store/action/ProductReducerAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUserWToken(token));
    }
    dispatch(setCategories(dispatch));
  }, []);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/shop/:gender/:categoryName/:categoryId/:id">
          <ProductDetailCard />
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId">
          <Shop />
        </Route>
        <Route path="/shop/:gender">
          <Shop />
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
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/signup">
          <LoginRegister />
        </Route>
        <Route path="/signin">
          <SignIn />
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
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
