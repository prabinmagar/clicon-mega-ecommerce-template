import "./Coupon.scss";

const Coupon = () => {
  return (
    <div className="comp-coupon-code">
      <div className="segment-coupon-code">
        <div className="coupon-code">
          <p className="coupon-code-ttl">Coupon Code</p>
          <form className="coupon-code-form" action="">
            <input
              type="email"
              className="form-ctrl"
              placeholder="Email address"
            />
            <button type="button" className="form-btn">
              apply coupon
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
