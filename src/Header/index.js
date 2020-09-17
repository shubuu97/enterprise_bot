import React from "react";
import Logo from "../assests/images/logo.png";
import "./style.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            Enterprise Bot
        </div>
    );
};

export default Header;
