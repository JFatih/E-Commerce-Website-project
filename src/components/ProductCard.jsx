import { ProductCartData } from "../mocks/ProductCardData";

export default function ProductCard() {
  return (
    <div className="max-w-[1200px] flex flex-row flex-wrap gap-5 justify-start mx-auto  mobileCardPadding">
      {ProductCartData.map((data) => {
        return (
          <div className="mx-auto" key={data.id}>
            <img
              src={data.image}
              className="sm:w-60 sm:h-[427px]  sm:object-cover"
            />
            <div className="text-center p-5 flex flex-col gap-2">
              <h1 className="sh5 text-textColor">{data.name}</h1>
              <p className="slink text-secondTextColor">{data.subTitle}</p>
              <span className="flex justify-center gap-2">
                <p className="sh5 text-mutedTextColor">${data.basePrice}</p>
                <p className="sh5 text-secondaryColor">${data.disPrice}</p>
              </span>
              <div className="flex justify-center gap-1">
                {data.color.map((color) => {
                  return (
                    <div
                      className={`w-4 h-4 ${`bg-` + color} rounded-full`}
                      key={color}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
