import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-[url('https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1271&q=80')] p-10 md:p-20 bg-cover h-full"
      style={{ height: "450px", backgroundPositionY: "-250px" }}>
      <div className="md:w-1/3 mt-5 ">
        <h3 className="text-white text-2xl md:text-5xl mt-5">
          <span className="text-[#00ff00]">Elevating</span> Supply Chain
          Experiences{" "}
        </h3>
        <p className="text-white mt-10 text-sm">
          The Beon Digital Logistics Platform Provides Shippers and Carriers
          Access to Transportation Insight & Nolan Transportation Group Combined
          Network and Services – from Port to Porch
        </p>
      </div>
      <div className="flex justify-between md:w-1/5 mt-10">
        <button className="bg-white p-2  hover:bg-[#00ff00] hover:text-white rounded-md">
          Read Press Release
        </button>
        <button className="bg-white p-2  hover:bg-[#00ff00] hover:text-white rounded-md">
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default Banner;
