import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import "./CartSummary.scss";

const CartSummary = () => {
  return (
    <div className="comp-cart-sum">
      <div className="segment-cart-sum">
        <div className="cart-sum">
          <div className="cart-sum-top">
            <p className="cart-sum-ttl">Cart Totals</p>
            <ul className="cart-sum-list">
              <li className="cart-sum-item">
                <p className="cart-sum-item-lbl">Sub-total</p>
                <div className="cart-sum-item-val">$320</div>
              </li>
              <li className="cart-sum-item">
                <p className="cart-sum-item-lbl">Shipping</p>
                <div className="cart-sum-item-val">Free</div>
              </li>
              <li className="cart-sum-item">
                <p className="cart-sum-item-lbl">Discount</p>
                <div className="cart-sum-item-val">$24</div>
              </li>
              <li className="cart-sum-item">
                <p className="cart-sum-item-lbl">Tax</p>
                <div className="cart-sum-item-val">$61.99</div>
              </li>
            </ul>
          </div>
          <div className="cart-sum-btm">
            <div className="cart-sum-total">
              <p className="cart-sum-total-lbl">Total</p>
              <p className="cart-sum-total-val">$357.99 USD</p>
            </div>
            <Link to="/" className="btn btn-primary">
              <span className="btn-text">proceed to checkout</span>
              <span className="btn-icon">
                <ArrowRight size={24} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
