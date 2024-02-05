import { Play } from "@phosphor-icons/react";
import "./AboutBanner.scss";

const AboutBanner = () => {
  return (
    <div className="comp-about-banner">
      <div className="container">
        <div className="about-banner">
          <h3 className="about-banner-ttl">
            Your trusted and reliable retail shop
          </h3>
          <p className="about-banner-lead">
          Explore our store and discover a world of reliability and trustworthiness. Thank you for choosing Clicon as your preferred destination for all your shopping needs. We look forward to serving you with dedication and integrity.
          </p>
          <button type="button" className="about-banner-btn">
            <Play size={24} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
