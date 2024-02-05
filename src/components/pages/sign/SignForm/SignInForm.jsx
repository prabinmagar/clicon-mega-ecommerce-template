import { Eye } from "@phosphor-icons/react/dist/ssr";
import "./SignForm.scss";
import { ArrowRight, EyeClosed } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Icons } from "../../../../assets/icons";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePwdVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="comp-signin-form">
      <div className="segment-signin-form">
        <div className="signin-form">
          <form>
            <div className="form-elems-wrap">
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Email Address
                </label>
                <input type="text" className="form-ctrl" />
              </div>
              <div className="form-elem">
                <div className="form-row">
                  <label htmlFor="" className="form-lbl">
                    Password
                  </label>
                  <Link to="/" className="form-link">
                    Forgot Password
                  </Link>
                </div>
                <div className="form-ctrl-wrap">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    className="form-ctrl"
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
            </div>
            <button type="button" className="btn btn-primary btn-sm form-btn">
              <span className="btn-text">sign in</span>
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

export default SignInForm;
