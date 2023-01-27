import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import solar from "../images/p5.jpg";
import bator from "../images/p10.jpg";
import street from "../images/Street.jpg";

import Navs from "../components/Navs";
import Footer from "../components/Footer";
import WhatsappIcon from "../components/WhatsappIcon";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Navs />
      <div className="container shadow p-3 mb-5 bg-body-tertiary rounded">
        <h2 className="text-center fw-bold text-decoration-underline">
          Products
        </h2>
        <div
          className="row g-4"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div className=" col md-col-6">
            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src={street} />
              <Card.Body>
                <Card.Title>Solar Street Lights</Card.Title>
                <Card.Text>
                  Solar energy is the real 100% power saving .No bills just free
                  beautiful light at night. We can light up your surroundings
                  with solar lights. Buy from as at minimum cost <br />
                  1. 60w = K750, 2. 90w = k950, 3. 120w = k1350, 4. 150w =
                  k1500, 6. 200w = k2000. <br />
                  We have high quality and free installation.
                </Card.Text>

                <Link to="/request-form">
                  {" "}
                  <Button variant="primary"> Order</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className=" col md-col-6">
            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src={solar} />
              <Card.Body>
                <Card.Title>Solar Kits</Card.Title>
                <Card.Text>
                  Small and medium sized solar kits. Comes with light bulbs,
                  recharble battery and USb ports
                </Card.Text>
                <Link to="/request-form">
                  {" "}
                  <Button variant="primary"> Order</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className=" col md-col-6">
            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src={bator} />
              <Card.Body>
                <Card.Title>Egg Incubators</Card.Title>
                <Card.Text>
                  176 egg capacity automatic turning is k4650. <br />
                  110 egg capacity manual turning is k1650
                </Card.Text>
                <Link to="/request-form">
                  {" "}
                  <Button variant="primary"> Order</Button>
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

export default Products;
