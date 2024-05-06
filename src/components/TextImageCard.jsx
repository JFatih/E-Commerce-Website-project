export default function TextImageCard({ data }) {
  return (
    <section className="flex flex-row flex-wrap max-w-[1200px] justify-center mx-auto md:justify-around md:items-center">
      <div className="text-textColor flex flex-col gap-5 items-center text-center mobileTextPadding lg:w-5/12 md:w-3/6 md:text-start md:items-start">
        <p className="sh5 ">{data.subTitle}</p>
        <p className="sh2">{data.title}</p>
        <p className="sh4 text-secondTextColor">{data.paragraph}</p>
        {data.subParagraph
          ? data.subParagraph.map((subData, index) => (
              <p className="sh3" key={index}>
                {subData}
              </p>
            ))
          : null}
        {data.icon.twitter.link ? (
          <div className="sh3 flex gap-5">
            {Object.values(data.icon).map((iconData, index) => {
              return (
                <a href={iconData.link} key={index}>
                  {iconData.icon}
                </a>
              );
            })}
          </div>
        ) : null}
        {data.button.name ? (
          <a
            href={data.button.link}
            className="bg-primaryColor text-white py-3 px-5 rounded-xl"
          >
            {data.button.name}
          </a>
        ) : null}
      </div>
      <div className="relative flex justify-center px-4 md:w-3/6 ">
        <img
          src={data.image.link}
          alt={data.image.altText}
          className={`w-[375px]  lg:w-[571px]  relative z-10 object-cover ${data.image.className}`}
        />
        <span className="absolute h-[47px] w-[47px] lg:h-[77px] lg:w-[77px] rounded-full bg-[#FFE9EA] top-10 left-3 z-[-1]"></span>
        <span className="absolute h-[295.65px] w-[295.65px] lg:h-[484px] lg:w-[484px] rounded-full bg-[#FFE9EA] top-7 z-[-1]"></span>
        <span className="absolute h-[18.48px] w-[18.48px] lg:h-[30.25px] lg:w-[30.25px] rounded-full bg-[#FFE9EA] top-52 right-6 z-[-1]"></span>
        <span className="absolute h-[9.02px] w-[9.02px] lg:h-[14.78px] lg:w-[14.78px] rounded-full bg-[#977DF4] top-32 right-5 z-[-1]"></span>
        <span className="absolute h-[9.02px] w-[9.02px] lg:h-[14.78px] lg:w-[14.78px] rounded-full bg-[#977DF4] bottom-32 left-6 z-[-1]"></span>
      </div>
    </section>
  );
}
