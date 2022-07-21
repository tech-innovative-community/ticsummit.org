import React from "react";
import { testimonials } from "../../../../dummy";

const Testimonials = () => {
  return (
    <div className="bootcamp__testimonials">
      <div className="bootcamp__header-title">
        <p>
          Testimonials from some of our <span>grads</span>.
        </p>
      </div>
      <div className="testimonials__container">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <img src={testimonial.userImg} alt="" />
            <div className="testimonial__text__content">
              <h1>{testimonial.username}</h1>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
