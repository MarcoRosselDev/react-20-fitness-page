import SectionHead from "./SectionHead";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ";

function FAQs() {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={FaQuestion} title="FAQs" />
        <div className="faqs__wrapper">{}</div>
      </div>
    </section>
  );
}

export default FAQs;
