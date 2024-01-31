import "./Countdown.scss";

const Countdown = () => {
  return (
    <div className="comp-countdown">
      <div className="seg-cntdown">
        <p className="cntdown-label">Deals ends in</p>
        <div className="cntdown-dp">
          <span className="dp-text">16d</span>
          <span className="dp-sep">:</span>
          <span className="dp-text">21h</span>
          <span className="dp-sep">:</span>
          <span className="dp-text">57m</span>
          <span className="dp-sep">:</span>
          <span className="dp-text">23s</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
