import "./Countdown.scss";

const Countdown = () => {
  return (
    <div className="comp-countdown">
      <div className="segment-countdown">
        <p className="countdown-label">Deals ends in</p>
        <div className="countdown-display">
          <span className="display-text">16d</span>
          <span className="display-sep">:</span>
          <span className="display-text">21h</span>
          <span className="display-sep">:</span>
          <span className="display-text">57m</span>
          <span className="display-sep">:</span>
          <span className="display-text">23s</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
