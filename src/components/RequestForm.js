import React from "react";
import Footer from "./Footer";
import Navs from "./Navs";
import { useNavigate } from "react-router-dom";

const RequestForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  function handleSub() {
    alert("Thank you for Your Order.  We will contact you shortly");
    navigate("/");
  }
  return (
    <div>
      <Navs />
      <div className="container text-center d-flex  justify-content-center mt-3">
        <form
          className="card d-flex flex-col text-center pt-10 shadow align-items-center"
          onSubmit={handleSubmit}
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-center ps-5 pe-5 mt-3">
            Complete your Order/Request
          </h5>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="097/096/095"
              style={{ height: "50px", width: "300px" }}
            />
            <label for="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="location"
              style={{ height: "50px", width: "300px" }}
            />
            <label for="floatingPassword">Location</label>
          </div>
          <div className="form-floating mt-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "200px", width: "300px" }}
            ></textarea>
            <label for="floatingTextarea2">Message</label>
          </div>
          <button
            onClick={handleSub}
            className="btn btn-primary mt-3 mb-3"
            style={{ width: "200px" }}
          >
            Complete
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RequestForm;
