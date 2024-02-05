import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import "./AskSupport.scss";

const AskSupport = () => {
  return (
    <div className="comp-ask-support">
      <div className="segment-ask-support">
        <h4 className="ask-support-ttl">
          Don&apos;t find your answer. Ask for support.
        </h4>
        <p className="ask-support-lead">
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
          molestie accumsan dui, non iaculis primis in faucibu raesent eget sem
          purus.
        </p>

        <div className="ask-support-form">
          <form>
            <div className="form-elems-wrap">
              <div className="form-elem">
                <input
                  type="email"
                  className="form-ctrl"
                  placeholder="Email address"
                />
              </div>
              <div className="form-elem">
                <input
                  type="text"
                  className="form-ctrl"
                  placeholder="Subject"
                />
              </div>
              <div className="form-elem">
                <textarea
                  className="form-ctrl"
                  placeholder="Message (Optional)"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-sm">
              <span className="btn-text">send message</span>
              <span className="btn-icon">
                <ArrowRight size={20} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskSupport;
