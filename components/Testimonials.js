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
      className="md:w-full h-full bg-[#000] md:p-10 "
      id="testimonials">
      <Carousel interval={3000}>
        {testimonials.map((tst, i) => (
          <div key={i} className="p-10 md:m-10 text-center text-slate-50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-500 mb-8"
              viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="md:px-auto mx-auto md:text-lg pb-3 leading-relaxed text-gray-400">
              {tst.body}
            </p>
            <span className="inline-block h-1 w-10 rounded bg-[#00ff00] mt-8 mb-6"></span>
            <p className="title-font tracking-wider text-sm font-medium">
              {tst.title}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
