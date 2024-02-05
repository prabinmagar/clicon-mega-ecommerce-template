import { Link } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import "./VerifyScreen.scss";

const VerifyScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Sign Up",
      link: "/sign",
    },
    {
      text: "Email Verification",
      link: "/mail_verify",
    },
  ];

  return (
    <div className="pg-verify-mail">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-verify-mail">
          <div className="verify-mail-form">
            <div className="form-head">
              <h3 className="form-ttl">Verify Your Email Address</h3>
              <p className="form-lead-text">
                Nam ultricies lectus a risus blandit elementum. Quisque arcu
                arcu, tristique a eu in diam.
              </p>
            </div>
            <form action="">
              <div className="form-elems-wrap">
                <div className="form-elem">
                  <div className="form-row">
                    <label htmlFor="" className="form-lbl">
                      Verification code
                    </label>
                    <Link to="/" className="form-link">
                      Resend Code
                    </Link>
                  </div>
                  <input type="text" className="form-ctrl" />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm form-btn"
                >
                  <span className="btn-text">verify me</span>
                  <span className="btn-icon">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyScreen;
