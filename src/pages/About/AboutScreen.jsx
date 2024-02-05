import { Images } from "../../assets/images";
import AboutBanner from "../../components/pages/about/AboutBanner/AboutBanner";
import Teams from "../../components/pages/about/Teams/Teams";
import WhoWeAre from "../../components/pages/about/WhoWeAre/WhoWeAre";
import Newsletter from "../../components/common/Newsletter/Newsletter";

const AboutScreen = () => {
  return (
    <div className="pg-about">
      <div className="segment-about">
        <WhoWeAre />
        <Teams />
        <div
          className="about-banner"
          style={{
            background: `url(${Images.AboutBanner}) center/cover no-repeat`,
          }}
        >
          <AboutBanner />
        </div>
        <Newsletter />
      </div>
    </div>
  );
};

export default AboutScreen;
