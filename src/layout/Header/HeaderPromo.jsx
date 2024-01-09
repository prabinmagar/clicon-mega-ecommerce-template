import { ArrowRight, X } from "@phosphor-icons/react";

const HeaderPromo = () => {
  return (
    <div className="comp-promo">
      <div className="container">
        <div className="seg-promo">
          <div className="elem-bf-title">
            <span className="ttl-bg-text">Black</span>
            <span className="ttl-plain-text">Friday</span>
          </div>
          <div className="elem-bf-discount">
            <span className="text-sm">Up to</span>
            <span className="text-lg">59%</span>
            <span className="text-md">off</span>
          </div>
          <div className="elem-bf-btn">
            <a href="/shop" className="btn">
              <span className="btn-text">shop now</span>
              <span className="btn-icon">
                <ArrowRight size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* remove btn */}
      <button type="button" className="btn-close">
        <X size={16} />
      </button>
    </div>
  );
};

export default HeaderPromo;
