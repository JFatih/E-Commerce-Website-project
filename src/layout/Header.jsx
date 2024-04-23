import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="w-screen">
        <div className=" bg-color3 text-white ">
          <div className="max-w-[1200px] mx-auto px-10 py-2 flex sm:justify-between justify-center md:sh6 smobile-menu">
            <div className="md:flex gap-4 hidden">
              <span className="flex items-center gap-1">
                <i className="fa-solid fa-phone"></i> <p>(534) 243-1022</p>
              </span>
              <span className="flex items-center gap-1">
                <i className="fa-regular fa-envelope"></i>
                <p>cakmak.35f@gmail.com</p>
              </span>
            </div>
            <p>Follow Us and get a chance to win 80% off</p>
            <div className="sm:flex items-center gap-3 hidden">
              <p>Follow Us : </p>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </div>
        <section>
          <main className="max-w-[1200px] mx-auto flex justify-between items-center lg:px-10 lg:py-4 p-4 ">
            <div className="flex gap-[7vw]">
              <p className="lg:sh2 text-[20px] font-bold">Butik</p>
              <nav className="hidden lg:flex items-center sh6">
                <ul className="flex gap-5">
                  <li>
                    <Link to="/">Ana Sayfa</Link>
                  </li>
                  <li>
                    <Link to="/shop">
                      Shop <i className="fa-solid fa-angle-down"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex gap-3 items-center text-[1.2rem] smobile-menu">
              <i className="fa-solid fa-magnifying-glass"></i>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <Link to="/login" className="flex items-center gap-2">
                <i className="fa-regular fa-user"></i>
                <p className="text-[17px] hidden sm:flex">Login/Register</p>
              </Link>
              <button
                className="flex lg:hidden fa-solid fa-bars"
                onClick={toggleMenu}
              ></button>
            </div>
          </main>
          {menu ? (
            <nav className="lg:hidden ">
              <ul className="flex gap-x-[30px] gap-y-[px] lg:hidden flex-wrap m-1 justify-center smobile-menu">
                <li>
                  <Link to="/">Ana Sayfa</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          ) : (
            ""
          )}
        </section>
      </header>
    </>
  );
}
