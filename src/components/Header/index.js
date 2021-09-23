import React from "react";
import "./style.css";

function Header() {
  return (
    <header>
      <img
        src={require("../../images/header.png").default}
        alt="header"
        className="img-fluid borderW border-danger"
      />
    </header>
  );
}

export default Header;
