import { useEffect, useRef, useState } from "react";
import "./ProductFilter.scss";

const FilterTags = () => {
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
    <div className="filter-block filter-block-tags" ref={filterRef}>
      <h3
        className={`filter-block-ttl ${isFilterVisible ? "active" : ""}`}
        onClick={handleFilterVisibility}
      >
        popular tag
      </h3>
      <div className={`filter-block-content ${isFilterVisible ? "show" : ""}`}>
        <div className="filter-block-taglist">
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">Game</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">iPhone</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">TV</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">Asus Laptops</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">Macbook</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">SSD</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">Graphics Card</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">Power Bank</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">Smart TV</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">Speaker</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">Tablet</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">Microwave</span>
          </div>
          <div className="filter-tag-item">
            <input type="checkbox" />
            <span className="tag-item-lbl">Samsung</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTags;
