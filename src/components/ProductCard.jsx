export default function ProductCard() {
  return (
    <section>
      <div className="mobileTextPadding text-center flex flex-col gap-3">
        <p className="sh4 text-seconTextColor">Featured Products</p>
        <p className="sh3 text-textColor">BESTSELLER PRODUCTS</p>
        <p className="sparagraph text-seconTextColor">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div>
        <img src="/public/product.png" className="mobileCardPadding" />
        <div>
          <h1>Graphic Design</h1>
          <p>Englich Department</p>
          <span>
            <p>$16.48</p>
            <p>$6,48</p>
          </span>
          <div>
            <div className="border-[15px] rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
