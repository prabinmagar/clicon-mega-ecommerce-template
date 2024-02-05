import { Check } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const FilterBrands = () => {
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
    <div className="filter-block filter-block-brands" ref={filterRef}>
      <h3
        className={`filter-block-ttl ${isFilterVisible ? "active" : ""}`}
        onClick={handleFilterVisibility}
      >
        popular brands
      </h3>
      <div className={`filter-block-content ${isFilterVisible ? "show" : ""}`}>
        <div className="filter-block-checklist">
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">apple</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">google</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">microsoft</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">samsung</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">dell</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">HP</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">symphony</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">xiaomi</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">sony</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">panasonic</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">LG</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">intel</span>
          </div>
          <div className="filter-check-item">
            <div className="filter-check-input">
              <input type="checkbox" />
              <span className="filter-checkmark">
                <Check size={15} weight="bold" className="check-icon" />
              </span>
            </div>
            <span className="filter-check-lbl">one plus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBrands;
