import { ArrowRight, X } from "@phosphor-icons/react";
import "./HeaderPromo.scss";
import { Link } from "react-router-dom";

const HeaderPromo = () => {
  return (
    <div className="comp-header-promo">
      <div className="container">
        <div className="segment-header-promo">
          <div className="header-promo-ttl">
            <span className="ttl-bg-text">Black</span>
            <span className="ttl-plain-text">Friday</span>
          </div>
          <div className="header-promo-discount">
            <span className="text-sm">Up to</span>
            <span className="text-lg">59%</span>
            <span className="text-md">off</span>
          </div>
          <div className="header-promo-btn">
            <Link to="/shop" className="btn">
              <span className="btn-text">shop now</span>
              <span className="btn-icon">
                <ArrowRight size={20} />
              </span>
            </Link>
            <button type="button" className="promo-close-btn">
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPromo;
