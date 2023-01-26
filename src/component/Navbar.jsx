import React from "react";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../auth/firebase";

import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  return (
    <div className="w-100">
      <nav className="navbar  bg-dark w-100 ">
        <div className="container-fluid text-white">
          <div className="d-flex  align-items-center">
            <Link className="navbar-brand  h1 text-white " to="/">
              Movie App
            </Link>
            <div>
              <span className="text-warning">{currentUser.displayName}</span>
            </div>
          </div>
          <div>
            {currentUser ? (
              <Link
                className="navbar-brand mb-0  text-white"
                to="/login"
                onClick={logOut}
              >
                Logout
              </Link>
            ) : (
              <Link className="navbar-brand mb-0  text-white" to="/login">
                Login
              </Link>
            )}

            <Link className="navbar-brand mb-0  text-white " to="/register">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
