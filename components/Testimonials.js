import React from "react";
import Carousel from "framer-motion-carousel";

const testimonials = [
  {
    title: "Francisco N.",
    body: '“I would be stuck in a city for days. After joining the Alpha Pack im paying less fees and they always make sure I have a way back home with money in my pocket."',
  },
  {
    title: "Brittany A.",
    body: `"I don't receive calls from brokers asking where I'm at. My dedicated dispatcher takes care of everything and reach out to the brokers before they have the need to call me. So I just have to drive.`,
  },
  {
    title: "Ed S.",
    body: `"They collected on all my past due invoices within 2 weeks! Glad to be part of the Alpha Pack."`,
  },
];

const Testimonials = () => {
  return (
    <div
      style={{ width: "100%" }}
      className="md:w-full h-full bg-[#000] md:p-10 ">
      <Carousel interval={3000}>
        {testimonials.map((tst, i) => (
          <div key={i} className="p-10 md:m-10 text-center text-slate-50 ">
            <p className="md:px-auto mx-auto md:text-xl pb-3">{tst.body}</p>
            <p>{tst.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
