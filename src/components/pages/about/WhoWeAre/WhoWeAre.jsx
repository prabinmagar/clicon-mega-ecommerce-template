import { Checks } from "@phosphor-icons/react";
import { Images } from "../../../../assets/images";
import "./WhoWeAre.scss";

const WhoWeAre = () => {
  return (
    <div className="comp-about-who">
      <div className="container">
        <div className="segment-about-who-gridbox">
          <div className="about-who-gridbox-content">
            <div className="about-who-badge">who we are</div>
            <h2 className="about-who-ttl">
              Clico - largest electronics retail shop in the world.
            </h2>
            <p className="about-who-lead">
              Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
              vestibulum risus, ac tincidunt diam lectus id magna. Praesent
              maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a
              dui aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.{" "}
            </p>
            <ul className="about-who-list">
              <li className="about-who-item">
                <span className="who-item-bullet">
                  <Checks size={20} />
                </span>
                <span className="who-item-txt">
                  Great 24/7 customer services.
                </span>
              </li>
              <li className="about-who-item">
                <span className="who-item-bullet">
                  <Checks size={20} />
                </span>
                <span className="who-item-txt">600+ Dedicated employe.</span>
              </li>
              <li className="about-who-item">
                <span className="who-item-bullet">
                  <Checks size={20} />
                </span>
                <span className="who-item-txt">
                  50+ Branches all over the world.
                </span>
              </li>
              <li className="about-who-item">
                <span className="who-item-bullet">
                  <Checks size={20} />
                </span>
                <span className="who-item-txt">
                  Over 1 Million Electronics Products
                </span>
              </li>
            </ul>
          </div>
          <div className="about-who-gridbox-img">
            <img src={Images.AboutTop} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
