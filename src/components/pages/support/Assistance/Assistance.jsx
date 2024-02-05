import {
  CreditCard,
  Gift,
  Lock,
  Notepad,
  Stack,
  Truck,
  User,
} from "@phosphor-icons/react";
import "./Assistance.scss";

const Assistance = () => {
  return (
    <div className="comp-support-assist">
      <div className="container">
        <div className="segment-support-assist">
          <h3 className="support-assist-ttl">What can we assist you with today?</h3>
          <div className="support-assist-list">
            <div className="support-assist-item">
              <span className="assist-item-icon">
                <Truck size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="assist-item-text">Track Order</div>
            </div>
            <div className="support-assist-item">
              <span className="assist-item-icon">
                <Lock size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="assist-item-text">Reset Password</div>
            </div>
            <div className="support-assist-item">
              <span className="assist-item-icon">
                <CreditCard size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="assist-item-text">Payment Option</div>
            </div>
            <div className="support-assist-item">
              <span className="assist-item-icon">
                <User size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="assist-item-text">User & Account</div>
            </div>
            <div className="support-assist-item">
              <span className="assist-item-icon">
                <Stack size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="assist-item-text">Wishlist & Compare</div>
            </div>
            <div className="support-assist-item">
              <span className="assist-item-icon">
                <Notepad size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="assist-item-text">Shipping & Billing</div>
            </div>
            <div className="support-assist-item">
              <span className="assist-item-icon">
                <CreditCard size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="assist-item-text">Shopping Cart & Wallet</div>
            </div>
            <div className="support-assist-item">
              <span className="assist-item-icon">
                <Gift size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="assist-item-text">Sell on  Clicon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistance;
