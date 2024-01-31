import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import "./CartSummary.scss";

const CartSummary = () => {
  return (
    <div className="comp-cartsum">
      <div className="seg-cartsum">
        <div className="elem-cartsum">
          <div className="ctsum-top">
            <p className="ctsum-ttl">Cart Totals</p>
            <ul className="ctsum-list">
              <li className="ctsum-item">
                <p className="ctsum-item-lbl">Sub-total</p>
                <div className="ctsum-item-val">$320</div>
              </li>
              <li className="ctsum-item">
                <p className="ctsum-item-lbl">Shipping</p>
                <div className="ctsum-item-val">Free</div>
              </li>
              <li className="ctsum-item">
                <p className="ctsum-item-lbl">Discount</p>
                <div className="ctsum-item-val">$24</div>
              </li>
              <li className="ctsum-item">
                <p className="ctsum-item-lbl">Tax</p>
                <div className="ctsum-item-val">$61.99</div>
              </li>
            </ul>
          </div>
          <div className="ctsum-btm">
            <div className="ctsum-total">
              <p className="ctsum-total-lbl">Total</p>
              <p className="ctsum-total-val">$357.99 USD</p>
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
