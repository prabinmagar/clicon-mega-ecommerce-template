import { ArrowRight, X } from "@phosphor-icons/react";
import "./SignInModal.scss";

const SignInModal = () => {
  return (
    <div className="comp-modal-signin">
      <button type="button" className="signin-close-btn">
        <X size={16} />
      </button>
      <div className="segment-signin-form">
        <form action="" className="modal-signin-form">
          <h3 className="signin-form-ttl">Sign in to your account</h3>
          <div className="signin-form-item">
            <label htmlFor="" className="signin-form-lbl">
              Email Address
            </label>
            <input type="text" className="signin-form-ctrl" placeholder="" />
          </div>
          <div className="signin-form-item">
            <label htmlFor="" className="signin-form-lbl">
              Password
            </label>
            <input
              type="password"
              className="signin-form-ctrl"
              placeholder=""
            />
          </div>
          <button type="button" className="btn btn-login btn-primary">
            <span className="btn-text">login</span>
            <span className="btn-icon">
              <ArrowRight size={16} />
            </span>
          </button>
          <div className="signin-form-sep">
            <div className="sep-line"></div>
            <p className="sep-text">Don&apos;t have account</p>
            <div className="sep-line"></div>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-outline btn-create-ac"
          >
            <span className="btn-text">create account</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
