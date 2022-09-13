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
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Over />
      <Solutions />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
