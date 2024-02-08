import { CaretDown, Eye, EyeClosed } from "@phosphor-icons/react";
import { Images } from "../../../assets/images";
import "./SettingScreen.scss";
import { PropTypes } from "prop-types";
import { useState } from "react";

const SettingScreen = () => {
  return (
    <div className="pg-setting">
      <div className="setting-block setting-block-account">
        <div className="setting-block-head">
          <h4 className="setting-block-ttl">account setting</h4>
        </div>
        <div className="setting-block-content">
          <div className="setting-account-img">
            <img src={Images.AccountAvatar} alt="" />
          </div>
          <div className="setting-block-form">
            <form action="">
              <div className="form-elems-wrap">
                <div className="form-elem-cols-2">
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      Display name
                    </label>
                    <input type="text" className="form-ctrl" />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      Username
                    </label>
                    <input type="text" className="form-ctrl" />
                  </div>
                </div>
                <div className="form-elem-cols-2">
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      Full name
                    </label>
                    <input type="text" className="form-ctrl" />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      Email
                    </label>
                    <input type="email" className="form-ctrl" />
                  </div>
                </div>
                <div className="form-elem-cols-2">
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      Secondary Email
                    </label>
                    <input type="email" className="form-ctrl" />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      Phone Number
                    </label>
                    <input type="text" className="form-ctrl" />
                  </div>
                </div>
                <div className="form-elem-cols-2 has-subcols">
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      Country/Region
                    </label>
                    <div className="form-select">
                      <select>
                        <option value="">USA</option>
                        <option value="">India</option>
                        <option value="">France</option>
                      </select>
                      <span className="select-icon">
                        <CaretDown size={16} weight="bold" />
                      </span>
                    </div>
                  </div>

                  <div className="form-elem-subcols-2">
                    <div className="form-elem">
                      <label htmlFor="" className="form-lbl">
                        Country/Region
                      </label>
                      <div className="form-select">
                        <select>
                          <option value="">Tenesse</option>
                          <option value="">New Delhi</option>
                          <option value="">Paris</option>
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
                      <input type="text" className="form-ctrl" />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-sm form-btn">
                <div className="btn-text">save changes</div>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="setting-block-group">
        <div className="setting-block setting-block-billing">
          <div className="setting-block-head">
            <h4 className="setting-block-ttl">billing address</h4>
          </div>
          <div className="setting-block-content">
            <form action="">
              <div className="form-elems-wrap">
                <div className="form-elem-cols-2">
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      First Name
                    </label>
                    <input type="text" className="form-ctrl" />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      Last Name
                    </label>
                    <input type="text" className="form-ctrl" />
                  </div>
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Company Name{" "}
                    <span className="form-lbl-subtext">(Optional)</span>
                  </label>
                  <input type="text" className="form-ctrl" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Address
                  </label>
                  <input type="email" className="form-ctrl" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Country
                  </label>
                  <div className="form-select">
                    <select>
                      <option value="">USA</option>
                      <option value="">India</option>
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
                  <div className="form-select">
                    <select>
                      <option value="">Select ...</option>
                      <option value="">USA</option>
                      <option value="">India</option>
                      <option value="">France</option>
                    </select>
                    <span className="select-icon">
                      <CaretDown size={16} weight="bold" />
                    </span>
                  </div>
                </div>

                <div className="form-elem-cols-2">
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      City
                    </label>
                    <div className="form-select">
                      <select>
                        <option value="">Tenesse</option>
                        <option value="">New Delhi</option>
                        <option value="">Paris</option>
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
                    <input type="text" className="form-ctrl" />
                  </div>
                </div>

                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Email
                  </label>
                  <input type="email" className="form-ctrl" />
                </div>

                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Phone Number
                  </label>
                  <input type="email" className="form-ctrl" />
                </div>
              </div>
              <button type="submit" className="btn form-btn btn-sm btn-primary">
                <div className="btn-text">save changes</div>
              </button>
            </form>
          </div>
        </div>

        <div className="setting-block setting-block-shipping">
          <div className="setting-block-head">
            <h4 className="setting-block-ttl">shipping address</h4>
          </div>
          <div className="setting-block-content">
            <form action="">
              <div className="form-elems-wrap">
                <div className="form-elem-cols-2">
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      First Name
                    </label>
                    <input type="text" className="form-ctrl" />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      Last Name
                    </label>
                    <input type="text" className="form-ctrl" />
                  </div>
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Company Name{" "}
                    <span className="form-lbl-subtext">(Optional)</span>
                  </label>
                  <input type="text" className="form-ctrl" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Address
                  </label>
                  <input type="email" className="form-ctrl" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Country
                  </label>
                  <div className="form-select">
                    <select>
                      <option value="">USA</option>
                      <option value="">India</option>
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
                  <div className="form-select">
                    <select>
                      <option value="">Select ...</option>
                      <option value="">USA</option>
                      <option value="">India</option>
                      <option value="">France</option>
                    </select>
                    <span className="select-icon">
                      <CaretDown size={16} weight="bold" />
                    </span>
                  </div>
                </div>

                <div className="form-elem-cols-2">
                  <div className="form-elem">
                    <label htmlFor="" className="form-lbl">
                      City
                    </label>
                    <div className="form-select">
                      <select>
                        <option value="">Tenesse</option>
                        <option value="">New Delhi</option>
                        <option value="">Paris</option>
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
                    <input type="text" className="form-ctrl" />
                  </div>
                </div>

                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Email
                  </label>
                  <input type="email" className="form-ctrl" />
                </div>

                <div className="form-elem">
                  <label htmlFor="" className="form-lbl">
                    Phone Number
                  </label>
                  <input type="email" className="form-ctrl" />
                </div>
              </div>
              <button type="submit" className="btn form-btn btn-sm btn-primary">
                <div className="btn-text">save changes</div>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="setting-block setting-block-password">
        <div className="setting-block-head">
          <h4 className="setting-block-ttl">change password</h4>
        </div>
        <div className="setting-block-content">
          <div className="setting-block-form">
            <form action="">
              <div className="form-elems-wrap">
                <div className="form-elem-cols-3">
                  <PasswordInput label="Current Password" />
                  <PasswordInput
                    label="New Password"
                    placeholder="8+ characters"
                  />
                  <PasswordInput label="Confirm Password" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-sm form-btn">
                <div className="btn-text">change password</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingScreen;

const PasswordInput = ({ label, value, placeholder, isDisabled, name, id }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePwdVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="form-elem">
      <label htmlFor="" className="form-lbl">
        {label}
      </label>
      <div className="form-ctrl-wrap">
        <input
          type={`${showPassword ? "text" : "password"}`}
          className="form-ctrl"
          placeholder={placeholder}
          id={id}
          name={name}
        />
        <button
          type="button"
          className="password-toggle-btn"
          onClick={() => togglePwdVisibility()}
        >
          {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
        </button>
      </div>
    </div>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string || "",
  value: PropTypes.string || "",
  placeholder: PropTypes.string || "",
  isDisabled: PropTypes.bool,
  name: PropTypes.string || "",
  id: PropTypes.string || "",
};

PasswordInput.defaultProps = {
  label: "",
  value: "",
  placeholder: "",
  isDisabled: false,
  name: "",
  id: "",
};
