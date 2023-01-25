import React from "react";
import { FaEnvelope, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container " style={{ background: "darkgray" }}>
      <div>
        <p className="fw-bold">Contact Us:</p>
        <div>
          <ul className=" fw-semibold">
            <li style={{ marginTop: "15px" }}>
              {" "}
              <FaPhone style={{ marginRight: "5px" }} />
              <span>Phone Numbers: </span> 0968450326/ 0962795445
            </li>
            <li style={{ marginTop: "15px" }}>
              {" "}
              <FaFacebook style={{ marginRight: "5px" }} />
              <span>Facebook: </span> Els Worth
            </li>
            <li style={{ marginTop: "15px" }}>
              {" "}
              <FaWhatsapp style={{ marginRight: "5px" }} />
              <span>Whatsapp: </span> 0968450326
            </li>
            <li style={{ marginTop: "15px" }}>
              {" "}
              <FaEnvelope style={{ marginRight: "5px" }} />
              <span>Email: </span> Els@yahoo.com
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>Privacy Policy</p>
        <p>Copyright &copy; 2022, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
