import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, signUpWithGoogle } from "../auth/firebase";
const Register = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${info.firstName} ${info.lastName}`;
    //  navigate("/")
    createUser(info.email, info.password, navigate, displayName);
  };

  return (
    <div className="logres">
      <div className="p-1 mt-5 bg-danger rounded-5 ">
        <form
          onSubmit={handleSubmit}
          className="bg-dark text-center text-white  rounded-5 p-4  "
        >
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>
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
          <div className="mb-3">
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

          <button type="submit" className="btn btn-danger mb-2">
            Register
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

export default Register;
