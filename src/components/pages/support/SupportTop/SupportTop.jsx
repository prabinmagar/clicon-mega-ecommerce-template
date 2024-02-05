import { Images } from "../../../../assets/images";
import "./SupportTop.scss";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SupportTop = () => {
  return (
    <div className="comp-support-top">
      <div className="container">
        <div className="segment-support-top-gridbox">
          <div className="support-gridbox-content">
            <div className="gridbox-content-badge">help center</div>
            <h3 className="gridbox-content-ttl">How we can help you!</h3>
            <div className="gridbox-content-form">
              <form action="">
                <div className="input-group">
                  <div className="form-elem-wrap">
                    <div className="form-icon">
                      <MagnifyingGlass size={24} weight="bold" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your question or keyword"
                      className="form-ctrl"
                    />
                  </div>
                  <button type="submit" className="form-btn">
                    search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="support-gridbox-img"
            style={{
              background: `url(${Images.SupportTop}) center right/70% no-repeat`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SupportTop;
