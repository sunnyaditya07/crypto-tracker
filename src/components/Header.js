import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="ct-header-container">
      <div className="ct-logo-icon-container">
        <div className="ct-logo-container">
          <p className="ct-logo">C</p>
          <p className="ct-logo-text">Crypto Tracker</p>
        </div>
        <div className="ct-search-burger-icon-container">
          <i class="bi bi-search"></i>
          <i class="bi bi-list"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
