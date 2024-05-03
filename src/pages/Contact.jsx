export default function Contact() {
  return (
    <main className="text-white max-w-screen-2xl mx-auto relative bg-gradient-to-r from-black  flex flex-col lg:flex-row justify-center items-center lg:p-20">
      <img
        src="/contactBgImage.png"
        alt="bgImage"
        className="absolute z-[-10] w-full h-full object-cover"
      />
      <section className="  flex flex-col gap-5 py-10 items-center mobileTextPadding text-center lg:w-2/6 lg:text-start lg:items-start lg:gap-8">
        <p className="sh2 ">CONTACT US</p>
        <p className="sparagraph">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <a
          id="emailMe"
          href="mailto:cakmak.35f@gmail.com"
          className="sbtn-text px-[40px] py-[15px] bg-primaryColor text-white rounded-xl"
        >
          CONTACT US
        </a>
      </section>
      <section className="flex flex-col md:flex-row">
        <div>
          <div className="flex flex-col gap-5 py-10 items-start mobileTextPadding text-start">
            <p className="sh3">Paris</p>
            <p className="sh4">1901 Thorn ridge Cir.</p>
            <hr className="border border-primaryColor w-3/12" />
            <span className="sh5 flex flex-col gap-3">
              <p>7500 Paris</p>
              <p>Phone : +451 215 215</p>
              <p>Fax : +451 215 215</p>
            </span>
          </div>
          <div className="flex flex-col gap-5 py-10 items-start mobileTextPadding text-start">
            <p className="sh3">Berlin</p>
            <p className="sh4">1901 Thorn ridge Cir.</p>
            <hr className="border border-primaryColor w-3/12" />
            <span className="sh5 flex flex-col gap-3">
              <p>7500 Paris</p>
              <p>Phone : +451 215 215</p>
              <p>Fax : +451 215 215</p>
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5 py-10 items-start mobileTextPadding text-start">
            <p className="sh3">New York</p>
            <p className="sh4">2715 Ash Dr. San Jose, </p>
            <hr className="border border-primaryColor w-3/12" />
            <span className="sh5 flex flex-col gap-3">
              <p>7500 Paris</p>
              <p>Phone : +451 215 215</p>
              <p>Fax : +451 215 215</p>
            </span>
          </div>
          <div className="flex flex-col gap-5 py-10 items-start mobileTextPadding text-start">
            <p className="sh3">London</p>
            <p className="sh4">3517 W. Gray St. Utica, </p>
            <hr className="border border-primaryColor w-3/12" />
            <span className="sh5 flex flex-col gap-3">
              <p>7500 Paris</p>
              <p>Phone : +451 215 215</p>
              <p>Fax : +451 215 215</p>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
