import {
  ArrowsCounterClockwise,
  CaretDown,
  Headphones,
  Info,
  MapPinLine,
  PhoneCall,
} from "@phosphor-icons/react";
import CategoryPopup from "../../components/widgets/CategoryPopup/CategoryPopup";
import "./Header.scss";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="comp-header-bottom">
      <div className="container">
        <div className="seg-bottom">
          <div className="elem-category">
            <div className="category-toggle-btn">
              <span className="btn-text">All Category</span>
              <span className="btn-icon">
                <CaretDown size={16} />
              </span>
            </div>
            <CategoryPopup />
          </div>
          <div className="elem-utils">
            <ul className="link-list">
              <li className="link-item">
                <Link to="/" className="link">
                  <span className="link-icon">
                    <MapPinLine size={16} />
                  </span>
                  <div className="link-text">Track Order</div>
                </Link>
              </li>
              <li className="link-item">
                <Link to="/" className="link">
                  <span className="link-icon">
                    <ArrowsCounterClockwise size={16} />
                  </span>
                  <div className="link-text">Compare</div>
                </Link>
              </li>
              <li className="link-item">
                <Link to="/" className="link">
                  <span className="link-icon">
                    <Headphones size={16} />
                  </span>
                  <div className="link-text">Customer Support</div>
                </Link>
              </li>
              <li className="link-item">
                <Link to="/" className="link">
                  <span className="link-icon">
                    <Info size={16} />
                  </span>
                  <div className="link-text">Need Help</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="elem-contact">
            <span className="contact-icon">
              <PhoneCall size={20} />
            </span>
            <span className="contact-text">+1-202-555-0104</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
