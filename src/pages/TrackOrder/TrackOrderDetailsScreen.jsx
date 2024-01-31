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
import "./TrackOrderDetails.scss";

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
    <div className="pg-trkorder-det">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="seg-trkorder-det">
          <div className="trkorder-top">
            <div className="elem-trkorder-info">
              <div className="trkorder-info-l">
                <div className="info-order-no">#986758700</div>
                <p className="info-order-data">
                  4 Products <span className="dot"></span> Order Placed in 17
                  Jan, 2021 at 7:32 PM
                </p>
              </div>
              <div className="trkorder-info-r">
                <div className="info-order-total">$1199.00</div>
              </div>
            </div>
            <div className="elem-trkorder-arrival">
              Order expected arrival <span>23 Jan, 2021</span>
            </div>
            <div className="elem-trkorder">
              <div className="trkorder-bar">
                <div className="ordertrk-step completed">
                  <div className="ordertrk-status">
                    <span className="ordertrk-status-dot">
                      <span className="status-completed-icon">
                        <Check size={14} weight="bold" />
                      </span>
                    </span>
                  </div>
                  <div className="ordertrk-info ordertrk-success">
                    <div className="ordertrk-info-icon">
                      <Notebook />
                    </div>
                    <p className="ordertrk-text-stat">Order Placed</p>
                  </div>
                </div>

                <div className="ordertrk-line"></div>

                <div className="ordertrk-step progress">
                  <div className="ordertrk-status">
                    <span className="ordertrk-status-dot">
                      <span className="status-completed-icon">
                        <Check size={14} weight="bold" />
                      </span>
                    </span>
                  </div>
                  <div className="ordertrk-info ordertrk-success">
                    <div className="ordertrk-info-icon">
                      <Package />
                    </div>
                    <p className="ordertrk-text-stat">Packaging</p>
                  </div>
                </div>

                <div className="ordertrk-line"></div>

                <div className="ordertrk-step">
                  <div className="ordertrk-status">
                    <span className="ordertrk-status-dot">
                      <span className="status-completed-icon">
                        <Check size={14} weight="bold" />
                      </span>
                    </span>
                  </div>
                  <div className="ordertrk-info">
                    <div className="ordertrk-info-icon">
                      <Truck />
                    </div>
                    <p className="ordertrk-text-stat">On The Road</p>
                  </div>
                </div>

                <div className="ordertrk-line"></div>

                <div className="ordertrk-step">
                  <div className="ordertrk-status">
                    <span className="ordertrk-status-dot">
                      <span className="status-completed-icon">
                        <Check size={14} weight="bold" />
                      </span>
                    </span>
                  </div>
                  <div className="ordertrk-info">
                    <div className="ordertrk-info-icon">
                      <Handshake />
                    </div>
                    <p className="ordertrk-text-stat">Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trkorder-btm">
            <div className="elem-trkorder-act">
              <h4 className="trkorder-act-ttl">Order Activity</h4>
              <div className="act-list">
                <div className="act-item act-green">
                  <div className="item-icon">
                    <Checks size={22} />
                  </div>
                  <div className="item-content">
                    <p className="item-text">
                      Your order has been delivered. Thank you for shopping in
                      Clicon!
                    </p>
                    <p className="item-date">23 Jan, 2021 at 7:32 PM</p>
                  </div>
                </div>
                <div className="act-item act-blue">
                  <div className="item-icon">
                    <User size={22} />
                  </div>
                  <div className="item-content">
                    <p className="item-text">
                      Our delivery man (John Wick) Has picked-up your order for
                      delvery.
                    </p>
                    <p className="item-date">23 Jan, 2021 at 7:32 PM</p>
                  </div>
                </div>
                <div className="act-item act-blue">
                  <div className="item-icon">
                    <MapPinLine size={22} />
                  </div>
                  <div className="item-content">
                    <p className="item-text">
                      Your order has reached at last mile hub.
                    </p>
                    <p className="item-date">23 Jan, 2021 at 7:32 PM</p>
                  </div>
                </div>
                <div className="act-item act-blue">
                  <div className="item-icon">
                    <MapTrifold size={22} />
                  </div>
                  <div className="item-content">
                    <p className="item-text">
                      Your order on the way to (last mile) hub.
                    </p>
                    <p className="item-date">23 Jan, 2021 at 7:32 PM</p>
                  </div>
                </div>
                <div className="act-item act-green">
                  <div className="item-icon">
                    <CheckCircle size={22} />
                  </div>
                  <div className="item-content">
                    <p className="item-text">
                      Your order is successfully verified.
                    </p>
                    <p className="item-date">23 Jan, 2021 at 7:32 PM</p>
                  </div>
                </div>

                <div className="act-item act-blue">
                  <div className="item-icon">
                    <Notepad size={22} />
                  </div>
                  <div className="item-content">
                    <p className="item-text">Your order has been confirmed.</p>
                    <p className="item-date">23 Jan, 2021 at 7:32 PM</p>
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
