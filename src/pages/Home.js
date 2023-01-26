import React from "react";
import air from "../images/air1.jpg";
import solar from "../images/p5.jpg";
import wiring from "../images/wiring.jpg";

import Navs from "../components/Navs";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="container ">
      <Navs />
      <div className="position-relative" style={{ height: "500px" }}>
        <div className="homep"></div>
        <div className="d-flex flex-column justify-content-around align-items-center w-100 h-100 position-absolute top-0 start-0">
          <div>
            <p className="fs-1 fw-bold fst-italic">Welcome To El's Worth</p>
            <p className="fs-4 fw-semibold fst-italic">
              For your electrical equipments and repairs
            </p>
          </div>
          <div>
            <Carousel className="slide">
              <Carousel.Item interval={3000}>
                <img className="slide" src={air} alt="First slide" />
                <Carousel.Caption>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Air Condition repairing.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="slide" src={solar} alt="Second slide" />
                <Carousel.Caption>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Solar kits
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="slide" src={wiring} alt="Third slide" />
                <Carousel.Caption>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Electrical wiring
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="d-flex fw-bold fs-5 mt-2">
        <Link to="products">
          Products <AiOutlineArrowRight />
        </Link>
        <Link className="ms-5" to="services">
          Services <AiOutlineArrowRight />
        </Link>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Home;
