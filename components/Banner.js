import React from "react";
import Carousel from "framer-motion-carousel";
import img1 from "../images/CarouselOne.jpg";
import img2 from "../images/CarouselTwo.jpg";
import img3 from "../images/CarouselThree.jpg";
import img4 from "../images/CarouselFour.jpg";
import { FaChevronLeft } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const images = [
  {
    image: img1,
    title: "The Power Of A Great Team",
    body: `For hundreds of years canines have been mans best friend, guide,
and companion in life. Here at Alpha Trucking and Dispatch, we
are your reliable companion.`,
    body1: `We'll be there at every mile,
making sure you have the support you need 24/7 365 days a year.`,
    to: "solutions",
  },
  {
    image: img2,
    title: "Join The Alpha Pack",
    body: `Experience the Alpha Difference and all it's benefits. We're all about transparency and integrity; see below how you can join the Alpha Pack as a dispatching client, or run with our authority today!`,
    to: "join",
  },
  {
    image: img3,
    title: "The Future Of Freight And Logistics Is Almost Here! ",
    body: `Our goal is to disrupt the freight brokerage business and bring honesty and integrity back into the business. Click below to read more.`,
    to: "frieght",
  },
  {
    image: img4,
    title: `The Loadboard Killer Coming Soon!`,
    body: `We're about to change how loads are inputted and how carriers, brokers and shippers are vetted. The future of logistics and loadboards is almost here!`,
    to: "loadboard",
  },
];

const Banner = () => {
  return (
    <div style={{ width: "100%" }} className="md:w-full h-full" id="home">
      <Carousel interval={5000}>
        {images.map((item, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${item.image.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // backgroundPosition: "right bottom",
            }}
            className="p-10  md:p-20 bg-cover h-full lg:min-h-[75vh] md:min-h-[50vh] min-h-[60vh] ">
            <div className="lg:w-1/2 mt-5 ">
              <h3 className="text-white text-lg md:text-5xl mt-5 pt-10 filter-">
                {item.title}
              </h3>
              <p className="text-white mt-10 text-base md:text-lg ">
                {item.body}
              </p>
              <p className="text-white mt-5 text-base md:text-lg ">
                {item.body1}
              </p>
            </div>
            <div className="flex justify-between md:w-1/2 lg:w-1/4 mt-10 md:text-base lg:text-xs">
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="p-2 hover:scale-110 transition-all whitespace-nowrap inline-flex items-center justify-center text-base font-medium  bg-[#00ff00] text-white rounded-md">
                Learn More
              </Link>
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
