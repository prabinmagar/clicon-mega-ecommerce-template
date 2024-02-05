import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import "./LangDropdown.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const LangDropdown = () => {
  const DEFAULT_COUNTRY = "United States";
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDroplistEnabled, setDroplistEnabled] = useState(false);
  const countryLangRef = useRef(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,languages"
        );
        const sortedCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);

        const defaultCountry = sortedCountries.find(
          (country) => country?.name?.common === DEFAULT_COUNTRY
        );

        if (defaultCountry) {
          let langKey = Object.keys(defaultCountry.languages)[0];
          let langValue = defaultCountry.languages[langKey];

          setSelectedCountry({
            country: defaultCountry?.name?.common,
            language: {
              key: langKey,
              value: langValue,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountryData();
  }, []);

  const countrySelectHandler = (country, language) => {
    setSelectedCountry({ country, language });
    setDroplistEnabled(false);
  };

  const handleDroplistEnable = () => setDroplistEnabled(!isDroplistEnabled);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        countryLangRef.current &&
        !countryLangRef.current.contains(event.target)
      ) {
        setDroplistEnabled(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="widget-lang-dropdown">
      <div className="segment-lang-dropdown" ref={countryLangRef}>
        <div className="lang-dropdown-active" onClick={handleDroplistEnable}>
          <span className="dropdown-active-text">
            {selectedCountry?.language.key}
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
          className={`lang-dropdown-list ${isDroplistEnabled ? "show" : ""}`}
        >
          <div className="dropdown-list-wrap scrollbar">
            {countries?.map((country) => {
              if (Object.keys(country?.languages)) {
                const langKey = Object.keys(country?.languages)[0];
                const langValue = country?.languages[langKey];

                return (
                  <div
                    className={`dropdown-item ${
                      selectedCountry.country === country?.name?.common
                        ? "selected"
                        : ""
                    }`}
                    key={country?.name?.common}
                    onClick={() =>
                      countrySelectHandler(country?.name?.common, {
                        key: langKey,
                        value: langValue,
                      })
                    }
                  >
                    <div className="dropdown-item-icon">
                      <img src={country?.flags?.png} alt="" />
                    </div>
                    <span className="dropdown-item-text">{langValue}</span>
                    <span className="dropdown-item-mark">
                      <Check size={16} />
                    </span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangDropdown;
