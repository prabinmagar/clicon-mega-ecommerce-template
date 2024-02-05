import { useEffect, useRef, useState } from "react";
import "./ProductFilter.scss";

const FilterPriceRange = () => {
  const priceInputsRef = useRef([]);
  const rangeInput1Ref = useRef(null);
  const rangeInput2Ref = useRef(null);
  const rangeRef = useRef(null);
  const priceGap = 1000;

  const [defaultMinPrice, setDefaultMinPrice] = useState(1000);
  const [defaultMaxPrice, setDefaultMaxPrice] = useState(5000);

  useEffect(() => {
    updateRangeAndInputs();
  }, [defaultMinPrice, defaultMaxPrice]);

  const updateRangeAndInputs = () => {
    const rangeInput1 = rangeInput1Ref.current;
    const rangeInput2 = rangeInput2Ref.current;
    const range = rangeRef.current;

    const minPrice = parseInt(rangeInput1.value);
    const maxPrice = parseInt(rangeInput2.value);

    rangeInput1.value = minPrice;
    rangeInput2.value = maxPrice;

    range.style.left = `${
      (minPrice / parseInt(rangeInput1.getAttribute("max"))) * 100
    }%`;
    range.style.right = `${
      100 - (maxPrice / parseInt(rangeInput2.getAttribute("max"))) * 100
    }%`;
  };

  const handlePriceInputChange = (e) => {
    const [minInput, maxInput] = priceInputsRef.current;
    const rangeInput1 = rangeInput1Ref.current;
    const range = rangeRef.current;

    let minPrice = parseInt(minInput.value);
    let maxPrice = parseInt(maxInput.value);

    if (
      maxPrice - minPrice >= priceGap &&
      maxPrice <= parseInt(rangeInput2Ref.current.getAttribute("max"))
    ) {
      if (e.target.classList.contains("input-min")) {
        rangeInput1.value = minPrice;
        range.style.left = `${
          (minPrice / parseInt(rangeInput1.getAttribute("max"))) * 100
        }%`;
      } else {
        rangeInput2Ref.current.value = maxPrice;
        range.style.right = `${
          100 -
          (maxPrice / parseInt(rangeInput2Ref.current.getAttribute("max"))) *
            100
        }%`;
      }
    }
  };

  const handleRangeInputChange = (e) => {
    const [minInput, maxInput] = priceInputsRef.current;
    const rangeInputs = [rangeInput1Ref.current, rangeInput2Ref.current];
    const range = rangeRef.current;
    const minVal = parseInt(rangeInputs[0].value);
    const maxVal = parseInt(rangeInputs[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.classList.contains("range-min")) {
        rangeInputs[0].value = maxVal - priceGap;
      } else {
        rangeInputs[1].value = minVal + priceGap;
      }
    } else {
      minInput.value = minVal;
      maxInput.value = maxVal;
      range.style.left = `${
        (minVal / parseInt(rangeInputs[0].getAttribute("max"))) * 100
      }%`;
      range.style.right = `${
        100 - (maxVal / parseInt(rangeInputs[1].getAttribute("max"))) * 100
      }%`;
    }
  };

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
    <div className="filter-block filter-block-price-range" ref={filterRef}>
      <h3
        className={`filter-block-ttl ${isFilterVisible ? "active" : ""}`}
        onClick={handleFilterVisibility}
      >
        price range
      </h3>
      <div className={`filter-block-content ${isFilterVisible ? "show" : ""}`}>
        <div className="filter-range-box">
          <div className="filter-range-slider">
            <div className="progress" ref={rangeRef}></div>
          </div>
          <div className="filter-range-input">
            <input
              type="range"
              className="range-min"
              min="0"
              max="10000"
              defaultValue={defaultMinPrice}
              step="100"
              ref={rangeInput1Ref}
              onChange={handleRangeInputChange}
            />
            <input
              type="range"
              className="range-max"
              min="0"
              max="10000"
              defaultValue={defaultMaxPrice}
              step="100"
              onChange={handleRangeInputChange}
              ref={rangeInput2Ref}
            />
          </div>
          <div className="filter-price-input">
            <input
              type="number"
              className="input-min"
              defaultValue={defaultMinPrice}
              placeholder="Min price"
              step={50}
              onChange={handlePriceInputChange}
              ref={(el) => (priceInputsRef.current[0] = el)}
            />
            <input
              type="number"
              className="input-max"
              defaultValue={defaultMaxPrice}
              placeholder="Max price"
              step={50}
              onChange={handlePriceInputChange}
              ref={(el) => (priceInputsRef.current[1] = el)}
            />
          </div>
        </div>
        <div className="filter-block-radlist">
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="price_range" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">All Price</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="price_range" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">Under $20</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="price_range" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">$25 to $100</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="price_range" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">$100 to $300</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="price_range" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">$300 to $500</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="price_range" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">$500 to $1000</span>
          </div>
          <div className="filter-radio-item">
            <div className="filter-radio-input">
              <input type="radio" name="price_range" />
              <span className="filter-radio-check"></span>
            </div>
            <span className="filter-radio-lbl">$1000 to $10000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPriceRange;
