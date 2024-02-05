import { ArrowRight, Eye, EyeClosed } from "@phosphor-icons/react";
import "./ResetPasswordScreen.scss";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import { useState } from "react";

const ResetPasswordScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "User Account",
      link: "/user",
    },
    {
      text: "Sign In",
      link: "/sign",
    },
    {
      text: "Forgot Password",
      link: "/forgot_pwd",
    },
    {
      text: "Reset Password",
      link: "/reset_pwd",
    },
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePwdVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPwdVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div className="pg-reset-password">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-reset-password">
          <div className="reset-password-form">
            <div className="form-head">
              <h3 className="form-ttl">Reset Password</h3>
              <p className="form-lead-text">
                Duis sagittis molestie tellus, at eleifend sapien pellque quis.
                Fusce lorem nunc, fringilla sit amet nunc.
              </p>
            </div>
            <form action="">
              <div className="form-elems-wrap">
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
                      {showPassword ? (
                        <Eye size={20} />
                      ) : (
                        <EyeClosed size={20} />
                      )}
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
              </div>
              <button type="button" className="btn btn-primary btn-sm form-btn">
                <span className="btn-text">reset password</span>
                <span className="btn-icon">
                  <ArrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
