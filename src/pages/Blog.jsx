import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { blogData } from "../mocks/blogData";

export default function Blog() {
  return (
    <article className="w-max-[1200px]  py-10 flex flex-col items-center mx-auto">
      <div className="text-center w-8/12 md:w-3/12 flex flex-col gap-2 py-10">
        <p className="sh6 text-primaryColor">Practice Advice</p>
        <p className="sh2 text-textColor">Blogs</p>
        <p className="spragraph text-secondTextColor">
          Problems trying to resolve the conflict between the two major{" "}
        </p>
      </div>
      <div className="flex items-center flex-row flex-wrap justify-center">
        {blogData.map((data, index) => {
          return (
            <div
              className="flex flex-col w-[329px] md:w-80 md:flex-wrap md:flex-row m-2"
              key={index}
            >
              <figure className="relative">
                <img
                  src={data.image.src}
                  alt="blog1"
                  className="sm:w-80 sm:h-72"
                />
                <span className="text-white text-sm bg-[#E74040] px-3 py-1 rounded-md absolute left-4 top-4">
                  New
                </span>
              </figure>
              <div className="flex flex-col gap-3 p-5 border border-secondTextColor-200 shadow-md">
                <ul className="text-xs text-secondTextColor flex flex-row gap-3 flex-wrap">
                  {data.tags.map((tag, index) => {
                    return (
                      <li className="hover:text-[#8EC2F2]" key={index}>
                        {tag}
                      </li>
                    );
                  })}
                </ul>
                <h2 className="sh4 text-darkBackgroundColor">{data.title}</h2>
                <p className="sparagraph text-secondTextColor">
                  {data.paragraph}
                </p>
                <div className="text-xs text-secondTextColor flex flex-row justify-between items-center">
                  <span>
                    <i className="text-primaryColor fa-regular fa-clock"></i>
                    {"  "} {data.subData.date}
                  </span>
                  <span>
                    <i className="text-color1 fa-solid fa-chart-line"></i>
                    {"  "}
                    {data.subData.comment}
                  </span>
                </div>
                <Link to={data.link.link}>
                  <button className="text-secondTextColor sbtn-text flex justify-start flex-row items-center gap-2">
                    {data.link.name}{" "}
                    <i className="text-primaryColor fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
