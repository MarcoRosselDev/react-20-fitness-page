import { useState } from "react";
import SectionHead from "./SectionHead";
import { ImOffice, ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";

function Testimonials() {
  const [index, setIndex] = useState(4);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialHeadler = () => {
    console.log("hola desde prevTestimonialHeadler");
  };
  const nextTestimonialHeadler = () => {
    console.log("hola desde nextTestimonialHeadler");
  };

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimionial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`'${quote}'`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button
            className="testimonials__btn"
            onClick={prevTestimonialHeadler}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials__btn"
            onClick={nextTestimonialHeadler}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
