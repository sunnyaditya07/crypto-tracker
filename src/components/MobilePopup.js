import React from "react";
import "./MobilePopup.css";

const MobilePopup = ({ data, id, handleModalClose }) => {
  const filteredData = data.find((item) => item.id === id);
  console.log(filteredData.id);

  function formatNumberToInternational(number) {
    const parts = number.toString().split(".");

    const integerWithCommas = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const numberWithCommas =
      parts.length === 2
        ? integerWithCommas + "." + parts[1]
        : integerWithCommas;

    return numberWithCommas;
  }

  function formatToPercentage(number) {
    const formattedNumber = Number(number).toFixed(2) + "%";
    return formattedNumber;
  }
  return (
    <div className="item-display-hide">
      <div className="ct-mobile-popup-container ">
        <div className="ct-mobile-popup-modal">
          <div className="ct-mobile-modal-cancel-box">
            <div className="ct-mobile-modal-crypto-title">
              <img
                src={filteredData.image}
                alt="logo"
                style={{ width: "30px" }}
              />
              <p>{filteredData.name}</p>
            </div>
            <i class="bi bi-x-lg" onClick={handleModalClose}></i>
          </div>
          <div className="ct-modal-data-container">
            <div>
              <p>PRICE</p>
              <p className="ct-modal-data-text">
                ${formatNumberToInternational(filteredData.current_price)}
              </p>
            </div>
            <div>
              <p>24H</p>
              <p className="ct-data-down-percent ct-modal-data-text">
                <span>
                  <i class="bi bi-caret-down-fill "></i>
                </span>
                <span>
                  {formatToPercentage(
                    filteredData.price_change_percentage_24h_in_currency
                  )}
                </span>
              </p>
            </div>
            <div>
              <p>7D</p>
              <p className="ct-data-up-percent ct-modal-data-text">
                <span>
                  <i class="bi bi-caret-down-fill "></i>
                </span>
                <span>
                  {" "}
                  {formatToPercentage(
                    filteredData.price_change_percentage_7d_in_currency
                  )}
                </span>
              </p>
            </div>
          </div>
          <div className="ct-modal-data-container">
            <div>
              <p>MARKET CAP</p>
              <p className="ct-modal-data-text">
                ${formatNumberToInternational(filteredData.market_cap)}
              </p>
            </div>
          </div>
          <div className="ct-modal-data-container">
            <div>
              <p>VOLUME (24H)</p>
              <p className="ct-modal-data-text">
                ${formatNumberToInternational(filteredData.total_volume)}
                <span className="ct-data-symbol ct-data-opacity ">
                  ({formatNumberToInternational(filteredData.high_24h)}{" "}
                  {filteredData.symbol})
                </span>
              </p>
            </div>
          </div>
          <div
            className="ct-modal-data-container"
            style={{ marginBottom: "10px" }}
          >
            <div>
              <p>CIRCULATING SUPPLY</p>
              <p className="ct-modal-data-text">
                {formatNumberToInternational(filteredData.circulating_supply)}{" "}
                <span style={{ textTransform: "uppercase" }}>
                  {filteredData.symbol}
                </span>
              </p>
              <div className="ct-data-filled-container">
                <div className="ct-data-filled">
                  <div className="ct-data-remain"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePopup;
