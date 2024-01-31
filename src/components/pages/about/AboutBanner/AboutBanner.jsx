import { Play } from "@phosphor-icons/react";
import "./AboutBanner.scss";

const AboutBanner = () => {
  return (
    <div className="comp-abt-bnr">
      <div className="container">
        <div className="seg-abt-bnr">
          <h3 className="seg-abt-bnr-ttl">
            Your trusted and reliable retail shop
          </h3>
          <p className="seg-abt-bnr-lead">
            Praesent sed semper metus. Nunc aliquet dolor mauris, et fringilla
            elit gravida eget. Nunc consequat auctor urna a placerat.
          </p>
          <button type="button" className="seg-abt-bnr-btn">
            <Play size={24} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
