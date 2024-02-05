import { Stack } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import "./CheckoutSuccessScreen.scss";
import { Icons } from "../../assets/icons";

const CheckoutSuccessScreen = () => {
  return (
    <div className="pg-checkout-success">
      <div className="container">
        <div className="segment-checkout-success">
          <div className="checkout-success">
            <div className="checkout-success-icon">
              <img src={Icons.CheckCircle} alt="" />
            </div>
            <h2 className="checkout-success-ttl">
              Your order is successessfully placed.
            </h2>
            <p className="checkout-success-lead">
              Pellentesque sed lectus nec tortor tristique accumsan quis dictum
              risus. Donec volutpat mollis nulla non facilisis.
            </p>
            <div className="checkout-success-btns">
              <Link to="/" className="btn btn-primary btn-sm btn-outline">
                <span className="btn-icon">
                  <Stack size={20} weight="bold" />
                </span>
                <span className="btn-text">go to dashboard</span>
              </Link>
              <Link to="/" className="btn btn-primary btn-sm">
                <span className="btn-text">view order</span>
                <span className="btn-icon">
                  <ArrowRight size={20} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessScreen;
