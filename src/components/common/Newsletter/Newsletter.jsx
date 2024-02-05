import { ArrowRight } from "@phosphor-icons/react";
import "./Newsletter.scss";
import { Images } from "../../../assets/images";

const Newsletter = () => {
  return (
    <div className="comp-newsletter">
      <div className="container">
        <div className="segment-newsletter">
          <h3 className="newsletter-lead-ttl">Subscribe to our newsletter</h3>
          <p className="newsletter-lead-text">
            Stay in the loop with the latest trends and exclusive offers! Simply
            enter your email below and embrace a future filled with
            fashion-forward finds and unbeatable deals.
          </p>
          <div className="newsletter-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Email address"
                className="input-ctrl"
              />
              <button className="btn btn-primary input-btn">
                <span className="btn-text">subscribe</span>
                <span className="btn-icon">
                  <ArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="newsletter-line"></div>
        <div className="segment-companies">
          <div className="companies-item">
            <img src={Images.Google} alt="" />
          </div>
          <div className="companies-item">
            <img src={Images.Amazon} alt="" />
          </div>
          <div className="companies-item">
            <img src={Images.Philips} alt="" />
          </div>
          <div className="companies-item">
            <img src={Images.Toshiba} alt="" />
          </div>
          <div className="companies-item">
            <img src={Images.Samsung} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
