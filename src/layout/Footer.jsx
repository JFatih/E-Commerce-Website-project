import { Link } from "react-router-dom";
import { footerData } from "../mocks/footerData";

export default function Footer() {
  return (
    <footer className="max-w-screen">
      <section className=" bg-lightgray1 p-8">
        <div className="max-w-[1200px] flex flex-col gap-2  sm:flex-row sm:items-center sm:justify-between sm:m-auto">
          <p className="sh3 text-textColor ">Butik</p>
          <span className="text-primaryColor flex gap-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </span>
        </div>
      </section>
      <section className=" bg-white p-8">
        <div className="max-w-[1200px] m-auto md:flex md:justify-between">
          {Object.values(footerData).map((base, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <p className="sh5 text-textColor py-4" key={index}>
                  {base.title}
                </p>
                <span>
                  {Object.values(base.pages).map((page, index) => {
                    return (
                      <Link to={page.link} key={index}>
                        <p className="sh6 text-seconTextColor py-1 md:py-2">
                          {page.title}
                        </p>
                      </Link>
                    );
                  })}
                </span>
              </div>
            );
          })}
          <div className="">
            <p className="sh5 py-4">Get In Touch</p>
            <form className="subscribe">
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Your e-mail"
                  className="w-[189px] h-[58px] text-start p-5 bg-[#E6E6E6] rounded-l-lg"
                />
                <span>
                  <button
                    type="button"
                    className="w-[121px] h-[58px] bg-primaryColor text-white rounded-r-lg"
                  >
                    Subscribe
                  </button>
                </span>
              </div>
              <p className="sh6 text-seconTextColor py-2">
                Lore imp sum dolor Amit
              </p>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-lightgray1 px-8 py-5">
        <div className="max-w-[1200px] m-auto flex justify-center sm:justify-start">
          <p className="sbtn-text text-center sm:text-start flex flex-wrap px-[56px] sm:px-[0px] text-seconTextColor">
            Made With Love By Finland All Right Reserved{" "}
          </p>
        </div>
      </section>
    </footer>
  );
}
