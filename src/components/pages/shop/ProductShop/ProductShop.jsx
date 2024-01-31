import { CaretDown, MagnifyingGlass, X } from "@phosphor-icons/react";
import { products } from "../../../../data/mockData";
import ProductList from "../../../../features/product/ProductList/ProductList";
import Pagination from "../../../common/Pagination/Pagination";
import "./ProductShop.scss";

const ProductShop = () => {
  return (
    <div className="comp-prodshop">
      <div className="seg-prodshop">
        <div className="prodshop-head">
          <div className="prodshop-search-form">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="input-control"
                  placeholder="Search for anything ..."
                />
                <button className="input-btn">
                  <MagnifyingGlass size={20} />
                </button>
              </div>
            </form>
          </div>
          <div className="prodshop-sort-select">
            <p className="select-lbl">Sort by:</p>
            <div className="select-wrap">
              <select defaultValue={"trending"}>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
                <option value="">Latest</option>
              </select>
              <span className="select-icon">
                <CaretDown size={16} weight="bold" />
              </span>
            </div>
          </div>
        </div>
        <div className="prodshop-filter">
          <div className="act-filter">
            <p className="act-filt-lbl">Active Filters:</p>
            <ul className="act-filt-list">
              <li className="act-filt-item">
                <span className="filt-item-txt">Electronics Devices</span>
                <button type="button" className="filt-item-btn">
                  <X size={12} weight="bold" />
                </button>
              </li>
              <li className="act-filt-item">
                <span className="filt-item-txt">5 Star Rating</span>
                <button type="button" className="filt-item-btn">
                  <X size={12} weight="bold" />
                </button>
              </li>
            </ul>
          </div>
          <div className="act-result">
            <span className="act-res-val">65, 867</span> Results found
          </div>
        </div>
        <ProductList productItems={products.slice(0, 24)} viewGap={true} viewRating={true} />
        <Pagination />
      </div>
    </div>
  );
};

export default ProductShop;
