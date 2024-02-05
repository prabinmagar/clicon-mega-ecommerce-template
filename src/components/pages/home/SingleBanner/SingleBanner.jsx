import { ArrowRight } from "@phosphor-icons/react";
import { Images } from "../../../../assets/images";
import "./SingleBanner.scss";

const SingleBanner = () => {
  return (
    <div className="comp-single-banner">
      <div className="container">
        <div className="segment-banner">
          <div className="single-banner-content">
            <div className="banner-badge">save up to $200.00</div>
            <h3 className="banner-title">Mackbook Pro</h3>
            <div className="banner-lead-text">
              Apple MI MAx Chip. 32 GB Unified Memory, 1 TB SSD Storage
            </div>
            <button className="btn btn-primary">
              <span className="btn-text">shop now</span>
              <span className="btn-icon">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
          <div className="single-banner-img">
            <img src={Images.SingleBanner} alt="" />
            <div className="banner-tag price">$1999</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBanner;
