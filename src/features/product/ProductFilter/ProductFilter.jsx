import { ArrowRight, ShoppingCartSimple } from "@phosphor-icons/react";
import { Images } from "../../../assets/images";
import FilterBrands from "./FilterBrands";
import FilterCategory from "./FilterCategory";
import FilterPriceRange from "./FilterPriceRange";
import FilterTags from "./FilterTags";

const ProductFilter = () => {
  return (
    <div className="comp-product-filter">
      <div className="segment-product-filter">
        <FilterCategory />
        <FilterPriceRange />
        <FilterBrands />
        <FilterTags />
        <div className="filter-block-promo">
          <img className="promo-product-img" src={Images.FilterPromo} alt="" />
          <div className="promo-product-text">
            <img src={Images.FilterPromoText} alt="" />
            <div className="promo-product-ttl">
              Heavy on Features. <br /> Light on Price.
            </div>
            <div className="promo-product-price">
              <p className="price-lbl">Only for:</p>
              <p className="price-val">$299 USD</p>
            </div>
          </div>
          <div className="promo-product-btns">
            <button type="button" className="btn-add-to-cart btn btn-primary">
              <span className="btn-icon">
                <ShoppingCartSimple size={24} />
              </span>
              <span className="btn-text">add to cart</span>
            </button>
            <button
              type="button"
              className="btn-view-details btn btn-primary btn-outline"
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
