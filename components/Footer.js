import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";
import logo from "../images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-10 bg-[#1f212c] grid md:grid-cols-3 text-white">
      <div>
        <div className="w-1/6">
          <Image src={logo} alt="logo" />
        </div>
        <h5 className="text-xl mt-5 mb-5">Alpha Dispatch</h5>
        <p className="text-sm mb-2">PO BOX 700693</p>
        <p className="text-sm mb-2">Saint Cloud, Florida</p>
        <p className="text-sm mb-2">Info@thealphafleet.com</p>
        <a href="tel:770-509-9611" className="text-sm mb-2">
          <span>
            <PhoneIcon className="text-[#00ff00] w-6 h-6 inline" /> 888-613-9009
          </span>
        </a>
      </div>
      <div>
        <h5 className="text-xl mt-5 mb-5 text-[#00ff00] font-semibold">
          Quick links
        </h5>
        <p className="text-sm mb-4 hover:opacity-70">Shippers</p>
        <p className="text-sm mb-4 hover:opacity-70">Carriers</p>
        <p className="text-sm mb-4 hover:opacity-70">Resources</p>
        <p className="text-sm mb-4 hover:opacity-70">About</p>
        <p className="text-sm mb-4 hover:opacity-70">Contact</p>
        <p className="text-sm mb-4 hover:opacity-70">Terms of use</p>
      </div>
      <div>
        <h5 className="text-xl mt-5 mb-5 text-[#00ff00] font-semibold">
          Customer Resources
        </h5>
        <p className="text-sm mb-4 hover:opacity-70">pay invoice</p>
        <p className="text-sm mb-4 hover:opacity-70">request a quote</p>
        <p className="text-sm mb-4 hover:opacity-70">credit application</p>
        <p className="text-sm mb-4 hover:opacity-70">terms and condition</p>
      </div>
    </div>
  );
};

export default Footer;
