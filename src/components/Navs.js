import { useState } from "react";
import { Link } from "react-router-dom";
import p1 from "../images/p1.jpg";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHome, AiOutlineShopping } from "react-icons/ai";
import {
  MdOutlineMiscellaneousServices,
  MdOutlinePermContactCalendar,
  MdOutlineChecklistRtl,
} from "react-icons/md";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { BiLogIn } from "react-icons/bi";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa";

const Navs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="container "
      style={{
        background: "rgb(223, 76, 157)",
      }}
    >
      <div className="row position-relative" style={{ height: "90px" }}>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <img
            className=""
            style={{
              height: "68px",
              width: "68px",
              borderRadius: "50px",
              marginLeft: "10px",
            }}
            src={p1}
            alt=""
          />
        </div>
        <div className="d-flex flex-column col-7 align-items-center justify-content-center ">
          <div
            className="   text-center"
            style={{ height: "60px", width: "300px", color: "white" }}
          >
            <p className="fs-4 fw-bold d-flex flex-column">
              EL'S WORTH{" "}
              <span className="fst-italic fs-6">Investments Limited</span>
            </p>
          </div>
          <div className="d-md-none position-absolute top-0 end-0">
            <FaBars className="fs-4" variant="primary" onClick={handleShow} />

            <Offcanvas
              placement="end"
              show={show}
              onHide={handleClose}
              style={{ width: "50%", background: "rgb(223, 76, 157)" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <p
                    className="fs-5 fw-bold d-flex flex-column"
                    style={{ color: "white" }}
                  >
                    EL'S WORTH{" "}
                    <span className="fst-italic fs-6">Investments Limited</span>
                  </p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div
                  className=" d-flex flex-column  fw-bold "
                  style={{ fontSize: "16px", marginTop: "-30px" }}
                >
                  <Link to="/" style={{ color: "black", marginTop: "15px" }}>
                    {" "}
                    <AiOutlineHome
                      className=""
                      style={{ color: "white" }}
                    />{" "}
                    Home
                  </Link>
                  <Link
                    to="/products"
                    style={{ color: "black", marginTop: "15px" }}
                  >
                    {" "}
                    <AiOutlineShopping
                      className=""
                      style={{ color: "white" }}
                    />
                    Products
                  </Link>
                  <Link
                    to="/services"
                    style={{ color: "black", marginTop: "15px" }}
                  >
                    {" "}
                    <MdOutlineMiscellaneousServices
                      className=""
                      style={{ color: "white" }}
                    />
                    Services
                  </Link>
                  <Link
                    to="/about"
                    style={{ color: "black", marginTop: "15px" }}
                  >
                    <MdOutlinePermContactCalendar
                      className=""
                      style={{ color: "white" }}
                    />
                    About
                  </Link>
                  <Link
                    to="/reviews"
                    style={{ color: "black", marginTop: "15px" }}
                  >
                    {" "}
                    <MdOutlineChecklistRtl
                      className=""
                      style={{ color: "white" }}
                    />
                    Reviews
                  </Link>
                  <div
                    className="fw-semibold d-flex"
                    style={{ marginTop: "20px" }}
                  >
                    <Link to="/login" style={{ color: "black" }}>
                      {" "}
                      <BiLogIn style={{ color: "white" }} />
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      style={{ color: "black", marginLeft: "15px" }}
                    >
                      Signup{" "}
                      <HiArrowLeftOnRectangle style={{ color: "white" }} />
                    </Link>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div
            className=" d-md-flex justify-content-between fw-bold w-100 d-none"
            style={{ fontSize: "16px" }}
          >
            <Link to="/" style={{ color: "black" }}>
              {" "}
              <AiOutlineHome className="" style={{ color: "white" }} /> Home
            </Link>
            <Link to="/products" style={{ color: "black" }}>
              {" "}
              <AiOutlineShopping className="" style={{ color: "white" }} />
              Products
            </Link>
            <Link to="/services" style={{ color: "black" }}>
              {" "}
              <MdOutlineMiscellaneousServices
                className=""
                style={{ color: "white" }}
              />
              Services
            </Link>
            <Link to="/about" style={{ color: "black" }}>
              <MdOutlinePermContactCalendar
                className=""
                style={{ color: "white" }}
              />
              About
            </Link>
            <Link to="/reviews" style={{ color: "black" }}>
              {" "}
              <MdOutlineChecklistRtl className="" style={{ color: "white" }} />
              Reviews
            </Link>
          </div>
        </div>
        <div className="col-3 d-md-flex flex-column align-items-center justify-content-around d-none">
          <div className="d-flex flex-row">
            <input
              style={{
                borderRadius: "50px",
                paddingLeft: "10px",
                border: "0px",
                outline: "none",
              }}
              type="text"
              placeholder="Search here...."
            />
            <BsSearch
              style={{
                marginLeft: "-25px",
                marginTop: "5px",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="fw-semibold" style={{ marginBottom: "-5px" }}>
            <Link to="/login" style={{ color: "black" }}>
              {" "}
              <BiLogIn style={{ color: "white" }} />
              Login
            </Link>
            <Link to="/signup" style={{ color: "black", marginLeft: "15px" }}>
              Signup <HiArrowLeftOnRectangle style={{ color: "white" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navs;
