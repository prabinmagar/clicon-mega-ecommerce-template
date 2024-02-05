import { ArrowRight, X } from "@phosphor-icons/react";
import { cart } from "../../../data/mockData";
import "./CartModal.scss";
import { Link } from "react-router-dom";

const CartModal = () => {
  return (
    <div className="comp-modal-cart">
      <button type="button" className="cart-modal-close-btn">
        <X size={16} />
      </button>
      <div className="segment-cart">
        <div className="modal-cart-head">
          <h4 className="cart-head-ttl">
            Shopping Cart <span className="cart-item-count">(02)</span>
          </h4>
        </div>
        <div className="modal-cart-list">
          {cart &&
            cart[0]?.items?.map((cartItem) => {
              return (
                <div className="cart-item" key={cartItem.productId}>
                  <div className="cart-item-img">
                    <img src={cartItem.images[0]} alt="" />
                  </div>
                  <div className="cart-item-content-wrap">
                    <div className="cart-item-content">
                      <div className="cart-item-ttl">{cartItem.productName}</div>
                      <div className="cart-item-info">
                        <span className="cart-item-info-qty">
                          {cartItem.quantity}
                        </span>
                        <span className="cart-item-info-times">x</span>
                        <span className="cart-item-info-price">
                          ${cartItem.price}
                        </span>
                      </div>
                    </div>
                    <button type="button" className="cart-item-remove">
                      <X size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="modal-cart-foot">
          <div className="cart-foot-total">
            <p className="total-lbl">Sub-Total:</p>
            <p className="total-val">${cart[0].totalPrice} USD</p>
          </div>
          <div className="cart-foot-btns">
            <Link to="/" className="btn btn-primary">
              <span className="btn-text">checkout now</span>
              <span className="btn-icon">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link to="/" className="btn btn-primary btn-outline">
              <span className="btn-text">view cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
