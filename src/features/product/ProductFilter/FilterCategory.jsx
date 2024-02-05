import { useEffect, useRef, useState } from "react";
import "./ProductFilter.scss";

const FilterCategory = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const filterRef = useRef(null);

  const handleFilterVisibility = () =>
    setIsFilterVisible((prevVal) => !prevVal);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-block filter-block-category" ref={filterRef}>
      <h3
        className={`filter-block-ttl ${isFilterVisible ? "active" : ""}`}
        onClick={handleFilterVisibility}
      >
        category
      </h3>
      <div className={`filter-block-content ${isFilterVisible ? "show" : ""}`}>
        <div className="filter-block-radlist">
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">electornics devices</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">computer & laptop</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">computer accessories</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">smartphone</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">headphone</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">mobile accessories</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">gaming console</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">camera & photo</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">TV & homes appliances</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">watchs & accessories</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">gps & navigation</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="category" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">warable technology</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
