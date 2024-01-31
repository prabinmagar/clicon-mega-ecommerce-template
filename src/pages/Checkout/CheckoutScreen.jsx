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
        <div className="seg-checkout-gridbox">
          <div className="elem-gbox-l">
            <CheckoutForm />
          </div>
          <div className="elem-gbox-r">
            <div className="elem-ordersum">
              <p className="ordsum-ttl">Order Summary</p>
              <div className="ordsum-prods">
                {cart &&
                  cart[0]?.items?.map((cartItem) => {
                    return (
                      <div className="ordsum-proditem" key={cartItem.productId}>
                        <div className="proditem-img">
                          <img src={cartItem.images[0]} alt="" />
                        </div>
                        <div className="proditem-info">
                          <p className="proditem-ttl">{cartItem.productName}</p>
                          <div className="proditem-qty-price">
                            <span className="proditem-qty">1</span>
                            <span className="proditem-symbol">x</span>
                            <span className="proditem-price">{cartItem.price}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <ul className="ordsum-list">
                <li className="ordsum-item">
                  <p className="ordsum-item-lbl">Sub-total</p>
                  <div className="ordsum-item-val">$320</div>
                </li>
                <li className="ordsum-item">
                  <p className="ordsum-item-lbl">Shipping</p>
                  <div className="ordsum-item-val">Free</div>
                </li>
                <li className="ordsum-item">
                  <p className="ordsum-item-lbl">Discount</p>
                  <div className="ordsum-item-val">$24</div>
                </li>
                <li className="ordsum-item">
                  <p className="ordsum-item-lbl">Tax</p>
                  <div className="ordsum-item-val">$61.99</div>
                </li>
              </ul>
              <div className="ordsum-btm">
                <div className="ordsum-total">
                  <p className="ordsum-total-lbl">Total</p>
                  <p className="ordsum-total-val">$357.99 USD</p>
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
