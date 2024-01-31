import "./Coupon.scss";

const Coupon = () => {
  return (
    <div className="comp-coupon">
      <div className="seg-coupon">
        <div className="elem-coupon">
          <p className="coupon-ttl">Coupon Code</p>
          <form className="coupon-form" action="">
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
