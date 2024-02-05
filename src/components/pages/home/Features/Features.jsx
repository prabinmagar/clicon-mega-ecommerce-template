import { CreditCard, Headphones, Package, Trophy } from "@phosphor-icons/react";
import "./Features.scss";

const Features = () => {
  return (
    <div className="comp-features">
      <div className="container">
        <div className="segment-features-group">
          <div className="features-item">
            <div className="features-item-icon">
              <Package size={38} />
            </div>
            <div className="features-item-content">
              <h5 className="features-item-ttl">faster delivery</h5>
              <p className="features-item-text">Delivery in 24/H</p>
            </div>
          </div>
          <div className="features-item">
            <div className="features-item-icon">
              <Trophy size={38} />
            </div>
            <div className="features-item-content">
              <h5 className="features-item-ttl">24 hours return</h5>
              <p className="features-item-text">100% money-back guarantee</p>
            </div>
          </div>
          <div className="features-item">
            <div className="features-item-icon">
              <CreditCard size={38} />
            </div>
            <div className="features-item-content">
              <h5 className="features-item-ttl">secure payment</h5>
              <p className="features-item-text">Your money is safe</p>
            </div>
          </div>
          <div className="features-item">
            <div className="features-item-icon">
              <Headphones size={38} />
            </div>
            <div className="features-item-content">
              <h5 className="features-item-ttl">support 24/7</h5>
              <p className="features-item-text">Live contact/message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
