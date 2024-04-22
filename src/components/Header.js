import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="ct-header-container">
      <div className="ct-logo-icon-container">
        <div className="ct-logo-container">
          <p className="ct-logo item-display">C</p>
          <i class="bi bi-list item-display-hide"></i>
          <p className="ct-logo-text">Crypto Tracker</p>
        </div>
        <div className="ct-search-burger-icon-container">
          <i class="bi bi-search  item-display"></i>
          <i class="bi bi-list  item-display"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
