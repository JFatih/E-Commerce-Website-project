import ProductDetailSlider from "../components/ProductDetailSlider";

export default function ProductDetailCard() {
  return (
    <main className="w-screen">
      <section className=" bg-lightTextGray">
        <div className="max-w-[1200px] mobileCardPadding mx-auto py-8 flex flex-col sm:flex-row">
          <ProductDetailSlider />
          <div className="p-3 flex flex-col gap-5">
            <p className="sh4 text-textColor">Floating Phone</p>
            <div className="text-[#F3CD03] flex flex-row gap-3">
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
              <p className="sh6 text-secondTextColor">10 Reviews</p>
            </div>
            <p className="sh3 text-textColor">$1,139.33</p>
            <div className="sh6 text-secondTextColor flex flex-row gap-3">
              <p>Availability : </p>
              <p className="text-primaryColor">In Stock</p>
            </div>
            <p className="sparagraph text-[#858585]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <div className="border border-mutedTextColor w-4/5"></div>
            <div className="flex flex-row gap-4 sh4 items-center my-2">
              <span>
                <button className="bg-primaryColor px-3 py-1 rounded-l-lg text-white">
                  -
                </button>
                <span className="px-3 py-[5.5px] border border-y-mutedTextColor ">
                  0
                </span>
                <button className="bg-primaryColor px-3 py-1 rounded-r-lg text-white">
                  +
                </button>
              </span>
              <span className="flex flex-row gap-1 ">
                <button className="rounded-full border-primaryColor border-[15px]"></button>
                <button className="rounded-full border-successColor border-[15px]"></button>
                <button className="rounded-full border-alertColor border-[15px]"></button>
                <button className="rounded-full border-darkBackgroundColor border-[15px]"></button>
              </span>
            </div>
            <div className="flex flex-row gap-3 my-2">
              <button className="px-[18px] py-[10px] bg-primaryColor rounded-lg text-white sh4">
                Add to Cart
              </button>
              <span className="flex flex-row gap-2 text-textColor">
                <button>
                  <i className="border rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center fa-regular fa-heart"></i>
                </button>
                <button>
                  <i className="border rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center  fa-solid fa-cart-shopping"></i>
                </button>
                <button>
                  <i className="border rounded-full w-[40px] h-[40px] bg-white flex justify-center items-center  fa-solid fa-eye"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] bg-white mobileCardPadding mx-auto py-3">
        <div className="sh6 text-secondTextColor flex flex-row gap-2">
          <button>Description</button>
          <button>Additional İnformation</button>
          <button>Reviews</button>
        </div>
      </section>
    </main>
  );
}
