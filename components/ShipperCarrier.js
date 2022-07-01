import React from "react";

const ShipperCarrier = () => {
  return (
    <div className="md:p-20 grid md:grid-cols-2 gap-5 md:text-center m-20">
      <div>
        <h3 className="text-3xl">
          ARE YOU A <span className="text-[#00ff00] font-bold">SHIPPER?</span>
        </h3>
        <p className="pt-5">
          NTG Freight is a leading 3PL provider in North America, specializing
          in <span>drayage, truckload, LTL</span> and <span>final mile</span>{" "}
          shipping solutions. Our team of experts are driven to elevate supply
          chain experiences from port to porch.
        </p>
        <div className="flex justify-center mt-5">
          <button className="mr-5 bg-white border-2 border-[#00ff00] p-2 px-5 hover:bg-[#00ff00] hover:text-white rounded-md">
            Learn more
          </button>
          <button className=" bg-white border-2 border-[#00ff00] p-2 px-5 hover:bg-[#00ff00] hover:text-white rounded-md">
            Get a quote
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-3xl">
          ARE YOU A <span className="text-[#00ff00] font-bold">CARRIER?</span>
        </h3>
        <p className="pt-5">
          As a non-asset provider, NTG partners with <span>carriers</span>{" "}
          across all modes to service over 14,000 shippers. With thousands of
          weekly shipments, wherever you want to go, we have the load to get you
          there...and wherever you need to go next.
        </p>
        <div className="flex justify-center mt-5 ">
          <button className="mr-5 bg-white border-2 border-[#00ff00] p-2 px-5 hover:bg-[#00ff00] hover:text-white rounded-md">
            Learn more
          </button>
          <button className="bg-white border-2 border-[#00ff00] p-2 px-5 hover:bg-[#00ff00] hover:text-white rounded-md">
            Get a rep
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipperCarrier;
