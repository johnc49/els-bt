import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navs from "../components/Navs";
import Footer from "../components/Footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  function handleDirect() {
    navigate("/");
  }
  return (
    <div>
      <Navs />
      <div className="container text-center d-flex  justify-content-center mt-3">
        <form
          className="card d-flex flex-col text-center pt-10 shadow align-items-center ps-2 pe-2"
          onSubmit={handleSubmit}
          style={{ maxWidth: "600px" }}
        >
          <h3 className="fw-bold text-center">Sign up</h3>

          <div>
            {" "}
            <label>Name:</label>
            <input
              className="ps-1 pt-1 m-1 border rounded"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              className="ps-1 pt-1 m-1 border rounded"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              className="ps-1 pt-1 m-1 border rounded"
              type="password"
              placeholder="Create password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              className="ps-1 pt-1 m-1 border rounded"
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>

          <button onClick={handleDirect} className="btn btn-primary mt-3">
            Sign up
          </button>
          <p className="pt-5">
            Already have an account?{" "}
            <Link to="/login" className="">
              Login Here
            </Link>{" "}
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
