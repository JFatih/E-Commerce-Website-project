import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import LoginRegister from "./pages/RegisterLogin/LoginRegister";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ProductDetailCard from "./pages/ProductDetailCard";
import Team from "./pages/TeamPage/Team";
import ContactUs from "./pages/ContactUs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/signup">
          <LoginRegister />
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
