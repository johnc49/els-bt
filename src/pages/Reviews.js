import React from "react";
import dp from "../images/dp.png";

import Navs from "../components/Navs";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";

const Reviews = () => {
  return (
    <div>
      <Navs />
      <div className=" text-center shadow p-3 mb-5 bg-body-tertiary rounded">
        <h2 className="fw-bold text-decoration-underline">Reviews</h2>
        <h4 className="fw-semibold">What our Clients Say about Our Services</h4>
        <div className=" d-flex flex-md-row flex-column justify-content-between align-items-center  text-center">
          <div
            className="  bg-light rounded"
            style={{ width: "250px", marginTop: "30px" }}
          >
            <img
              src={dp}
              className=" mt-2"
              style={{ width: "64px", height: "64px", borderRadius: "50px" }}
              alt=""
            />
            <h5 className="text-lg font-bold">Derick</h5>
            <p className="text-sm text-darkGrayishBlue">
              "the best company which sorted out all my issues"
            </p>
          </div>
          <div
            className="  bg-light rounded"
            style={{ width: "250px", marginTop: "30px" }}
          >
            <img
              src={dp}
              className=" mt-2"
              style={{ width: "64px", height: "64px", borderRadius: "50px" }}
              alt=""
            />
            <h5 className="text-lg font-bold">Mathew</h5>
            <p className="text-sm text-darkGrayishBlue">
              “ EL'S provides quality services”
            </p>
          </div>
          <div
            className="  bg-light rounded"
            style={{ width: "250px", marginTop: "30px" }}
          >
            <img
              src={dp}
              className=" mt-2"
              style={{ width: "64px", height: "64px", borderRadius: "50px" }}
              alt=""
            />
            <h5 className="text-lg font-bold">Richard</h5>
            <p className="text-sm text-darkGrayishBlue">
              “I always buy my solar equipments from this company, its
              realiable.”
            </p>
          </div>
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Reviews;
