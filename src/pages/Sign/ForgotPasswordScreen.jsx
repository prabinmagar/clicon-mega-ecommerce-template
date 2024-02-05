import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import "./ForgotPasswordScreen.scss";
import { Link } from "react-router-dom";

const ForgotPasswordScreen = () => {
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
      text: "Forget Password",
      link: "/forgot_pwd",
    },
  ];

  return (
    <div className="pg-forgot-password">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-forgot-password">
          <div className="forgot-password-form">
            <div className="form-head">
              <h3 className="form-ttl">Forget Password</h3>
              <p className="form-lead-text">
                Enter the email address or mobile phone number associated with
                your Clicon account.
              </p>
            </div>
            <form action="">
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Email Address
                </label>
                <input type="email" className="form-ctrl" />
              </div>
              <button type="button" className="btn btn-primary btn-sm form-btn">
                <span className="btn-text">send code</span>
                <span className="btn-icon">
                  <ArrowRight />
                </span>
              </button>
              <div className="form-text-group">
                <p className="form-text">
                  Already have account?
                  <Link to="/" className="form-link">
                    Sign In
                  </Link>
                </p>
                <p className="form-text">
                  Don&apos;t have account?
                  <Link to="" className="form-link">
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className="form-foot">
                <p>
                  You may contact
                  <span className="highlighted-txt">Customer Service</span> for
                  help restoring access to your account.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
