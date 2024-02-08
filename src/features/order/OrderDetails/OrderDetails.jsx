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
import "./OrderDetails.scss";
import { orders } from "../../../data/mockData";

const OrderDetails = () => {
  return (
    <div className="comp-order-details">
      <div className="order-details-summary">
        <div className="order-details-info">
          <div className="order-details-info-l">
            <div className="info-order-no">#986758700</div>
            <p className="info-order-data">
              4 Products <span className="dot"></span> Order Placed in 17 Jan,
              2021 at 7:32 PM
            </p>
          </div>
          <div className="order-details-info-r">
            <div className="info-order-total">$1199.00</div>
          </div>
        </div>
        <div className="order-details-arrival">
          Order expected arrival <span>23 Jan, 2021</span>
        </div>
        <div className="order-details-progress">
          <div className="order-details-bar">
            <div className="order-progress-step completed">
              <div className="order-progress-status">
                <span className="order-progress-status-dot">
                  <span className="status-completed-icon">
                    <Check size={14} weight="bold" />
                  </span>
                </span>
              </div>
              <div className="order-progress-info order-progress-success">
                <div className="order-progress-info-icon">
                  <Notebook />
                </div>
                <p className="order-progress-text-stat">Order Placed</p>
              </div>
            </div>

            <div className="order-progress-line"></div>

            <div className="order-progress-step on-progress">
              <div className="order-progress-status">
                <span className="order-progress-status-dot">
                  <span className="status-completed-icon">
                    <Check size={14} weight="bold" />
                  </span>
                </span>
              </div>
              <div className="order-progress-info order-progress-success">
                <div className="order-progress-info-icon">
                  <Package />
                </div>
                <p className="order-progress-text-stat">Packaging</p>
              </div>
            </div>

            <div className="order-progress-line"></div>

            <div className="order-progress-step">
              <div className="order-progress-status">
                <span className="order-progress-status-dot">
                  <span className="status-completed-icon">
                    <Check size={14} weight="bold" />
                  </span>
                </span>
              </div>
              <div className="order-progress-info">
                <div className="order-progress-info-icon">
                  <Truck />
                </div>
                <p className="order-progress-text-stat">On The Road</p>
              </div>
            </div>

            <div className="order-progress-line"></div>

            <div className="order-progress-step">
              <div className="order-progress-status">
                <span className="order-progress-status-dot">
                  <span className="status-completed-icon">
                    <Check size={14} weight="bold" />
                  </span>
                </span>
              </div>
              <div className="order-progress-info">
                <div className="order-progress-info-icon">
                  <Handshake />
                </div>
                <p className="order-progress-text-stat">Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="order-details-activity">
        <h4 className="order-details-activity-ttl">Order Activity</h4>
        <div className="activity-list">
          <div className="activity-item activity-green">
            <div className="activity-item-icon">
              <Checks size={22} />
            </div>
            <div className="activity-item-content">
              <p className="activity-item-text">
                Your order has been delivered. Thank you for shopping in Clicon!
              </p>
              <p className="activity-item-date">23 Jan, 2021 at 7:32 PM</p>
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
              <p className="activity-item-date">23 Jan, 2021 at 7:32 PM</p>
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
              <p className="activity-item-date">23 Jan, 2021 at 7:32 PM</p>
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
              <p className="activity-item-date">23 Jan, 2021 at 7:32 PM</p>
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
              <p className="activity-item-date">23 Jan, 2021 at 7:32 PM</p>
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
              <p className="activity-item-date">23 Jan, 2021 at 7:32 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-details-products">
        <h4 className="order-details-products-ttl">
          Product <span>(02)</span>
        </h4>
        <div className="order-products-tbl">
          <table>
            <thead>
              <tr>
                <th>products</th>
                <th>price</th>
                <th>quantity</th>
                <th>sub-total</th>
              </tr>
            </thead>
            <tbody>
              {orders[0]?.items?.map((order) => {
                return (
                  <tr key={order.productId}>
                    <td>
                      <div className="order-product">
                        <div className="order-product-img">
                          <img src={order.images[0]} alt="" />
                        </div>
                        <div className="order-product-info">
                          <div className="order-product-category">
                            {order.category}
                          </div>
                          <p className="order-product-name">
                            {order.productName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>${order.price}</td>
                    <td>x{order.quantity}</td>
                    <td>
                      <div className="order-product-subtotal">
                        ${order.price}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="order-details-msc">
        <div className="order-details-billing">
          <h4 className="order-details-msc-ttl">billing address</h4>
          <div className="order-details-msc-list">
            <p className="order-details-msc-text">
              <span className="order-details-msc-label">Kevin Gilbert</span>
            </p>
            <p className="order-details-msc-text">
              East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
              Flat No. 5D, Dhaka - 1200, Bangladesh
            </p>
            <p className="order-details-msc-text">+1-202-555-0118</p>
            <p className="order-details-msc-text">
              <span className="order-details-msc-label">Email:</span>
              kevin.gilbert@gmail.com
            </p>
          </div>
        </div>

        <div className="order-details-shipping">
          <h4 className="order-details-msc-ttl">shipping address</h4>
          <div className="order-details-msc-list">
            <p className="order-details-msc-text">
              <span className="order-details-msc-label">Kevin Gilbert</span>
            </p>
            <p className="order-details-msc-text">
              East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
              Flat No. 5D, Dhaka - 1200, Bangladesh
            </p>
            <p className="order-details-msc-text">
              <span className="order-details-msc-label">Phone Number:</span>{" "}
              +1-202-555-0118
            </p>
            <p className="order-details-msc-text">
              <span className="order-details-msc-label">Email:</span>{" "}
              kevin.gilbert@gmail.com
            </p>
          </div>
        </div>

        <div className="order-details-notes">
          <h4 className="order-details-msc-ttl">shipping address</h4>
          <div className="order-details-msc-list">
            <p className="order-details-msc-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              veniam obcaecati quidem doloribus temporibus nesciunt repudiandae
              porro harum reiciendis quaerat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
