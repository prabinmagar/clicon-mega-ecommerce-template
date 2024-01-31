import { ArrowRight, ShoppingCartSimple } from "@phosphor-icons/react";
import { Images } from "../../../assets/images";
import FilterBrands from "./FilterBrands";
import FilterCategory from "./FilterCategory";
import FilterPriceRange from "./FilterPriceRange";
import FilterTags from "./FilterTags";

const ProductFilter = () => {
  return (
    <div className="comp-prodfilter">
      <div className="seg-prodfilter">
        <div className="elem-fltr-cat">
          <FilterCategory />
        </div>
        <div className="elem-fltr-prange">
          <FilterPriceRange />
        </div>
        <div className="elem-fltr-brands">
          <FilterBrands />
        </div>
        <div className="elem-fltr-tag">
          <FilterTags />
        </div>
        <div className="elem-fltr-promo">
          <img className="promo-prod-img" src={Images.FilterPromo} alt="" />
          <div className="promo-prod-text">
            <img src={Images.FilterPromoText} alt="" />
            <div className="promo-prod-ttl">
              Heavy on Features. <br /> Light on Price.
            </div>
            <div className="promo-prod-price">
              <p className="price-lbl">Only for:</p>
              <p className="price-val">$299 USD</p>
            </div>
          </div>
          <div className="promo-prod-btns">
            <button type="button" className="pv-addtocart-btn btn btn-primary">
              <span className="btn-icon">
                <ShoppingCartSimple size={24} />
              </span>
              <span className="btn-text">add to cart</span>
            </button>
            <button
              type="button"
              className="pv-addtocart-btn btn btn-primary btn-outline"
            >
              <span className="btn-text">view details</span>
              <span className="btn-icon">
                <ArrowRight size={24} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
