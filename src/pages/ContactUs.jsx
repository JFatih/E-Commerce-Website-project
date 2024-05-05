import PageNavigation from "../components/PageNavigation";
import TextImageCard from "../components/TextImageCard";

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

const TextImageCardData = {
  subTitle: "CONTACT US",
  title: "Get İn touch today!",
  paragraph:
    "We know how large objects will act, but things on a small scale just do not act that way.",
  subParagraph: ["Phone : +451 215 215", "Fax : +451 215 215"],
  icon: {
    twitter: {
      link: "https://twitter.com/home",
      icon: <i className="fa-brands fa-twitter"></i>,
    },
    facebook: {
      link: "https://facebook.com",
      icon: <i className="fa-brands fa-square-facebook"></i>,
    },
    instagram: {
      link: "https://instagram.com",
      icon: <i className="fa-brands fa-instagram"></i>,
    },
    linkedin: {
      link: "https://linkedin.com",
      icon: <i className="fa-brands fa-linkedin"></i>,
    },
  },
  image: { link: "/contactUs/contactUsImage.png", altText: "Shopping Family" },
};

export default function ContactUs() {
  return (
    <main>
      <div className="px-8">
        <span className="max-w-[1200px] flex flex-row justify-center sm:justify-start  mx-auto">
          <PageNavigation />
        </span>
      </div>
      <TextImageCard data={TextImageCardData} />
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
