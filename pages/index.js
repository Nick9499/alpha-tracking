import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ShipperCarrier from "../components/ShipperCarrier";
import Over from "../components/Over";
import Solutions from "../components/Solutions";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Join from "../components/Join";
import dynamic from "next/dynamic";
import LoadBoard from "../components/LoadBoard";
import Frieght from "../components/Frieght";

const DynamicHeaderWithNoSSR = dynamic(() => import("../components/Header"), {
  ssr: "false",
});
const Home = () => {
  return (
    <div className="scroll-smooth">
      <DynamicHeaderWithNoSSR />
      <Banner />
      <Services />
      <Over />
      <Solutions />
      <Join />
      <Frieght />
      <LoadBoard />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
