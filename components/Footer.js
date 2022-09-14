import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";
import logo from "../images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <div className="w-1/5 hover:scale-110 transition-all">
              <Image src={logo} alt="logo" />
            </div>
            <span className="ml-3 text-xl text-[#00ff00]">Alpha Trucking</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            The Power of a Great Team
          </p>
          <p className="mt-2 text-sm text-gray-500">Let’s Work Together</p>
          <p className="mt-2 text-sm text-gray-500">PO BOX 700693</p>
          <p className="mt-2 text-sm text-gray-500">Saint Cloud, Florida</p>
          <p className="mt-2 text-sm text-gray-500">Info@thealphafleet.com</p>
          <p className="mt-2 text-sm text-gray-500">
            <a href="tel:888-613-9009">Tel: 888-613-9009</a>
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#00ff00] tracking-widest text-sm mb-3">
              Quick links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">Tracking</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Get Activated</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#00ff00] tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#00ff00] tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#00ff00] tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2022 Alpha Trucking —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-500 ml-1"
              rel="noopener noreferrer"
              target="_blank">
              @Eric Perdomo Jr.
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
