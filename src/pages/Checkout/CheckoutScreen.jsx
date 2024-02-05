import { ArrowRight } from "@phosphor-icons/react";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import CheckoutForm from "../../features/cart/Checkout/CheckoutForm/CheckoutForm";
import "./CheckoutScreen.scss";
import { Link } from "react-router-dom";
import { cart } from "../../data/mockData";

const CheckoutScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Shopping Cart",
      link: "/cart",
    },
    {
      text: "Checkout",
      link: "/checkout",
    },
  ];

  return (
    <div className="pg-checkout">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-checkout-gridbox">
          <div className="checkout-gridbox-left">
            <CheckoutForm />
          </div>
          <div className="checkout-gridbox-right">
            <div className="checkout-order-sum">
              <p className="order-sum-ttl">Order Summary</p>
              <div className="order-sum-products">
                {cart &&
                  cart[0]?.items?.map((cartItem) => {
                    return (
                      <div
                        className="order-sum-product-item"
                        key={cartItem.productId}
                      >
                        <div className="product-item-img">
                          <img src={cartItem.images[0]} alt="" />
                        </div>
                        <div className="product-item-info">
                          <p className="product-item-ttl">
                            {cartItem.productName}
                          </p>
                          <div className="product-item-qty-price">
                            <span className="product-item-qty">1</span>
                            <span className="product-item-symbol">x</span>
                            <span className="product-item-price">
                              {cartItem.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <ul className="order-sum-list">
                <li className="order-sum-item">
                  <p className="order-sum-item-lbl">Sub-total</p>
                  <div className="order-sum-item-val">$320</div>
                </li>
                <li className="order-sum-item">
                  <p className="order-sum-item-lbl">Shipping</p>
                  <div className="order-sum-item-val">Free</div>
                </li>
                <li className="order-sum-item">
                  <p className="order-sum-item-lbl">Discount</p>
                  <div className="order-sum-item-val">$24</div>
                </li>
                <li className="order-sum-item">
                  <p className="order-sum-item-lbl">Tax</p>
                  <div className="order-sum-item-val">$61.99</div>
                </li>
              </ul>
              <div className="order-sum-btm">
                <div className="order-sum-total">
                  <p className="order-sum-total-lbl">Total</p>
                  <p className="order-sum-total-val">$357.99 USD</p>
                </div>
                <Link to="/" className="btn btn-primary">
                  <span className="btn-text">place order</span>
                  <span className="btn-icon">
                    <ArrowRight size={24} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
