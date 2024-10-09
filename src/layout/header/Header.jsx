import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import { HeaderTestimotional } from "./HeaderTestimotional";
import { HeaderPageNavigation } from "./HeaderPageNavigation";
import CartIcon from "./CartIcon";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const userEmail = useSelector((store) => store.Client.user);
  useEffect(() => {
    if (userEmail.email) {
      const hashedEmail = CryptoJS.SHA256(userEmail);
      const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}`;
      document.getElementById("gravatar-image").src = gravatarUrl;
    }
  }, [userEmail]);

  return (
    <header className="">
      <HeaderTestimotional />
      <section className="bg-white text-textColor px-8 py-3">
        <main className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex gap-[7vw] items-center">
            <Link to="/">
              <p className="sh3">Boutique</p>
            </Link>
            <div className="hidden lg:block">
              <HeaderPageNavigation />
            </div>
          </div>
          <div className="flex gap-3 items-center text-[1.2rem] smobile-menu">
            <i className="fa-solid fa-magnifying-glass"></i>
            <Link to="/cart">
              <CartIcon />
            </Link>
            {userEmail.email ? (
              <div className="flex flex-row gap-1">
                <div className="relative inline-block group">
                  <Link to="/" className="flex items-center gap-2">
                    <div className="flex flex-row gap-2 items-center text-[17px] ">
                      <img
                        id="gravatar-image"
                        alt="Gravatar"
                        className="rounded-full w-6 h-6"
                      />
                      <p className="hidden lg:block">{userEmail.name}</p>
                    </div>
                  </Link>
                  <div className="hidden none absolute min-w-[100px] z-10 group-hover:block bg-white shadow-lg rounded-md">
                    <Link
                      to="/orders"
                      className="block px-2  hover:bg-gray-100 text-[17px] text-textColor rounded-md"
                    >
                      <p>Orders</p>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden lg:flex flex-row gap-1 sh6 py-3">
                <Link to="/signup" className="flex items-center gap-2">
                  <p>Register</p>
                </Link>
                <p className=" sm:block">/</p>
                <Link to="/signin" className="flex items-center gap-2">
                  <p>Login</p>
                </Link>
              </div>
            )}
            <button
              className="flex lg:hidden fa-solid fa-bars"
              onClick={toggleMenu}
            ></button>
          </div>
        </main>
        {menu && (
          <div className="lg:hidden flex flex-col items-center">
            <div className="block lg:hidden">
              {userEmail.email ? null : (
                <div className="flex flex-row gap-1 sh6 py-3">
                  <Link to="/signup" className="flex items-center gap-2">
                    <p>Register</p>
                  </Link>
                  <p className=" sm:block">/</p>
                  <Link to="/signin" className="flex items-center gap-2">
                    <p>Login</p>
                  </Link>
                </div>
              )}
              <HeaderPageNavigation />
            </div>
          </div>
        )}
      </section>
    </header>
  );
}
