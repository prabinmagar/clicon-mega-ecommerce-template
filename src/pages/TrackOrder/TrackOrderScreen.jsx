import "./TrackOrderScreen.scss";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import { Info } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const TrackOrderScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Pages",
      link: "/pages",
    },
    {
      text: "Track Order",
      link: "/pages/track_order",
    },
  ];

  return (
    <div className="pg-track-order">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-track-order">
          <h3 className="track-order-ttl">Track Order</h3>
          <p className="track-order-text">
            To track your order please enter your order ID in the input field
            below and press the “Track Order” button. this was given to you on
            your receipt and in the confirmation email you should have received.
          </p>
          <div className="track-order-form">
            <form action="">
              <div className="form-cols">
                <div className="form-elem-wrap">
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      Order ID
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="ID ..."
                    />
                  </div>
                  <div className="form-info">
                    <span className="form-info-icon">
                      <Info size={16} weight="bold" />
                    </span>
                    <span className="form-info-txt">
                      Order ID that we sended to you in your email address.
                    </span>
                  </div>
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Billing Email
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <Link to="/" className="btn btn-primary btn-track-order">
                <span className="btn-text">track order</span>
                <span className="btn-icon">
                  <ArrowRight size={24} />
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderScreen;
