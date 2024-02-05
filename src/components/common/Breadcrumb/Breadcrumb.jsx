import { CaretRight, House } from "@phosphor-icons/react";
import "./Breadcrumb.scss";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = ({ breadData }) => {
  return (
    <div className="comp-breadcrumb">
      <div className="container">
        <div className="segment-breadcrumb">
          <div className="breadcrumb-list">
            {breadData?.map((item, index) => {
              return (
                <div key={index} className="breadcrumb-item-wrap">
                  <div className="breadcrumb-item">
                    <span
                      className={`breadcrumb-item-icon ${
                        item.link === "/" ? "show" : ""
                      }`}
                    >
                      <House size={16} weight="bold" />
                    </span>
                    <Link className="breadcrumb-item-text">{item.text}</Link>
                  </div>
                  {index !== breadData.length - 1 && (
                    <div className="breadcrumb-sep">
                      <CaretRight size={16} weight="bold" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

Breadcrumb.propTypes = {
  breadData: PropTypes.array,
};
