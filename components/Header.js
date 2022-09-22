import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { about, carrier, shipper } from "../helpers/dropdown";
import { useRouter } from "next/router";
import logo from "../images/logo.png";
import Image from "next/image";
import { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  // useEffect(() => {
  //   console.log(window.scrollY);
  // }, [window.scrollY]);

  const router = useRouter();
  return (
    <div className="fixed  w-full z-10 ">
      <Popover className="relative  no-underline  bg-[#1f212c]">
        <div className="max-w-5xl mx-auto px-2 ">
          <div className="flex justify-between items-center border-gray-100 py-1 md:justify-start md:space-x-10 bg-transparent">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a onClick={() => router.push("/")}>
                <span className="sr-only">Workflow</span>
                <div className="w-1/12 lg:w-1/4">
                  <Image
                    src={logo}
                    alt="logo"
                    className="hover:scale-105 hover:transition-all "
                  />
                </div>
              </a>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00ff00]">
                <span className="sr-only">Open menu</span>
                <MenuIcon
                  className="h-6 w-6 md:h-10 md:w-10"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden lg:flex space-x-10">
              {/* <a
                href="#home"
                className="cursor-pointer text-base font-medium text-white hover:opacity-80 no-underline">
                Home
              </a> */}
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-base font-medium text-white hover:opacity-80 no-underline">
                Home
              </Link>
            </Popover.Group>
            <Popover.Group as="nav" className="hidden lg:flex space-x-10">
              <Link
                to="services"
                className="cursor-pointer text-base font-medium text-white hover:opacity-80 no-underline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Services
              </Link>
            </Popover.Group>
            <Popover.Group as="nav" className="hidden lg:flex space-x-10">
              <Link
                to="solutions"
                className="cursor-pointer text-base font-medium text-white hover:opacity-80 no-underline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Solutions
              </Link>
            </Popover.Group>
            <Popover.Group as="nav" className="hidden lg:flex space-x-10">
              <Link
                to="testimonials"
                className="cursor-pointer text-base font-medium text-white hover:opacity-80 no-underline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Testimonials
              </Link>
            </Popover.Group>
            <Popover.Group as="nav" className="hidden lg:flex space-x-10">
              <Link
                to="contact"
                className="cursor-pointer text-base font-medium text-white hover:opacity-80 no-underline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Contact Us
              </Link>
            </Popover.Group>
            <Popover.Group as="nav" className="hidden lg:flex space-x-10">
              <a
                onClick={() => router.push("/tracking")}
                className="cursor-pointer text-base font-medium text-white hover:opacity-80 no-underline">
                Tracking
              </a>
            </Popover.Group>
            <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-md  text-base font-medium text-white bg-[#00ff00] hover:scale-105 hover:transition-all no-underline">
                Call Us
              </a>
            </div>
            <div id="google_translate_element"></div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="w-1/12 lg:w-1/6 ">
                    <Image
                      src={logo}
                      alt="logo"
                      style={{ width: "50px" }}
                      className="hover:scale-105 hover:transition-all"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00ff00]">
                      <span className="sr-only">Close menu</span>
                      <XIcon
                        className="h-6 w-6 md:h-10 md:w-10"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <Popover.Group as="nav" className=" md:flex space-x-10">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              "text-gray-900",
                              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none  "
                            )}>
                            <span>Shipper</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1">
                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {shipper.map((item) => (
                                    <a
                                      key={item.name}
                                      onClick={() => {}}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 no-underline">
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
                </div>
                <div className="mt-6">
                  <Popover.Group as="nav" className=" md:flex space-x-10">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              "text-gray-900",
                              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
                            )}>
                            <span>Carrier</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1">
                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {carrier.map((item) => (
                                    <a
                                      key={item.name}
                                      onClick={() => {}}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 no-underline">
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
                </div>
              </div>
              <div className=" px-5 space-y-6">
                <div className="grid  gap-y-4 gap-x-8">
                  <a
                    onClick={() => {}}
                    className="text-base font-medium text-gray-900 hover:text-gray-700 no-underline">
                    Beon™ Platform
                  </a>
                </div>
                <div className="grid  gap-y-4 gap-x-8">
                  <a
                    onClick={() => {}}
                    className="text-base font-medium text-gray-900 hover:text-gray-700 no-underline">
                    Resources
                  </a>
                </div>
                <div className="mt-6">
                  <Popover.Group as="nav" className=" md:flex space-x-10">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              "text-gray-900",
                              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
                            )}>
                            <span>About Us</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1">
                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {about.map((item) => (
                                    <a
                                      key={item.name}
                                      onClick={() => {}}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 no-underline">
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
                </div>
                <div>
                  <a
                    href="#"
                    className="ml-2 mb-5 w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-md  text-base font-medium text-white no-underline bg-[#00ff00]">
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
