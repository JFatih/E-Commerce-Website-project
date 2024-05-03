import MeetOurTeam from "./MeetOurTeam";
import PageNavigation from "../../components/PageNavigation";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Team() {
  return (
    <main className="">
      <section className="px-5 py-10 flex flex-col items-center gap-4 max-w-[1200px] mx-auto">
        <p className="sh5 text-secondTextColor">WHAT WE DO</p>
        <p className="sh2 text-textColor text-center lg:sh1">
          Innovation tailored for you
        </p>
        <PageNavigation />
      </section>
      <section className="max-w-screen-2xl mx-auto flex flex-col my-5 md:flex-row md:justify-between">
        <img
          src="/team/team-1.png"
          className="h-[530px] object-cover md:w-3/6 "
        />
        <div className="flex flex-row md:w-3/6 md:gap-1 md:px-1 justify-center items-center">
          <div className="w-3/6 p-1 flex flex-col gap-1 md:p-0">
            <img src="/team/team-2.png" className="h-[260px] object-cover" />
            <img src="/team/team-4.png" className="h-[260px] object-cover" />
          </div>
          <div className="w-3/6 p-1 pl-0 flex flex-col gap-1 md:p-0">
            <img src="/team/team-3.png" className="h-[260px] object-cover" />
            <img src="/team/team-5.png" className="h-[260px] object-cover" />
          </div>
        </div>
      </section>
      <MeetOurTeam />
      <section className="px-5 py-10 flex flex-col items-center text-center gap-5">
        <div>
          <p className="sh2 text-textColor md:inline md:mr-3">Start your</p>
          <p className="sh2 text-textColor md:inline">14 days free trial</p>
        </div>
        <p className="sparagraph text-secondTextColor xl:w-3/12">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <Link to="/">
          <button className="bg-primaryColor text-white px-9 py-3 rounded-lg sbtn-text">
            Try it free now
          </button>
        </Link>
        <div className="flex gap-4">
          <i className="text-3xl text-[#55ACEE] fa-brands fa-twitter"></i>
          <i className="text-3xl text-[#395185] fa-brands fa-square-facebook"></i>
          <i className="text-3xl fa-brands fa-instagram"></i>
          <i className="text-3xl text-[#0A66C2] fa-brands fa-linkedin"></i>
        </div>
      </section>
    </main>
  );
}
