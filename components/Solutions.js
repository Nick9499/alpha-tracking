import React from "react";

const Solutions = () => {
  return (
    <div className="p-10 md:p-5 lg:p-10 ">
      <h4 className="text-2xl md:text-3xl  text-center mb-10">
        Alpha Dispatch <span className="text-[#00ff00]">Solutions</span>
      </h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 ">
        <div className="md:pb-3 md:p-10 pb-10 ">
          <h5 className=" text-xl md:text-2xl">Full Truckload</h5>
          <div className="flex mb-5">
            <hr className=" mt-3 w-1/3 bg-[#00ff00] border-2 border-[#00ff00]" />
            <hr className=" mt-3 w-1/5 bg-black border-2 border-black" />
          </div>
          <p className="mt-2">
            Anything and everything over the road, NTG can help your supply
            chain at a moment’s notice.
          </p>
        </div>
        <div className="md:pb-3 md:p-10 pb-10">
          <h5 className=" text-xl md:text-2xl">Less Than Truckload</h5>
          <div className="flex mb-5">
            <hr className=" mt-3 w-1/3 bg-[#00ff00] border-2 border-[#00ff00]" />
            <hr className=" mt-3 w-1/5 bg-black border-2 border-black" />
          </div>
          <p className="mt-2">
            Negotiated pricing with the best regional and national LTL carriers.
          </p>
        </div>
        <div className="md:pb-3 md:p-10 pb-10">
          <h5 className=" text-xl md:text-2xl">Final Mile</h5>
          <div className="flex mb-5">
            <hr className=" mt-3 w-1/3 bg-[#00ff00] border-2 border-[#00ff00]" />
            <hr className=" mt-3 w-1/5 bg-black border-2 border-black" />
          </div>
          <p className="mt-2">
            Explore final mile logistics solutions tailored to meet your
            shipping needs.
          </p>
        </div>
        <div className="md:pb-3 md:p-10 pb-10">
          <h5 className=" text-xl md:text-2xl">Drayage</h5>
          <div className="flex mb-5">
            <hr className=" mt-3 w-1/3 bg-[#00ff00] border-2 border-[#00ff00]" />
            <hr className=" mt-3 w-1/5 bg-black border-2 border-black" />
          </div>
          <p className="mt-2">
            Servicing all major ports and railheads in the U.S and Canada.
          </p>
        </div>
        <div className="md:pb-3 md:p-10 pb-10">
          <h5 className=" text-2xl">Warehousing solutions</h5>
          <div className="flex mb-5">
            <hr className=" mt-3 w-1/3 bg-[#00ff00] border-2 border-[#00ff00]" />
            <hr className=" mt-3 w-1/5 bg-black border-2 border-black" />
          </div>
          <p className="mt-2">
            Warehouse network of over 5,000 locations in North America.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
