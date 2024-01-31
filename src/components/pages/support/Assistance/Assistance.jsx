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
    <div className="comp-supp-ast">
      <div className="container">
        <div className="seg-supp-ast">
          <div className="elem-supp-ast-list">
            <div className="supp-ast-item">
              <span className="ast-item-icon">
                <Truck size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="ast-item-text">Track Order</div>
            </div>
            <div className="supp-ast-item">
              <span className="ast-item-icon">
                <Lock size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="ast-item-text">Reset Password</div>
            </div>
            <div className="supp-ast-item">
              <span className="ast-item-icon">
                <CreditCard size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="ast-item-text">Payment Option</div>
            </div>
            <div className="supp-ast-item">
              <span className="ast-item-icon">
                <User size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="ast-item-text">User & Account</div>
            </div>
            <div className="supp-ast-item">
              <span className="ast-item-icon">
                <Stack size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="ast-item-text">Wishlist & Compare</div>
            </div>
            <div className="supp-ast-item">
              <span className="ast-item-icon">
                <Notepad size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="ast-item-text">Shipping & Billing</div>
            </div>
            <div className="supp-ast-item">
              <span className="ast-item-icon">
                <CreditCard size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="ast-item-text">Shopping Cart & Wallet</div>
            </div>
            <div className="supp-ast-item">
              <span className="ast-item-icon">
                <Gift size={32} color="#fa8232" weight="duotone" />
              </span>
              <div className="ast-item-text">Sell on  Clicon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistance;
