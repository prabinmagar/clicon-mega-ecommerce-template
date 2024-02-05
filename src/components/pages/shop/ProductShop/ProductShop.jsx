import { CaretDown, MagnifyingGlass, X } from "@phosphor-icons/react";
import { products } from "../../../../data/mockData";
import ProductList from "../../../../features/product/ProductList/ProductList";
import Pagination from "../../../common/Pagination/Pagination";
import "./ProductShop.scss";

const ProductShop = () => {
  return (
    <div className="comp-product-shop">
      <div className="segment-product-shop">
        <div className="product-shop-head">
          <div className="product-shop-search-form">
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
          <div className="product-shop-sort-select">
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
        <div className="product-shop-filter">
          <div className="active-filter">
            <p className="active-filter-lbl">Active Filters:</p>
            <ul className="active-filter-list">
              <li className="active-filter-item">
                <span className="filter-item-txt">Electronics Devices</span>
                <button type="button" className="filter-item-btn">
                  <X size={12} weight="bold" />
                </button>
              </li>
              <li className="active-filter-item">
                <span className="filter-item-txt">5 Star Rating</span>
                <button type="button" className="filter-item-btn">
                  <X size={12} weight="bold" />
                </button>
              </li>
            </ul>
          </div>
          <div className="active-result">
            <span className="active-result-val">65, 867</span> Results found
          </div>
        </div>
        <ProductList
          productItems={products.slice(0, 24)}
          viewGap={true}
          viewRating={true}
        />
        <Pagination />
      </div>
    </div>
  );
};

export default ProductShop;
