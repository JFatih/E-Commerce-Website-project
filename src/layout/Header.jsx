import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="w-screen ">
        <div className=" bg-color3 text-white px-10 py-4 hidden lg:flex justify-between sh6">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-phone"></i> <p>(534) 243-1022</p>
            </span>
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-envelope"></i>
              <p>cakmak.35f@gmail.com</p>
            </span>
          </div>
          <p>Follow Us and get a chance to win 80% off</p>
          <div className="flex items-center gap-2">
            <p>Follow Us : </p>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </div>
        </div>
        <section>
          <main className="flex justify-between items-center px-10 py-4">
            <div className="flex gap-[7vw]">
              <p className="sh2">Filiz Butik</p>
              <nav className="hidden sm:flex items-center sh6">
                <ul className="flex gap-2">
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
            <div className="flex gap-2 items-center text-[1.2rem]">
              <i className="fa-solid fa-magnifying-glass"></i>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <Link to="/login">
                <i className="fa-regular fa-user"></i>
              </Link>
              <button
                className="flex sm:hidden fa-solid fa-bars"
                onClick={toggleMenu}
              ></button>
            </div>
          </main>
          {menu ? (
            <nav className="sm:hidden ">
              <ul className="flex gap-x-[30px] sm:hidden flex-wrap p-[10px] justify-center ">
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
