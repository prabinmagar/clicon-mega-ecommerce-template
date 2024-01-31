import { Checks } from "@phosphor-icons/react";
import { Images } from "../../../../assets/images";
import "./WhoWeAre.scss";

const WhoWeAre = () => {
  return (
    <div className="comp-wwr">
      <div className="container">
        <div className="seg-wwr-gridbox">
          <div className="elem-gbox-content">
            <div className="elem-wwr-badge">who we are</div>
            <h2 className="elem-wwr-ttl">
              Clico - largest electronics retail shop in the world.
            </h2>
            <p className="elem-wwr-lead">
              Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
              vestibulum risus, ac tincidunt diam lectus id magna. Praesent
              maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a
              dui aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.{" "}
            </p>
            <ul className="elem-wwr-feats">
              <li className="wwr-feat-item">
                <span className="feat-item-bullet">
                  <Checks size={20} />
                </span>
                <span className="feat-item-txt">
                  Great 24/7 customer services.
                </span>
              </li>
              <li className="wwr-feat-item">
                <span className="feat-item-bullet">
                  <Checks size={20} />
                </span>
                <span className="feat-item-txt">600+ Dedicated employe.</span>
              </li>
              <li className="wwr-feat-item">
                <span className="feat-item-bullet">
                  <Checks size={20} />
                </span>
                <span className="feat-item-txt">
                  50+ Branches all over the world.
                </span>
              </li>
              <li className="wwr-feat-item">
                <span className="feat-item-bullet">
                  <Checks size={20} />
                </span>
                <span className="feat-item-txt">
                  Over 1 Million Electronics Products
                </span>
              </li>
            </ul>
          </div>
          <div className="elem-gbox-img">
            <img src={Images.AboutTop} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
