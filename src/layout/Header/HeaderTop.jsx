import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  RedditLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./Header.scss";

const HeaderTop = () => {
  return (
    <div className="comp-header-top">
      <div className="container">
        <div className="seg-top">
          <div className="elem-greet">
            <p className="text">Welcome to Clicon online eCommerce store.</p>
          </div>

          <div className="elem-scmedia-nd-drops">
            {/* social media */}
            <div className="elem-scmedia">
              <p className="label-text">Follow us:</p>
              <ul className="links-list">
                <li className="link-item">
                  <Link to="/" className="link">
                    <TwitterLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/" className="link">
                    <FacebookLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/" className="link">
                    <PinterestLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/" className="link">
                    <RedditLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/" className="link">
                    <YoutubeLogo size={16} weight="fill" />
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/" className="link">
                    <InstagramLogo size={16} weight="fill" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="elem-sep-line"></div>
            {/* dropdowns - lang and currency */}
            <div className="elem-drops">
              <div className="dropdown drop-lang">
                <div className="drop-active">
                  <span className="drop-active-text">eng</span>
                  <span className="drop-active-icon">
                    <CaretDown size={16} />
                  </span>
                </div>
              </div>
              <div className="dropdown drop-currency">
                <div className="drop-active">
                  <span className="drop-active-text">usd</span>
                  <span className="drop-active-icon">
                    <CaretDown size={16} />
                  </span>
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
