import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { XIcon } from "@heroicons/react/outline";

const Contact = () => {
  const form = useRef();
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c3kgsvu",
        "template_784haoi",
        form.current,
        "Zhk74ERBgfeiwgtiT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhNumber("");
    setMessage("");
    setShow(true);
  };
  return (
    <form
      ref={form}
      className=" body-font relative"
      id="contact"
      onSubmit={sendEmail}>
      <div className="container px-5 py-24 mx-auto">
        {show && (
          <div
            class="bg-gray-300 rounded-lg py-3 px-3 mb-4 text-base text-gray-800 flex justify-between transition-opacity ease-in duration-700 opacity-100"
            role="alert">
            <p>A simple dark alert - check it out!</p>
            <XIcon
              className="h-6 w-6 "
              aria-hidden="true"
              onClick={() => setShow(false)}
            />
          </div>
        )}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 ">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Let’s Work Together
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm ">
                  First Name
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="name"
                  name="firstname"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#02F602] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm ">
                  Last Name
                </label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  id="name"
                  name="lastname"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#02F602] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm ">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#02F602] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm ">
                  Phone Number
                </label>
                <input
                  value={phNumber}
                  onChange={(e) => setPhNumber(e.target.value)}
                  type="number"
                  id="number"
                  name="phoneNumber"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#02F602] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm ">
                  Leave us a message...
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#02F602] focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-[#02F602] border-0 py-2 px-8 focus:outline-none hover:scale-110 transition-all rounded-md text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
