import React from "react";
import Carousel from "framer-motion-carousel";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import { FaChevronLeft } from "react-icons/fa";

const images = [img1, img2, img3];

const Banner = () => {
  return (
    <div style={{ width: "100%" }} className="md:w-full h-full">
      <Carousel interval={5000}>
        {images.map((item, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${item.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="p-10  md:p-20 bg-cover h-full">
            <div className="lg:w-1/3 mt-5 ">
              <h3 className="text-white text-lg md:text-5xl mt-5">
                <span className="text-[#00ff00]">The Power</span> of a Great
                Team{" "}
              </h3>
              <p className="text-white mt-10 text-sm md:text-base">
                For hundreds of years canines have been mans best friend, guide,
                and companion in life.Here at Alpha Dispatching, we are your
                reliable companion. We'll be there every step of the way.
              </p>
            </div>
            <div className="flex justify-between md:w-1/2 lg:w-1/4 mt-10 md:text-base lg:text-xs">
              <button className="p-2 hover:scale-110 transition-all whitespace-nowrap inline-flex items-center justify-center text-base font-medium  bg-[#00ff00] text-white rounded-md">
                Read Press Release
              </button>
              <button className="p-2 hover:scale-110 transition-all   whitespace-nowrap inline-flex items-center justify-center text-base font-medium  bg-[#00ff00] text-white rounded-md">
                Watch Video
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

{
  /* <div
      className="bg-[url('https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1271&q=80')] p-10 md:p-20 bg-cover h-full"
      style={{ height: "450px", backgroundPositionY: "-250px" }}>
      
    </div> */
}
