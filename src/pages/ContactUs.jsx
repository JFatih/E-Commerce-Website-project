import PageNavigation from "../components/PageNavigation";

const contactData = {
  phone: {
    icon: <i className="text-7xl text-primaryColor fa-solid fa-phone"></i>,
    email: ["georgia.young@example.com", "georgia.young@ple.com"],
    name: "Get Support",
    buttonName: "Submit Request",
    request: "tel:123-456-7890p123",
  },
  location: {
    icon: (
      <i className="text-7xl text-primaryColor fa-solid fa-location-dot"></i>
    ),
    email: ["georgia.young@example.com", "georgia.young@ple.com"],
    name: "Get Support",
    buttonName: "Submit Request",
    request: "40.96792652014574, 29.066182294260397",
  },
  emial: {
    icon: (
      <i className="text-7xl text-primaryColor fa-regular fa-paper-plane"></i>
    ),
    email: ["georgia.young@example.com", "georgia.young@ple.com"],
    name: "Get Support",
    buttonName: "Submit Request",
    request: "mailto: email@example.com",
  },
};

export default function ContactUs() {
  return (
    <main>
      <div className="px-8">
        <span className="max-w-[1200px] flex flex-row justify-center sm:justify-start  mx-auto">
          <PageNavigation />
        </span>
      </div>
      <section className="flex flex-row flex-wrap max-w-[1200px] mx-auto md:justify-around md:items-center">
        <div className="text-textColor flex flex-col gap-5 items-center text-center mobileTextPadding lg:w-2/6 md:w-3/6 md:text-start md:items-start">
          <p className="sh5 ">CONTACT US</p>
          <p className="sh2">Get İn touch today!</p>
          <p className="sh4 text-secondTextColor">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <p className="sh3">Phone : +451 215 215</p>
          <p className="sh3">Fax : +451 215 215</p>
          <div className="sh3 flex gap-5">
            <a href="https://twitter.com/home">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://facebook.com">
              <i className="fa-brands fa-square-facebook"></i>
            </a>

            <a href="https://instagram.com">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://linkedin.com">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="relative flex justify-center px-4 md:w-3/6 ">
          <img
            src="/contactUs/contactUsImage.png"
            alt="Shopping Family"
            className="w-[387px] h-[440px] lg:w-[571px] lg:h-[826px] relative z-10 object-cover"
          />
          <span className="absolute h-[47px] w-[47px] rounded-full bg-[#FFE9EA] top-10 left-3 z-[-1]"></span>
          <span className="absolute h-[295.65px] w-[295.65px] rounded-full bg-[#FFE9EA] top-7 z-[-1]"></span>
          <span className="absolute h-[18.48px] w-[18.48px] rounded-full bg-[#FFE9EA] top-52 right-6 z-[-1]"></span>
          <span className="absolute h-[9.02px] w-[9.02px] rounded-full bg-[#977DF4] top-32 right-5 z-[-1]"></span>
          <span className="absolute h-[9.02px] w-[9.02px] rounded-full bg-[#977DF4] bottom-32 left-6 z-[-1]"></span>
        </div>
      </section>
      <section className=" bg-lightTextGray w-screen py-5">
        <div className="max-w-[1200px] mx-auto w-screen">
          <div className="text-textColor mobileTextPadding text-center">
            <p className="sh6">VISIT OUR OFFICE</p>
            <p className="sh2">We help small businesses with big ideas</p>
          </div>
          <div className="flex flex-row flex-wrap text-center justify-center mx-auto">
            {Object.values(contactData).map((data, index) => {
              return (
                <div
                  key={index}
                  className={`sh6 mobileCardPadding  flex flex-col gap-3 py-10 shadow-md my-5 lg:py-20 ${
                    index === 1
                      ? "bg-darkBackgroundColor text-white"
                      : "bg-white text-textColor"
                  }`}
                >
                  <span>{data.icon}</span>
                  <span>
                    {data.email.map((mail, index) => {
                      return <p key={index}>{mail}</p>;
                    })}
                  </span>
                  <p className="sh5">{data.name}</p>
                  <div>
                    <a
                      href={data.request}
                      className="border-primaryColor border px-5 py-3 text-primaryColor rounded-lg inline-block"
                    >
                      {data.buttonName}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="text-textColor flex flex-col gap-4 py-10 justify-center mx-auto items-center">
        <img src="/contactUs/contactUsArrow.png" />
        <p className="sh5">WE Can't WAIT TO MEET YOU</p>
        <p className="sh2">Let’s Talk</p>
        <div>
          <a
            href=""
            className="sbtn-text px-5 py-3 bg-primaryColor text-white rounded-md block"
          >
            Try it free now
          </a>
        </div>
      </section>
    </main>
  );
}
