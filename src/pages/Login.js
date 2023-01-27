import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navs from "../components/Navs";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          className="card d-flex flex-col text-center pt-10 shadow align-items-center"
          onSubmit={handleSubmit}
          style={{ maxWidth: "300px" }}
        >
          <h3 className="fw-bold text-center">Login</h3>

          <div>
            <label>Email:</label>
            <input
              type="email"
              className="ps-1 pt-1 m-1 border rounded"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              className="ps-1 pt-1 m-1 border rounded"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            onClick={handleDirect}
            className="btn btn-primary mt-3"
            style={{ width: "200px" }}
          >
            Login
          </button>
          <p className="pt-5">
            If you don't have an Account.{" "}
            <Link to="/signup" className="t">
              Sign up Here
            </Link>{" "}
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
