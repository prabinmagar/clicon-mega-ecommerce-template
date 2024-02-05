import "./Title.scss";
import PropTypes from "prop-types";

const Title = ({ titleText, isCentered }) => {
  return (
    <div className={`comp-title ${isCentered ? "centered" : ""}`}>
      <h3 className="ttl-text">{titleText}</h3>
    </div>
  );
};

export default Title;

Title.propTypes = {
  titleText: PropTypes.string,
  isCentered: PropTypes.bool,
};

Title.propDefault = {
  isCentered: false,
};
