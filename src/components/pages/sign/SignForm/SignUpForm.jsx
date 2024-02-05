import { Link } from "react-router-dom";
import "./SignForm.scss";
import { useState } from "react";
import { ArrowRight, Check, Eye, EyeClosed } from "@phosphor-icons/react";
import { Icons } from "../../../../assets/icons";
import "./SignForm.scss";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePwdVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPwdVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div className="comp-signup-form">
      <div className="seg-signup-form">
        <div className="signup-form">
          <form>
            <div className="form-elems-wrap">
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Name
                </label>
                <input type="text" className="form-ctrl" />
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Email Address
                </label>
                <input type="text" className="form-ctrl" />
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Password
                </label>
                <div className="form-ctrl-wrap">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    className="form-ctrl"
                    placeholder="8+ characters"
                  />
                  <button
                    type="button"
                    className="pwd-toggle-icon-btn"
                    onClick={() => togglePwdVisibility()}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                  </button>
                </div>
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Confirm Password
                </label>
                <div className="form-ctrl-wrap">
                  <input
                    type={`${showConfirmPassword ? "text" : "password"}`}
                    className="form-ctrl"
                  />
                  <button
                    type="button"
                    className="pwd-toggle-icon-btn"
                    onClick={() => toggleConfirmPwdVisibility()}
                  >
                    {showConfirmPassword ? (
                      <Eye size={20} />
                    ) : (
                      <EyeClosed size={20} />
                    )}
                  </button>
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
                  Are you agree to Clicon{" "}
                  <Link to="" className="form-link">
                    Terms of Condition
                  </Link>{" "}
                  and{" "}
                  <Link to="" className="form-link">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-sm form-btn">
              <span className="btn-text">sign up</span>
              <span className="btn-icon">
                <ArrowRight size={20} />
              </span>
            </button>
            <div className="form-sep">
              <span className="form-sep-line"></span>
              <span className="form-sep-text">or</span>
              <span className="form-sep-line"></span>
            </div>
            <div className="form-sign-options">
              <Link to="/" className="form-sign-option">
                <span className="sign-option-icon">
                  <img src={Icons.GoogleIcon} alt="" />
                </span>
                Login with Google
              </Link>
              <Link to="/" className="form-sign-option">
                <span className="sign-option-icon">
                  <img src={Icons.AppleIcon} alt="" />
                </span>
                Login with Google
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
