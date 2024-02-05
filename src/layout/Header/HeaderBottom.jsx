import {
  ArrowsCounterClockwise,
  CaretDown,
  CaretUp,
  Headphones,
  Info,
  MapPinLine,
  PhoneCall,
} from "@phosphor-icons/react";
import CategoryPopup from "../../components/widgets/CategoryPopup/CategoryPopup";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./HeaderBottom.scss";

const HeaderBottom = () => {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const categoryRef = useRef(null);

  const handleCategoryVisibility = () => {
    setCategoryVisible(!categoryVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target;
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target) &&
        !clickedElement.closest(".category-toggle-btn")
      ) {
        setCategoryVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="comp-header-bottom">
      <div className="container">
        <div className="segment-bottom">
          <div className="header-bottom-category">
            <div
              className="category-toggle-btn"
              onClick={() => handleCategoryVisibility()}
            >
              <span className="btn-text">All Category</span>
              <span className="btn-icon">
                {categoryVisible ? (
                  <CaretUp size={16} />
                ) : (
                  <CaretDown size={16} />
                )}
              </span>
            </div>
            {categoryVisible && <CategoryPopup ref={categoryRef} />}
          </div>
          <div className="header-bottom-utils">
            <ul className="header-utils-list">
              <li className="header-utils-item">
                <Link to="/track_order">
                  <span className="header-utils-icon">
                    <MapPinLine size={16} />
                  </span>
                  <div className="header-utils-text">Track Order</div>
                </Link>
              </li>
              <li className="header-utils-item">
                <Link to="/compare">
                  <span className="header-utils-icon">
                    <ArrowsCounterClockwise size={16} />
                  </span>
                  <div className="header-utils-text">Compare</div>
                </Link>
              </li>
              <li className="header-utils-item">
                <Link to="/support">
                  <span className="header-utils-icon">
                    <Headphones size={16} />
                  </span>
                  <div className="header-utils-text">Customer Support</div>
                </Link>
              </li>
              <li className="header-utils-item">
                <Link to="/faq">
                  <span className="header-utils-icon">
                    <Info size={16} />
                  </span>
                  <div className="header-utils-text">Need Help</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-bottom-contact">
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
