import { ArrowRight } from "@phosphor-icons/react";
import "./Banner.scss";
import { Images } from "../../../../assets/images";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <div className="comp-sc-banner">
      <div className="container">
        <div className="seg-banner">
          <div className="elem-banner-single">
            <BannerSlider />
          </div>
          <div className="elem-banner-group">
            <div className="banner-item">
              <div className="item-l">
                <p className="item-text-t">summer sales</p>
                <h3 className="item-ttl">New Goolge Pixel 6 Pro</h3>
                <button className="btn btn-primary">
                  <span className="btn-text">shop now</span>
                  <span className="btn-icon">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
              <div className="item-r">
                <div className="item-img">
                  <img src={Images.Banner2} alt="" />
                  <div className="item-tag discount">29% off</div>
                </div>
              </div>
            </div>

            <div className="banner-item">
              <div className="item-l">
                <div className="item-img">
                  <img src={Images.Banner3} alt="" />
                </div>
              </div>
              <div className="item-r">
                <h3 className="item-ttl">Xiaomi FlipBuds Pro</h3>
                <div className="item-tag price">$299 USD</div>
                <button className="btn btn-primary">
                  <span className="btn-text">shop now</span>
                  <span className="btn-icon">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
