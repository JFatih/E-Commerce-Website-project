import { ProductCartData } from "../mocks/ProductCardData";

export default function ProductCard() {
  return (
    <section className="max-w-[1200px] mx-auto py-5">
      <div className="mobileTextPadding text-center flex flex-col gap-3">
        <p className="sh4 text-secondTextColor">Featured Products</p>
        <p className="sh3 text-textColor">BESTSELLER PRODUCTS</p>
        <p className="sparagraph text-secondTextColor">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex sm:flex-wrap sm:gap-5 sm:justify-center sm:flex-row flex-col items-center  mobileCardPadding">
        {ProductCartData.map((data) => {
          return (
            <div className="" key={data.id}>
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
    </section>
  );
}
