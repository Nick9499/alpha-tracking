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
                <span className="text-[#00ff00]">Elevating</span> Supply Chain
                Experiences{" "}
              </h3>
              <p className="text-white mt-10 text-sm md:text-base">
                The Beon Digital Logistics Platform Provides Shippers and
                Carriers Access to Transportation Insight & Nolan Transportation
                Group Combined Network and Services – from Port to Porch
              </p>
            </div>
            <div className="flex justify-between md:w-1/2 lg:w-1/5 mt-10 md:text-base lg:text-xs">
              <button className="bg-white p-2 mr-5 md:mr-0 hover:bg-[#00ff00] hover:text-white rounded-md">
                Read Press Release
              </button>
              <button className="bg-white p-2  hover:bg-[#00ff00] hover:text-white rounded-md">
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
