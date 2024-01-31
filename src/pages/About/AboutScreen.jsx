import { Images } from "../../assets/images";
import AboutBanner from "../../components/pages/about/AboutBanner/AboutBanner";
import Teams from "../../components/pages/about/Teams/Teams";
import WhoWeAre from "../../components/pages/about/WhoWeAre/WhoWeAre";
import "./AboutScreen.scss";
import Newsletter from "../../components/common/Newsletter/Newsletter";

const AboutScreen = () => {
  return (
    <div className="pg-about">
      <div className="seg-about">
        <div className="elem-abt-wwr">
          <WhoWeAre />
        </div>
        <div className="elem-abt-teams">
          <Teams />
        </div>
        <div className="elem-abt-bnr" style={{
          background: `url(${Images.AboutBanner}) center/cover no-repeat`
        }}>
          <AboutBanner />
        </div>
        <Newsletter />
      </div>
    </div>
  );
};

export default AboutScreen;
