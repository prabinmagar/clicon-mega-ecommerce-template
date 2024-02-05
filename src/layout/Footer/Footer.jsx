import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
import { ArrowRight } from "@phosphor-icons/react";
import { Icons } from "../../assets/icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="comp-footer">
      <div className="container">
        <div className="segment-footer">
          <div className="footer-item footer-info">
            <div className="info-brand">
              <img src={Images.LogoPrimary} alt="" />
            </div>
            <p className="info-support-lbl">Customer Supports:</p>
            <p className="info-support-no">(629) 555-10129</p>
            <p className="info-addr">
              4517 Washington Ave. <br /> Manchester, Kentucky 39495
            </p>
            <p className="info-mail">info@kinbo.com</p>
          </div>
          <div className="footer-item footer-categories">
            <h3 className="footer-item-ttl">top category</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="">Computer & Laptop</Link>
              </li>
              <li className="footer-link">
                <Link to="">Smartphone</Link>
              </li>
              <li className="footer-link">
                <Link to="">Headphone</Link>
              </li>
              <li className="footer-link">
                <Link to="">Accessories</Link>
              </li>
              <li className="footer-link">
                <Link to="">Camera & Photo</Link>
              </li>
              <li className="footer-link">
                <Link to="">TV & Homes</Link>
              </li>
            </ul>
            <Link to="/" className="link link-warning">
              <span className="link-text">Browse All Product</span>
              <span className="link-icon">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
          <div className="footer-item footer-qlinks">
            <h3 className="footer-item-ttl">quick links</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="">shop product</Link>
              </li>
              <li className="footer-link">
                <Link to="">shopping cart</Link>
              </li>
              <li className="footer-link">
                <Link to="">wishlist</Link>
              </li>
              <li className="footer-link">
                <Link to="">compare</Link>
              </li>
              <li className="footer-link">
                <Link to="">track order</Link>
              </li>
              <li className="footer-link">
                <Link to="">customer help</Link>
              </li>
              <li className="footer-link">
                <Link to="">about us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-item footer-apps">
            <h3 className="footer-item-ttl">download app</h3>
            <div className="apps-link">
              <Link className="app-link" to="/">
                <span className="app-link-icon">
                  <img src={Icons.GooglePlay} alt="" />
                </span>
                <span className="app-link-text">
                  <span className="text-xs">Get it now</span>
                  <span className="text-sm">Google Play</span>
                </span>
              </Link>
              <Link className="app-link" to="/">
                <span className="app-link-icon">
                  <img src={Icons.AppStore} alt="" />
                </span>
                <span className="app-link-text">
                  <span className="text-xs">Get it now</span>
                  <span className="text-sm">App Store</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="footer-item footer-tags">
            <h3 className="footer-item-ttl">popular tag</h3>
            <ul className="tags-links">
              <li className="tags-link">
                <Link to="/">Game</Link>
              </li>
              <li className="tags-link">
                <Link to="/">iPhone</Link>
              </li>
              <li className="tags-link">
                <Link to="/">TV</Link>
              </li>
              <li className="tags-link">
                <Link to="/">Asus Laptops</Link>
              </li>
              <li className="tags-link">
                <Link to="/">Mackbook</Link>
              </li>
              <li className="tags-link">
                <Link to="/">SSD</Link>
              </li>
              <li className="tags-link">
                <Link to="/">Graphics Card</Link>
              </li>
              <li className="tags-link">
                <Link to="/">Power Bank</Link>
              </li>
              <li className="tags-link">
                <Link to="/">Smart TV</Link>
              </li>
              <li className="tags-link">
                <Link to="/">Speaker</Link>
              </li>
              <li className="tags-link">
                <Link to="/">Tablet</Link>
              </li>
              <li className="tags-link">
                <Link to="/">Microwave</Link>
              </li>
              <li className="tags-link">
                <Link to="/">Samsung</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="segment-copyright">
          <p className="copyright-text ">
            Kinbo - eCommerce Template © 2021. Design by Templatecookie
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
