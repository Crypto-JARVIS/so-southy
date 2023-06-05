import React from "react";
import logo from "../../Images/logo.png"
import cstyles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav>
                <div className="container-fluid">
                    <a className="navbar-brand" href="www.google.com">
                        <img src={logo} className={cstyles.logo} alt="logo"/>
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;