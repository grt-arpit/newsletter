import React from "react";
import {NavLink} from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://i.pinimg.com/originals/e5/3b/f0/e53bf02c0e739b9f60a6fef132599ad3.jpg"
                height="35"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              
              <li className="nav-item">
                <NavLink className="nav-link" to="signup">
                 SignUp
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="login">
                 LOGIN
                </NavLink>
              </li>
              
              <li className="nav-item">
              <NavLink className="nav-link" to="preview">
                 Preview
                </NavLink>
                </li>
                <li className="nav-item">
              <NavLink className="nav-link" to="dashboard">
                 Dashboard
                </NavLink>
              </li>
                <li className="nav-item">
              <NavLink className="nav-link" to="form">
                 Form
                </NavLink>
              </li>
              
            </ul>
          </div>

         
           
        </div>
      </nav>
    </div>
  );
};

export default Header;
