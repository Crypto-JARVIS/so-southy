import React from "react";
import logo from "../../Images/logo.png";
import cstyles from "./Navbar.module.css";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <React.Fragment>
      <Topbar/>
      <nav className={"navbar" + " " + cstyles.bar}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className={cstyles.logo} alt="logo" />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
