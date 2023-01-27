import React from "react";

import Navs from "../components/Navs";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
const About = () => {
  return (
    <div>
      <Navs />
      <div className="text-center card shadow p-3 mb-5 bg-body-tertiary rounded">
        <h2 className="fw-bold text-decoration-underline">About Us</h2>
        <p className="">
          EL'S WORTH has highly qualified enginners in the filed of HVAC and you
          can trust us to design, install, service and repair your aircon units
          in your homes, shops offices and ware houses
        </p>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default About;
