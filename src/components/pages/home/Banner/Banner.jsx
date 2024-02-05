import { ArrowRight } from "@phosphor-icons/react";
import "./Banner.scss";
import { Images } from "../../../../assets/images";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <div className="comp-home-banner">
      <div className="container">
        <div className="segment-banner">
          <div className="home-banner-single">
            <BannerSlider />
          </div>
          <div className="home-banner-group">
            <div className="banner-item">
              <div className="banner-item-l">
                <p className="banner-item-text-t">summer sales</p>
                <h3 className="banner-item-ttl">New Goolge Pixel 6 Pro</h3>
                <button className="btn btn-primary">
                  <span className="btn-text">shop now</span>
                  <span className="btn-icon">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
              <div className="banner-item-r">
                <div className="banner-item-img">
                  <img src={Images.Banner2} alt="" />
                  <div className="banner-item-tag discount">29% off</div>
                </div>
              </div>
            </div>

            <div className="banner-item">
              <div className="banner-item-l">
                <div className="banner-item-img">
                  <img src={Images.Banner3} alt="" />
                </div>
              </div>
              <div className="banner-item-r">
                <h3 className="banner-item-ttl">Xiaomi FlipBuds Pro</h3>
                <div className="banner-item-tag price">$299 USD</div>
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
