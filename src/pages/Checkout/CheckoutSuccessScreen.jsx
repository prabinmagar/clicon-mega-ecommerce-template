import { Stack } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import "./CheckoutSuccessScreen.scss";
import { Icons } from "../../assets/icons";

const CheckoutSuccessScreen = () => {
  return (
    <div className="pg-checkout-succ">
      <div className="container">
        <div className="seg-chkout-succ">
          <div className="elem-chkout-succ">
            <div className="chkout-succ-icon">
              <img src={Icons.CheckCircle} alt="" />
            </div>
            <h2 className="chkout-succ-ttl">
              Your order is successfully place
            </h2>
            <p className="chkout-succ-lead">
              Pellentesque sed lectus nec tortor tristique accumsan quis dictum
              risus. Donec volutpat mollis nulla non facilisis.
            </p>
            <div className="chkout-succ-btns">
              <Link to="/" className="btn btn-primary btn-outline">
                <span className="btn-icon">
                  <Stack size={20} weight="bold" />
                </span>
                <span className="btn-text">go to dashboard</span>
              </Link>
              <Link to="/" className="btn btn-primary">
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
