import React, { useState } from "react";
import { MailOpenIcon, ArrowsExpandIcon } from "@heroicons/react/outline";
import {
  DotsCircleHorizontalIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import Map from "../Map";

const TrackingBody = () => {
  const [tracking, setTracking] = useState(false);

  const handleTracking = () => {
    setTracking(true);
  };
  return (
    <div className="p-20">
      <div className="flex justify-between mb-5">
        <h4 className="uppercase text-2xl font-bold">Shippment Tracking</h4>
        <button className="uppercase text-blue-400 font-bold hover:scale-105 hover:transition-all">
          <span className="mr-3">
            <MailOpenIcon className="h-5 w-6 inline text-blue-400" />
          </span>
          <span className="text-sm">give us feedback</span>
        </button>
      </div>
      <div>
        <input
          placeholder="Shipment Id"
          className="border-2 p-2 border-blue-400 outline-none w-1/3 rounded-md "
        />
        <button
          className="uppercase ml-3 bg-blue-400 p-2 text-white rounded-md hover:scale-105 hover:transition-all"
          onClick={handleTracking}>
          track shipment
        </button>
      </div>
      {tracking && (
        <>
          <div className="mt-10 grid grid-cols-2 gap-10">
            <div>
              <h5 className="uppercase font-bold border-b-2 border-b-black">
                shipment details
              </h5>
              <div>
                <div className="flex justify-between">
                  <p className="">Mode</p>
                  <p className="">AT PO</p>
                  <p className="">Ship Date</p>
                  <p className="">Delivery Date</p>
                  <p className="">Status</p>
                  <p className="">First Pickup</p>
                  <p className="">Final Drop</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className=" text-sm">FTL</p>
                    <p className="pl-5 text-sm">276338</p>
                    <p className="pr-3 text-sm">06/07/2022</p>
                    <p className=" text-sm">10/07/2022</p>
                    <p className=" text-sm">Delivered</p>
                    <p
                      className=" text-sm"
                      title="AJM Nursery inc, Southwest 177th Avenue, Homestead, FL">
                      Homestead, FL
                    </p>
                    <p
                      className="text-sm"
                      title="102 Lauman Ln, Hicksville, NY 11801">
                      Hicksville, NY 11801
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span>
                  <ArrowsExpandIcon className="h-5 w-6 inline " />
                  <span className="text-sm">Last Truck Location</span>
                </span>
                <span>
                  <DotsCircleHorizontalIcon className="h-5 w-6 inline text-blue-400" />
                  <span className="text-sm">Previous Location</span>
                </span>
                <span>
                  <LocationMarkerIcon className="h-5 w-6 inline text-green-400" />
                  <span className="text-sm">Current Location</span>
                </span>
              </div>
              <div className="flex justify-between mt-3">
                <span>
                  <LocationMarkerIcon className="h-5 w-6 inline text-blue-400" />
                  <span className="text-sm">First Pick</span>
                </span>
                <span>
                  <LocationMarkerIcon className="h-5 w-6 inline text-blue-800" />
                  <span className="text-sm">Additional Pick</span>
                </span>
                <span>
                  <LocationMarkerIcon className="h-5 w-6 inline text-purple-800" />
                  <span className="text-sm">Additional Drop</span>
                </span>
                <span>
                  <LocationMarkerIcon className="h-5 w-6 inline text-orange-800" />
                  <span className="text-sm">Final Drop</span>
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 mt-10">
            <Map />
          </div>
        </>
      )}
    </div>
  );
};

export default TrackingBody;
