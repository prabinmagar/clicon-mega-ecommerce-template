import { CaretDown, Check } from "@phosphor-icons/react";
import "./CheckoutForm.scss";
import { paymentOpts } from "../../../../data/mockData";

const CheckoutForm = () => {
  return (
    <div className="comp-checkout-form">
      <div className="segment-checkout-form">
        <div className="checkout-billing-info">
          <h4 className="checkout-form-ttl">Billing Information</h4>
          <div className="billing-info-form">
            <div className="form-elem-cols-2">
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Username
                </label>
                <div className="form-ctrl-cols-2">
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-ctrl"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-ctrl"
                  />
                </div>
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Company Name<span className="form-ctrl-opt">(Optional)</span>
                </label>
                <input type="text" className="form-ctrl" />
              </div>
            </div>

            <div className="form-elem">
              <label htmlFor="" className="form-lbl">
                Address
              </label>
              <input type="text" className="form-ctrl" />
            </div>

            <div className="form-elem-cols-4">
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Country
                </label>
                <div className="select-wrap">
                  <select>
                    <option value="">Select ...</option>
                    <option value="">USA</option>
                    <option value="">France</option>
                  </select>
                  <span className="select-icon">
                    <CaretDown size={16} weight="bold" />
                  </span>
                </div>
              </div>

              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Region/State
                </label>
                <div className="select-wrap">
                  <select>
                    <option value="">Select ...</option>
                    <option value="">Region 1</option>
                  </select>
                  <span className="select-icon">
                    <CaretDown size={16} weight="bold" />
                  </span>
                </div>
              </div>

              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  City
                </label>
                <div className="select-wrap">
                  <select>
                    <option value="">Select ...</option>
                    <option value="">New York</option>
                    <option value="">Ohio</option>
                  </select>
                  <span className="select-icon">
                    <CaretDown size={16} weight="bold" />
                  </span>
                </div>
              </div>

              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Zip Code
                </label>
                <div className="select-wrap">
                  <select>
                    <option value="">Select ...</option>
                    <option value="">44858</option>
                  </select>
                  <span className="select-icon">
                    <CaretDown size={16} weight="bold" />
                  </span>
                </div>
              </div>
            </div>

            <div className="form-elem-cols-2">
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Email
                </label>
                <input type="text" className="form-ctrl" />
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Phone Number
                </label>
                <input type="text" className="form-ctrl" />
              </div>
            </div>
            <div className="form-elem-check">
              <div className="check-wrap">
                <input type="checkbox" className="form-ctrl" />
                <div className="check-box">
                  <span className="check-icon">
                    <Check size={16} weight="bold" />
                  </span>
                </div>
              </div>
              <label htmlFor="" className="form-lbl">
                Ship into different address
              </label>
            </div>
          </div>
        </div>

        <div className="checkout-pay-options">
          <h4 className="checkout-form-ttl">Payment Option</h4>
          <div className="pay-options-list">
            {paymentOpts?.map((payOpt, index) => {
              return (
                <div className="pay-options-item" key={index}>
                  <div className="pay-options-img">
                    <img src={`${payOpt.image}`} alt="" />
                  </div>
                  <p className="pay-options-name">{payOpt.name}</p>
                  <div className="radio-wrap">
                    <input type="radio" name="payment_opts" />
                    <span className="radio-check"></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pay-options-form">
            <div className="form-elem">
              <label htmlFor="" className="form-lbl">
                Name on Card
              </label>
              <input type="text" className="form-ctrl" />
            </div>
            <div className="form-elem">
              <label htmlFor="" className="form-lbl">
                Card Number
              </label>
              <input type="text" className="form-ctrl" />
            </div>

            <div className="form-elem-cols-2">
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Expire Date
                </label>
                <input type="text" className="form-ctrl" placeholder="DD/YY" />
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  CVC
                </label>
                <input type="text" className="form-ctrl" />
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-additional-info">
          <h4 className="checkout-form-ttl">Additional Information</h4>
          <div className="form-elem">
            <label htmlFor="" className="form-lbl">
              Order Notes <span className="form-ctrl-opt">(Optional)</span>
            </label>
            <textarea
              className="form-ctrl"
              placeholder="Notes about your order, e.g. special notes for delivery"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
