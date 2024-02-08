import { Package, Receipt, Rocket } from "@phosphor-icons/react";
import { Images } from "../../../../assets/images";
import "./DashboardTop.scss";

const DashboardTop = () => {
  return (
    <div className="comp-dboard-top">
      <div className="segment-dboard-top">
        <div className="dboard-top-name">Hello, Kevin</div>
        <p className="dboard-top-lead">
          From your account dashboard. you can easily check & view your{" "}
          <span> Recent Orders</span>, manage your <span>Password</span> and{" "}
          <span>Account Details.</span>
        </p>

        <div className="dboard-top-gridbox">
          <div className="dboard-account-block">
            <h4 className="dboard-block-ttl">account info</h4>
            <div className="dboard-block-content">
              <div className="dboard-account-user">
                <div className="dboard-account-user-img">
                  <img src={Images.UserProfile} alt="" />
                </div>
                <div className="dboard-account-user-text">
                  <p className="account-user">Kevin Gilbert</p>
                  <p>Dhaka - 1207, Bangladesh</p>
                </div>
              </div>
              <div className="dboard-block-list">
                <div className="dboard-block-item">
                  <p className="dboard-block-item-text">
                    <span className="block-text-label">Email:</span>
                    kevin.gilbert@gmail.com
                  </p>
                </div>
                <div className="dboard-block-item">
                  <p className="dboard-block-item-text">
                    <span className="block-text-label">Sec Mail:</span>
                    kevin12345@gmail.com
                  </p>
                </div>
                <div className="dboard-block-item">
                  <p className="dboard-block-item-text">
                    <span className="block-text-label">Phone:</span>
                    +1-202-555-0118
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-outline btn-sm"
              >
                <div className="btn-text">edit account</div>
              </button>
            </div>
          </div>
          <div className="dboard-billing-block">
            <h4 className="dboard-block-ttl">billing address</h4>
            <div className="dboard-block-content">
              <div className="dboard-block-list">
                <div className="dboard-block-item">
                  <p className="dboard-block-item-text">
                    <span className="block-text-label">Kevin Gilbert</span>
                  </p>
                </div>
                <div className="dboard-block-item">
                  <p className="dboard-block-item-text">
                    East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                    1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                  </p>
                </div>
                <div className="dboard-block-item">
                  <p className="dboard-block-item-text">
                    <span className="block-text-label">Phone Number:</span>
                    +1-202-555-0118
                  </p>
                </div>
                <div className="dboard-block-item">
                  <p className="dboard-block-item-text">
                    <span className="block-text-label">Email:</span>
                    kevin.gilbert@gmail.com
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-outline btn-sm"
              >
                <div className="btn-text">edit address</div>
              </button>
            </div>
          </div>
          <div className="dboard-order-sum">
            <div className="dboard-order-sum-item">
              <span className="order-sum-item-icon">
                <Rocket size={32} color="#2da5f3" weight="duotone" />
              </span>
              <span className="order-sum-item-text">
                <span className="order-sum-val">154</span>
                <span className="order-sum-text">Total Order</span>
              </span>
            </div>
            <div className="dboard-order-sum-item">
              <span className="order-sum-item-icon">
                <Receipt size={32} color="#fa8232" weight="duotone" />
              </span>
              <span className="order-sum-item-text">
                <span className="order-sum-val">05</span>
                <span className="order-sum-text">Pending Orders</span>
              </span>
            </div>
            <div className="dboard-order-sum-item">
              <span className="order-sum-item-icon">
                <Package size={32} color="#02db22" weight="duotone" />
              </span>
              <span className="order-sum-item-text">
                <span className="order-sum-val">149</span>
                <span className="order-sum-text">Completed Orders</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
