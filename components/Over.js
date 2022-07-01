import React from "react";

const Over = () => {
  return (
    <div className=" bg-black  p-12 text-white flex justify-around flex-col md:flex-row">
      <h5 className="text-xl text-center mb-5">
        OVER <br />{" "}
        <span className="text-[#00ff00] font-bold text-2xl">14,000</span>
        <br /> SHIPPERS
        <br /> AND COUNTING
      </h5>
      <h5 className="text-xl text-center mb-5">
        OVER
        <br />{" "}
        <span className="text-[#00ff00] font-bold text-2xl">$15 BILLION</span>
        <br /> TRANSPORTATION
        <br /> SPEND MANAGED
      </h5>
      <h5 className="text-xl text-center">
        OVER <br />
        <span className="text-[#00ff00] font-bold text-2xl">850,000</span>
        <br /> DRIVERS
        <br /> IN NETWORK
      </h5>
    </div>
  );
};

export default Over;
