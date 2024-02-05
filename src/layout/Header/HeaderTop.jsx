import {
  CaretDown,
  CaretUp,
  Check,
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  RedditLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { LangDropdown } from "../../components";
import { useEffect, useRef, useState } from "react";
import "./HeaderTop.scss";

const currencies = [
  {
    id: 1,
    name: "Dollar",
    symbol: "USD",
  },
  {
    id: 2,
    name: "Euro",
    symbol: "EUR",
  },
];

const HeaderTop = () => {
  const DEFAULT_CURRENCY = currencies[0];
  const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_CURRENCY);
  const [isDroplistEnabled, setDroplistEnabled] = useState(false);
  const currencyRef = useRef(null);

  const currencySelectHandler = (currency) => {
    setSelectedCurrency(currency);
    setDroplistEnabled(false);
  };

  const handleDroplistEnable = () => setDroplistEnabled(!isDroplistEnabled);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setDroplistEnabled(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="comp-header-top">
      <div className="container">
        <div className="segment-header-top">
          <p>Welcome to Clicon online eCommerce store.</p>
          <div className="header-top-right">
            {/* social media */}
            <div className="header-top-media">
              <p className="header-top-media-lbl">Follow us:</p>
              <ul className="header-top-media-list">
                <li className="header-top-media-item">
                  <Link to="/">
                    <TwitterLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="header-top-media-item">
                  <Link to="/">
                    <FacebookLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="header-top-media-item">
                  <Link to="/">
                    <PinterestLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="header-top-media-item">
                  <Link to="/">
                    <RedditLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="header-top-media-item">
                  <Link to="/">
                    <YoutubeLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="header-top-media-item">
                  <Link to="/">
                    <InstagramLogo size={16} weight="fill" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-top-line"></div>

            <div className="header-top-dropdowns">
              <LangDropdown />
              <div className="dropdown dropdown-currency" ref={currencyRef}>
                <div className="dropdown-active" onClick={handleDroplistEnable}>
                  <span className="dropdown-active-text">
                    {selectedCurrency.symbol}
                  </span>
                  <span className="dropdown-active-icon">
                    {isDroplistEnabled ? (
                      <CaretUp size={16} />
                    ) : (
                      <CaretDown size={16} />
                    )}
                  </span>
                </div>
                <div
                  className={`dropdown-list ${isDroplistEnabled ? "show" : ""}`}
                >
                  {currencies?.map((currency) => {
                    return (
                      <div
                        className="dropdown-item"
                        key={currency.id}
                        onClick={() => currencySelectHandler(currency)}
                      >
                        <span className="dropdown-item-text">
                          {currency.name}{" "}
                          <span className="abbr">({currency.symbol})</span>
                        </span>
                        <span className="dropdown-item-mark">
                          <Check size={16} />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
