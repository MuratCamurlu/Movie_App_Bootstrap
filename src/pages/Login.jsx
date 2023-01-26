import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword, signIn, signUpWithGoogle } from "../auth/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(info.email, info.password, navigate);
  };

  return (
    <div className="logres">
      <div className="p-1 bg-danger rounded-5 ">
        <form
          onSubmit={handleSubmit}
          className="bg-dark text-center text-white  rounded-5 p-4  "
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              required
              type="password"
              className="form-control"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <span
              onClick={() => forgotPassword(info.email)}
              role="button"
              className="text-danger "
            >
              Forgot Password
            </span>
            <Link to="/register" className="text-danger ">
              Sign Up
            </Link>
          </div>
          <button type="submit" className="btn btn-danger mb-2">
            Login
          </button>
          <div>
            <button
              onClick={() => signUpWithGoogle(navigate)}
              type="button"
              className="p-2 bg-danger text-light rounded-3 border-0"
            >
              Continue With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
