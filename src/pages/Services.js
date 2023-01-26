import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import air from "../images/air-repair.jpg";
import wire from "../images/wiring2.jpg";
import modern from "../images/modern.jpg";
import flood from "../images/flood.jpg";

import Navs from "../components/Navs";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";

const Services = () => {
  return (
    <div>
      <Navs />
      <div className="container shadow p-3 mb-5 bg-body-tertiary rounded">
        <h2 className="fw-bold text-center text-decoration-underline">
          Services
        </h2>
        <div
          className="row g-4"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div className="col-6">
            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src={air} />
              <Card.Body>
                <Card.Title>Air condition</Card.Title>
                <Card.Text>
                  We provide Air condition installation, servicing and repair
                </Card.Text>
                <Link to="/request-form">
                  {" "}
                  <Button variant="primary">Request</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src={wire} />
              <Card.Body>
                <Card.Title>Electrical wiring</Card.Title>
                <Card.Text>
                  We provide Domestic Electrical wiring including shops,
                  warehouses and offices.
                </Card.Text>
                <Link to="/request-form">
                  {" "}
                  <Button variant="primary">Request</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src={modern} />
              <Card.Body>
                <Card.Title>Modern Electrical Appliances</Card.Title>
                <Card.Text>
                  We do Modern Electrical Appliances installation,
                  troubleshooting and repair.
                </Card.Text>
                <Link to="/request-form">
                  {" "}
                  <Button variant="primary">Request</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src={flood} />
              <Card.Body>
                <Card.Title>Flood Lights</Card.Title>
                <Card.Text>
                  We do Solar security lights(flood lights) and installation
                </Card.Text>
                <Link to="/request-form">
                  {" "}
                  <Button variant="primary">Request</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Services;
