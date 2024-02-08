import {
  Check,
  CheckCircle,
  Checks,
  Handshake,
  MapPinLine,
  MapTrifold,
  Notebook,
  Notepad,
  Package,
  Truck,
  User,
} from "@phosphor-icons/react";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import "./TrackOrderDetailsScreen.scss";

const TrackOrderDetailsScreen = () => {
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
    {
      text: "Details",
      link: "/pages/track_order/details",
    },
  ];
  return (
    <div className="pg-track-order-details">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-track-order-details">
          <div className="track-order-top">
            <div className="track-order-info">
              <div className="track-order-info-l">
                <div className="info-order-no">#986758700</div>
                <p className="info-order-data">
                  4 Products <span className="dot"></span> Order Placed in 17
                  Jan, 2021 at 7:32 PM
                </p>
              </div>
              <div className="track-order-info-r">
                <div className="info-order-total">$1199.00</div>
              </div>
            </div>
            <div className="track-order-arrival">
              Order expected arrival <span>23 Jan, 2021</span>
            </div>
            <div className="track-order">
              <div className="track-order-bar">
                <div className="order-track-step completed">
                  <div className="order-track-status">
                    <span className="order-track-status-dot">
                      <span className="status-completed-icon">
                        <Check size={14} weight="bold" />
                      </span>
                    </span>
                  </div>
                  <div className="order-track-info order-track-success">
                    <div className="order-track-info-icon">
                      <Notebook />
                    </div>
                    <p className="order-track-text-stat">Order Placed</p>
                  </div>
                </div>

                <div className="order-track-line"></div>

                <div className="order-track-step progress">
                  <div className="order-track-status">
                    <span className="order-track-status-dot">
                      <span className="status-completed-icon">
                        <Check size={14} weight="bold" />
                      </span>
                    </span>
                  </div>
                  <div className="order-track-info order-track-success">
                    <div className="order-track-info-icon">
                      <Package />
                    </div>
                    <p className="order-track-text-stat">Packaging</p>
                  </div>
                </div>

                <div className="order-track-line"></div>

                <div className="order-track-step">
                  <div className="order-track-status">
                    <span className="order-track-status-dot">
                      <span className="status-completed-icon">
                        <Check size={14} weight="bold" />
                      </span>
                    </span>
                  </div>
                  <div className="order-track-info">
                    <div className="order-track-info-icon">
                      <Truck />
                    </div>
                    <p className="order-track-text-stat">On The Road</p>
                  </div>
                </div>

                <div className="order-track-line"></div>

                <div className="order-track-step">
                  <div className="order-track-status">
                    <span className="order-track-status-dot">
                      <span className="status-completed-icon">
                        <Check size={14} weight="bold" />
                      </span>
                    </span>
                  </div>
                  <div className="order-track-info">
                    <div className="order-track-info-icon">
                      <Handshake />
                    </div>
                    <p className="order-track-text-stat">Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="track-order-btm">
            <div className="track-order-activity">
              <h4 className="track-order-activity-ttl">Order Activity</h4>
              <div className="activity-list">
                <div className="activity-item activity-green">
                  <div className="activity-item-icon">
                    <Checks size={22} />
                  </div>
                  <div className="activity-item-content">
                    <p className="activity-item-text">
                      Your order has been delivered. Thank you for shopping in
                      Clicon!
                    </p>
                    <p className="activity-item-date">
                      23 Jan, 2021 at 7:32 PM
                    </p>
                  </div>
                </div>
                <div className="activity-item activity-blue">
                  <div className="activity-item-icon">
                    <User size={22} />
                  </div>
                  <div className="activity-item-content">
                    <p className="activity-item-text">
                      Our delivery man (John Wick) Has picked-up your order for
                      delvery.
                    </p>
                    <p className="activity-item-date">
                      23 Jan, 2021 at 7:32 PM
                    </p>
                  </div>
                </div>
                <div className="activity-item activity-blue">
                  <div className="activity-item-icon">
                    <MapPinLine size={22} />
                  </div>
                  <div className="activity-item-content">
                    <p className="activity-item-text">
                      Your order has reached at last mile hub.
                    </p>
                    <p className="activity-item-date">
                      23 Jan, 2021 at 7:32 PM
                    </p>
                  </div>
                </div>
                <div className="activity-item activity-blue">
                  <div className="activity-item-icon">
                    <MapTrifold size={22} />
                  </div>
                  <div className="activity-item-content">
                    <p className="activity-item-text">
                      Your order on the way to (last mile) hub.
                    </p>
                    <p className="activity-item-date">
                      23 Jan, 2021 at 7:32 PM
                    </p>
                  </div>
                </div>
                <div className="activity-item activity-green">
                  <div className="activity-item-icon">
                    <CheckCircle size={22} />
                  </div>
                  <div className="activity-item-content">
                    <p className="activity-item-text">
                      Your order is successfully verified.
                    </p>
                    <p className="activity-item-date">
                      23 Jan, 2021 at 7:32 PM
                    </p>
                  </div>
                </div>

                <div className="activity-item activity-blue">
                  <div className="activity-item-icon">
                    <Notepad size={22} />
                  </div>
                  <div className="activity-item-content">
                    <p className="activity-item-text">
                      Your order has been confirmed.
                    </p>
                    <p className="activity-item-date">
                      23 Jan, 2021 at 7:32 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderDetailsScreen;
