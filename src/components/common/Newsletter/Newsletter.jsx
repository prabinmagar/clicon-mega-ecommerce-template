import { ArrowRight } from "@phosphor-icons/react";
import "./Newsletter.scss";
import { Images } from "../../../assets/images";

const Newsletter = () => {
  return (
    <div className="comp-newsl">
      <div className="container">
        <div className="seg-newsl">
          <h3 className="newsl-lead-ttl">Subscribe to our newsletter</h3>
          <p className="newsl-lead-text">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
          <div className="newsl-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Email address"
                className="input-gp-ctrl"
              />
              <button className="btn btn-primary input-gp-btn">
                <span className="btn-text">subscribe</span>
                <span className="btn-icon">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="newsl-sep-line"></div>
        <div className="seg-companies">
          <div className="elem-company">
            <img src={Images.Google} alt="" />
          </div>
          <div className="elem-company">
            <img src={Images.Amazon} alt="" />
          </div>
          <div className="elem-company">
            <img src={Images.Philips} alt="" />
          </div>
          <div className="elem-company">
            <img src={Images.Toshiba} alt="" />
          </div>
          <div className="elem-company">
            <img src={Images.Samsung} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
