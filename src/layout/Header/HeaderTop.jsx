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
        <div className="seg-header-top">
          <div className="elem-top-greet">
            <p className="text">Welcome to Clicon online eCommerce store.</p>
          </div>

          <div className="elem-media-and-drops">
            {/* social media */}
            <div className="elem-media">
              <p className="media-lbl">Follow us:</p>
              <ul className="media-list">
                <li className="media-item">
                  <Link to="/">
                    <TwitterLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="media-item">
                  <Link to="/">
                    <FacebookLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="media-item">
                  <Link to="/">
                    <PinterestLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="media-item">
                  <Link to="/">
                    <RedditLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="media-item">
                  <Link to="/">
                    <YoutubeLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="media-item">
                  <Link to="/">
                    <InstagramLogo size={16} weight="fill" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="elem-sep-line"></div>

            <div className="elem-drops">
              <LangDropdown />
              <div className="dropdown drop-currency" ref={currencyRef}>
                <div className="drop-active" onClick={handleDroplistEnable}>
                  <span className="drop-active-text">
                    {selectedCurrency.symbol}
                  </span>
                  <span className="drop-active-icon">
                    {isDroplistEnabled ? (
                      <CaretUp size={16} />
                    ) : (
                      <CaretDown size={16} />
                    )}
                  </span>
                </div>
                <div className={`drop-list ${isDroplistEnabled ? "show" : ""}`}>
                  {currencies?.map((currency) => {
                    return (
                      <div
                        className="drop-item"
                        key={currency.id}
                        onClick={() => currencySelectHandler(currency)}
                      >
                        <span className="drop-item-text">
                          {currency.name}{" "}
                          <span className="abbr">({currency.symbol})</span>
                        </span>
                        <span className="drop-item-mark">
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
