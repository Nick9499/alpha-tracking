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

const DynamicHeaderWithNoSSR = dynamic(() => import("../components/Header"), {
  ssr: "false",
});
const Home = () => {
  return (
    <div className="scroll-smooth">
      <DynamicHeaderWithNoSSR />
      <Banner />
      <Services />
      <Join />
      <Over />
      <Solutions />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
