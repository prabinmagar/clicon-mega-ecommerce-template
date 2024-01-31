import { CreditCard, Headphones, Package, Trophy } from "@phosphor-icons/react";
import "./Features.scss";

const Features = () => {
  return (
    <div className="comp-features">
      <div className="container">
        <div className="seg-feat-group">
          <div className="elem-feat-item">
            <div className="item-icon">
              <Package size={38} />
            </div>
            <div className="item-content">
              <h5 className="item-ttl">faster delivery</h5>
              <p className="item-text">Delivery in 24/H</p>
            </div>
          </div>
          <div className="elem-feat-item">
            <div className="item-icon">
              <Trophy size={38} />
            </div>
            <div className="item-content">
              <h5 className="item-ttl">24 hours return</h5>
              <p className="item-text">100% money-back guarantee</p>
            </div>
          </div>
          <div className="elem-feat-item">
            <div className="item-icon">
              <CreditCard size={38} />
            </div>
            <div className="item-content">
              <h5 className="item-ttl">secure payment</h5>
              <p className="item-text">Your money is safe</p>
            </div>
          </div>
          <div className="elem-feat-item">
            <div className="item-icon">
              <Headphones size={38} />
            </div>
            <div className="item-content">
              <h5 className="item-ttl">support 24/7</h5>
              <p className="item-text">Live contact/message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
