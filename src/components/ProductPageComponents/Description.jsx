import { Accordion, AccordionItem } from "@szhsin/react-accordion";

export default function Description() {
  return (
    <section className="my-1 flex flex-col lg:flex-row lg:gap-8 md:py-8">
      <img
        src="/descriptionImage.png"
        alt="descriptionImage"
        className="drop-shadow-2xl	my-5 lg:w-[316px] lg:h-[372px] lg:my-0"
      />
      <div className="flex flex-col gap-5 lg:w-2/6">
        <p className="sh3 text-textColor">the quick fox jumps over </p>
        <p className="sparagraph text-secondTextColor">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className="sparagraph text-secondTextColor">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className="sparagraph text-secondTextColor">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>
      <div className="lg:w-2/6">
        <div className="py-3 lg:py-0">
          <p className="sh3 text-textColor py-3 lg:py-0">
            the quick fox jumps over{" "}
          </p>
          <Accordion className="sh6 text-secondTextColor flex flex-col gap-1">
            <AccordionItem
              header={
                <div className="flex flex-row gap-2 justify-center items-center">
                  <i className="fa-solid fa-angle-right"></i>
                  <p>What is Lorem Ipsum?</p>
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>
            <AccordionItem
              header={
                <div className="flex flex-row gap-2 justify-center items-center">
                  <i className="fa-solid fa-angle-right"></i>
                  <p>What is Lorem Ipsum?</p>
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>
          </Accordion>
        </div>
        <div className="py-3">
          <p className="sh3 text-textColor py-3">the quick fox jumps over </p>
          <Accordion className="sh6 text-secondTextColor flex flex-col gap-1">
            <AccordionItem
              header={
                <div className="flex flex-row gap-2 justify-center items-center">
                  <i className="fa-solid fa-angle-right"></i>
                  <p>What is Lorem Ipsum?</p>
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>
            <AccordionItem
              header={
                <div className="flex flex-row gap-2 justify-center items-center">
                  <i className="fa-solid fa-angle-right"></i>
                  <p>What is Lorem Ipsum?</p>
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
