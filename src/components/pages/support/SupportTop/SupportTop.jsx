import { Images } from "../../../../assets/images";
import "./SupportTop.scss";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SupportTop = () => {
  return (
    <div className="comp-supp-top">
      <div className="container">
        <div className="seg-supp-top-gridbox">
          <div className="elem-gbox-content">
            <div className="gbox-content-badge">help center</div>
            <h3 className="gbox-content-ttl">How we can help you!</h3>
            <div className="gbox-content-form">
              <form action="">
                <div className="input-group">
                  <div className="input-group-ctrl">
                    <div className="input-group-icon">
                      <MagnifyingGlass size={24} weight="bold" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your question or keyword"
                    />
                  </div>
                  <button type="submit" className="input-group-btn">
                    search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="elem-gbox-img"
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
