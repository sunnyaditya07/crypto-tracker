import React from "react";
import "./Carousel.css";
const Carousel = () => {
  return (
    <div className="ct-carousel-container">
      <div className="ct-carousel-list-container">
        <div>
          <div className="ct-carousel-box">
            <div>
              <img src={require("../assets/N.png")} alt="n" />
            </div>
            <div className="ct-carousel-text-container">
              <p className="ct-carousel-title-text">Take a quiz!</p>
              <p className="ct-carousel-main-text">
                Track your trades in one place, not all over the place
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="ct-carousel-box">
            <div>
              <img src={require("../assets/gallery.png")} alt="n" />
            </div>
            <div className="ct-carousel-text-container">
              <p className="ct-carousel-title-text">Take a quiz!</p>
              <p className="ct-carousel-main-text">
                Track your trades in one place, not all over the place
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="ct-carousel-box">
            <div>
              <img src={require("../assets/portfolio.png")} alt="n" />
            </div>
            <div className="ct-carousel-text-container">
              <p className="ct-carousel-title-text">Take a quiz!</p>
              <p className="ct-carousel-main-text">
                Track your trades in one place, not all over the place
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="ct-carousel-crypto-text">
          Top 100 Cryptocurrencies by Market Cap
        </p>
      </div>
      <div className="ct-carousel-show-item-container">
        <div className="ct-carousel-show-rows-container">
          <p className="ct-carousel-item-list">
            <i class="bi bi-star ct-data-opacity "></i>
            <span>Favourites</span>
          </p>
          <p className="ct-carousel-item-list item-active">
            <span>CryptoCurrencies</span>
          </p>
          <p className="ct-carousel-item-list">
            <span>DeFi</span>
          </p>
          <p className="ct-carousel-item-list">
            <span>NFTs & Collectibles</span>
          </p>
        </div>
        <div className="ct-carousel-show-rows-container">
          <p>
            <span className="ct-data-opacity">Show rows</span>
          </p>
          <p className="ct-carousel-item-list">
            <span>100</span>
            <i class="bi bi-chevron-down"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
