import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Container() {
  return (
    <section className="max-w-screen-2xl mx-auto  flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:gap-24">
      <div className="flex flex-col justify-center text-center w-8/12 my-5 gap-4 lg:w-4/12 pt-8 lg:pt-0 lg:items-start lg:text-start">
        <p className="text-mutedTextColor sh5">Summer 2024</p>
        <p className="sh2 text-textColor">Part of the Neural Universe</p>
        <p className="text-mutedTextColor w-10/12 mx-auto sh5 lg:mx-0">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-center ">
          <Link to="">
            <button className="bg-primaryColor lg:bg-successColor w-40 h-14 rounded-lg text-white sbtn-text">
              BUY NOW
            </button>
          </Link>
          <Link to="">
            <button className="border border-primaryColor lg:border-successColor w-40 h-14 rounded-lg text-primaryColor lg:text-successColor sbtn-text">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <figure className="overflow-hidden">
        <img
          src="/couple.png"
          alt="Couple"
          className="lg:aspect-square lg:scale-125 relative lg:w-[500px] lg:h-[500px]"
        />
      </figure>
    </section>
  );
}
