import { ArrowRight } from "@phosphor-icons/react";
import "./SignInModal.scss";

const SignInModal = () => {
  return (
    <div className="comp-modal-signin">
      <div className="seg-form">
        <form action="" className="elem-signin-form">
          <h3 className="form-ttl">Sign in to your account</h3>
          <div className="form-item">
            <label htmlFor="" className="form-lbl">
              Email Address
            </label>
            <input type="text" className="form-ctrl" placeholder="" />
          </div>
          <div className="form-item">
            <label htmlFor="" className="form-lbl">
              Password
            </label>
            <input type="password" className="form-ctrl" placeholder="" />
          </div>
          <button type="button" className="btn btn-login btn-primary">
            <span className="btn-text">login</span>
            <span className="btn-icon">
              <ArrowRight size={16} />
            </span>
          </button>
          <div className="form-sep">
            <div className="sep-line"></div>
            <p className="sep-text">Don&apos;t have account</p>
            <div className="sep-line"></div>
          </div>
          <button type="button" className="btn btn-primary btn-outline btn-create-ac">
            <span className="btn-text">create account</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
