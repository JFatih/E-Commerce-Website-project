export default function TextImageCard({ data }) {
  return (
    <section className="flex flex-row flex-wrap max-w-[1200px] mx-auto md:justify-around md:items-center">
      <div className="text-textColor flex flex-col gap-5 items-center text-center mobileTextPadding lg:w-2/6 md:w-3/6 md:text-start md:items-start">
        <p className="sh5 ">{data.subTitle}</p>
        <p className="sh2">{data.title}</p>
        <p className="sh4 text-secondTextColor">{data.paragraph}</p>
        {data.subParagraph.map((subData) => {
          return <p className="sh3">{subData}</p>;
        })}
        <div className="sh3 flex gap-5">
          {Object.values(data.icon).map((iconData) => {
            return <a href={iconData.link}>{iconData.icon}</a>;
          })}
        </div>
        <button></button>
      </div>
      <div className="relative flex justify-center px-4 md:w-3/6 ">
        <img
          src={data.image.link}
          alt={data.image.altText}
          className="w-[387px] h-[440px] lg:w-[571px] lg:h-[826px] relative z-10 object-cover"
        />
        <span className="absolute h-[47px] w-[47px] rounded-full bg-[#FFE9EA] top-10 left-3 z-[-1]"></span>
        <span className="absolute h-[295.65px] w-[295.65px] rounded-full bg-[#FFE9EA] top-7 z-[-1]"></span>
        <span className="absolute h-[18.48px] w-[18.48px] rounded-full bg-[#FFE9EA] top-52 right-6 z-[-1]"></span>
        <span className="absolute h-[9.02px] w-[9.02px] rounded-full bg-[#977DF4] top-32 right-5 z-[-1]"></span>
        <span className="absolute h-[9.02px] w-[9.02px] rounded-full bg-[#977DF4] bottom-32 left-6 z-[-1]"></span>
      </div>
    </section>
  );
}
