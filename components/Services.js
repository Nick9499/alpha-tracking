import React from "react";

const Services = () => {
  return (
    <div className="p-5 md:p-10 md:m-7">
      <h4 className="text-[#00ff00] md:text-lg text-center pb-5">SERVICES</h4>
      <h2 className="text-center text-2xl md:text-3xl pb-10 md:mb-10">
        Taking Your Business to <br /> the Next Level
      </h2>
      <div className="grid lg:grid-cols-3 gap-10 text-center ">
        <div className="md:px-10 mx-5 mb-10 md:mb-0">
          <p className="text-center mb-3">Keeping the Wheels Moving</p>
          <p className="text-lg">
            Allow us to focus on the backend work, so you can focus on doing
            what you do best. We specialize in communication, negotiation, data
            collection, and bookings.
          </p>
        </div>
        <div className="lg:px-10 mx-5 mb-10 md:mb-0">
          <p className="text-center mb-3">We Get it Done</p>
          <p className="text-lg">
            For years we have been managing the schedules for our clients. We
            cater to every part of the supply chain. The goal is to make sure we
            adapt accordingly.{" "}
          </p>
        </div>
        <div className="lg:px-10 mx-5 mb-10 md:mb-0">
          <p className="text-center mb-3">Supply Chain Optimization</p>
          <p className="text-lg">
            Supply Chain Optimization We pride ourselves in being a bridge that
            connects everyone in the supply chain. Our main priority is
            optimization. In order to do that, is to run a team 24 hours a day 7
            days a week. To make sure every need is met.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
