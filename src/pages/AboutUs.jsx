import MeetOurTeam from "../components/MeetOurTeam";
import PageNavigation from "../components/PageNavigation";
import TextImageCard from "../components/TextImageCard";
import SponsoredCards from "../components/SponsoredCards";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AboutUsData = {
  subTitle: "ABOUT COMPANY",
  title: "ABOUT US",
  paragraph: `We know how large objects will act, 
    but things on a small scale`,
  subParagraph: null,
  icon: {
    twitter: {
      link: null,
      icon: null,
    },
    facebook: {
      link: null,
      icon: null,
    },
    instagram: {
      link: null,
      icon: null,
    },
    linkedin: {
      link: null,
      icon: null,
    },
  },
  image: {
    link: "/aboutUs/aboutUsImage.png",
    altText: "Shopping Women",
    className: "h-[440px] lg:h-[668px]",
  },
  button: { name: "Get Quote Now", link: "mailto:mail@example.org" },
};
const StaticData = [
  { name: "15k", text: "Happy Customers" },
  { name: "150k", text: "Monthly Visitors" },
  { name: "15", text: "Countries  Worldwide" },
  { name: "100+", text: "Top Partners" },
];

export default function AboutUs() {
  return (
    <main>
      <TextImageCard data={AboutUsData} />
      <section className="py-10 max-w-[1200px] mx-auto">
        <div className="text-textColor px-10 py-10 text-center flex flex-col md:flex-row  gap-5 items-center justify-center">
          <div className="flex flex-col gap-5 md:w-[450px] md:text-start">
            <p className="sparagraph text-dangerTextColor">Problems trying</p>
            <p className="sh3">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </p>
          </div>
          <p className="text-secondTextColor sparagraph text-start md:w-[450px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-20 items-center justify-center text-center py-20 mobileTextPadding">
          {StaticData.map((data, index) => {
            return (
              <span key={index} className="my-5">
                <p className="sh1 text-textColor">{data.name}</p>
                <p className="sh5 text-secondTextColor">{data.text}</p>
              </span>
            );
          })}
          <iframe
            className="mobileCardPadding h-[316px] my-10 lg:h-[540px] lg:w-[989px]"
            src="https://www.youtube.com/embed/YaEG2aWJnZ8?controls=0?autoplay=1&mute=50"
          ></iframe>
        </div>
      </section>
      <MeetOurTeam />
      <section className="px-12 text-center flex flex-col gap-10 py-10">
        <p className="sh2 text-textColor ">Big Companies Are Here</p>
        <p className="sparagraph text-secondTextColor w-max mx-auto lg:w-2/6">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <SponsoredCards />
      </section>
      <section className="text-white bg-hoverColor flex flex-row justify-center max-w-screen-2xl lg:h-[636px] mx-auto">
        <div className="px-16 py-24 flex flex-col gap-5  text-center items-center lg:w-5/12 lg:text-start lg:items-start lg:justify-center">
          <p className="sh5">WORK WITH US</p>
          <p className="sh2">Now Let’s grow Yours</p>
          <p className="sparagraph lg:w-9/12">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <Link to="/">
            <button className="px-10 py-3 border-white border rounded-md sh6 inline-block">
              Button
            </button>
          </Link>
        </div>
        <img
          src="/aboutUs/aboutUsImage2.png"
          className="hidden lg:block object-cover"
        />
      </section>
    </main>
  );
}
