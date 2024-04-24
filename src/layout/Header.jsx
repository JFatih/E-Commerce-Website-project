import { useState } from "react";
import { Link } from "react-router-dom";
import { headerData } from "../mocks/headerdata";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="w-screen">
      <section className="bg-color3 text-white px-8 py-3">
        <div className="max-w-[1200px] m-auto sh6">
          <div className="flex sm:justify-between justify-center ">
            <div className="lg:flex gap-4 hidden">
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
      </section>
      <section className="bg-white text-textColor px-8 py-3">
        <main className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex gap-[7vw]">
            <p className="sh3">Boutique</p>
            <nav className="hidden lg:flex items-center sh6">
              <ul className="flex gap-5">
                {headerData.map((data, index) => {
                  return (
                    <li key={index}>
                      <Link to={data.link}>
                        {data.name}
                        {index === 1 ? (
                          <i className="fa-solid fa-angle-down"></i>
                        ) : (
                          ""
                        )}
                      </Link>
                    </li>
                  );
                })}
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
            <ul className="flex flex-col items-center m-1 justify-center sh6">
              {headerData.map((data, index) => {
                return (
                  <li key={index} className="py-2">
                    <Link to={data.link}>
                      {data.name}
                      {index === 1 ? (
                        <i className="fa-solid fa-angle-down"></i>
                      ) : (
                        ""
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : (
          ""
        )}
      </section>
    </header>
  );
}
