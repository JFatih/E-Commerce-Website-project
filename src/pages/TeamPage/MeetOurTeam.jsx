import { teamData } from "../../mocks/teamData";

export default function MeetOurTeam() {
  return (
    <div className="bg-lightTextGray">
      <main className=" max-w-screen-2xl mx-auto w-screen py-5">
        <section className="mobileTextPadding text-center mx-auto md:py-20">
          <p className="sh2 text-textColor py-3">Meet Our Team</p>
          <p className="sparagraph text-secondTextColor w-5/6 mx-auto md:w-2/6 ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </section>
        <section className="flex flex-row flex-wrap gap-10 px-16 justify-center md:pb-20">
          {teamData.map((data, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col items-center justify-center px-10 py-5 w-[238px] h-[306px] bg-white gap-3 text-center"
              >
                <img
                  src={data.image}
                  alt={data.name}
                  className="rounded-full w-32"
                />
                <p className="sh6 text-primaryColor">{data.title}</p>
                <a href={data.link}>
                  <p className="sh5 text-textColor">{data.name}</p>
                </a>
                <p className="sparagraph text-secondTextColor">{data.text}</p>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
