import React, { useEffect, useState } from "react";
import "./CryptoData.css";
import axios from "axios";
import MobilePopup from "./MobilePopup";
const CryptoData = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleModalOpen = (id) => {
    setModalOpen(!modalOpen);
    setId(id);
    document.body.classList.toggle("modal-open");
  };
  const handleModalClose = () => {
    setModalOpen(!modalOpen);
    setId("");
    document.body.classList.toggle("modal-open");
  };
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const apiUrl = "https://api.coingecko.com/api/v3/coins/markets";
      const params = {
        vs_currency: "inr",
        order: "market_cap_desc",
        per_page: 10,
        page: page,
        sparkline: false,
        price_change_percentage: "24h,7d",
      };

      const response = await axios.get(apiUrl, { params });
      setData(response.data);
      // Update total pages based on response headers
      const totalPagesHeader = response.headers["total-pages"];
      setTotalPages(parseInt(totalPagesHeader, 10) || 1);
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
  const handlePageChange = (page) => {
    const newPage = Math.max(1, page);
    setCurrentPage(newPage);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="ct-crypto-data-container">
        <ul className="ct-data-title ct-data-main-title">
          <li className="ct-data-index ct-data-text-align item-display">
            <p>#</p>
          </li>
          <li className="ct-data-name ct-data-name-text">
            <p>Name</p>
          </li>
          <li className="ct-data-price ct-data-text-align">
            <p>Price</p>
          </li>
          <li className="ct-data-percent ct-data-text-align">
            <p>
              24H <i class="bi bi-arrow-down"></i>
            </p>
          </li>
          <li className="ct-data-percent ct-data-text-align item-display">
            <p>7D</p>
          </li>
          <li className="ct-data-market-cap ct-data-text-align item-display">
            <p>market Cap</p>
          </li>
          <li className="ct-data-market-cap ct-data-text-align item-display">
            <p>Volume(24H)</p>
          </li>
          <li className="ct-data-market-cap ct-data-text-align item-display">
            <p>Circulating Supply</p>
          </li>
          <li className="ct-empty-dat item-display"></li>
        </ul>
        {data.map((item) => (
          <ul
            className="ct-data-title"
            onClick={() => {
              if (isMobile) {
                handleModalOpen(item.id);
              }
            }}
          >
            <li className="ct-data-index ct-data-opacity ct-data-text-align item-display">
              <p className="ct-data-index-number-container">
                <span>
                  <i class="bi bi-star"></i>
                </span>
                <span>{item.market_cap_rank}</span>
              </p>
            </li>

            <li className="ct-data-name ct-data-name-box">
              <span className="item-display-hide ct-data-opacity">
                <i class="bi bi-star star-icon"></i>
              </span>
              <img src={item.image} style={{ width: "20px" }} alt="logo" />
              <p>
                {item.name}{" "}
                <span className="ct-data-symbol ct-data-opacity">
                  {item.symbol}
                </span>
              </p>
            </li>
            <li className="ct-data-price ct-data-text-align">
              <p>${formatNumberToInternational(item.current_price)}</p>
            </li>
            <li className="ct-data-percent ct-data-down-percent ct-data-text-align">
              <p>
                <span>
                  <i class="bi bi-caret-down-fill "></i>
                </span>
                <span>
                  {formatToPercentage(
                    item.price_change_percentage_24h_in_currency
                  )}
                </span>
              </p>
            </li>
            <li className="ct-data-percent ct-data-up-percent ct-data-text-align item-display">
              <span>
                <i class="bi bi-caret-up-fill"></i>
              </span>
              <span>
                {formatToPercentage(
                  item.price_change_percentage_7d_in_currency
                )}
              </span>
            </li>
            <li className="ct-data-market-cap ct-data-text-align item-display">
              <p>${formatNumberToInternational(item.market_cap)}</p>
            </li>
            <li className="ct-data-market-cap ct-data-text-align item-display">
              <p>${formatNumberToInternational(item.total_volume)}</p>
              <p className="ct-data-market-cap-24h ct-data-opacity ct-data-high">
                {" "}
                {formatNumberToInternational(item.high_24h)}
                <span className="ct-data-symbol ">{item.symbol}</span>
              </p>
            </li>
            <li className="ct-data-market-cap ct-data-text-align item-display">
              <div>
                <p>{formatNumberToInternational(item.circulating_supply)}</p>
                <div className="ct-data-filled-container">
                  <div className="ct-data-filled">
                    <div className="ct-data-remain"></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="ct-empty-dat ct-data-text-align item-display">
              <div>
                <i class="bi bi-three-dots-vertical"></i>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <div className="ct-pagination-container">
        <div
          className="ct-pagination-previous-box next-page"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i class="bi bi-chevron-left"></i>
        </div>
        <div className="ct-pagination-previous-box current-page">
          <p>{currentPage}</p>
        </div>
        <div
          className="ct-pagination-previous-box  previous-page"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <i class="bi bi-chevron-right"></i>
        </div>
      </div>
      {modalOpen && (
        <MobilePopup data={data} id={id} handleModalClose={handleModalClose} />
      )}
    </div>
  );
};

export default CryptoData;
