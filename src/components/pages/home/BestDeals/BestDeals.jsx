import {
  ArrowRight,
  Eye,
  Heart,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import Title from "../../../common/Title/Title";
import Countdown from "../../../widgets/Countdown/Countdown";
import "./BestDeals.scss";
import { Link } from "react-router-dom";
import ProductList from "../../../../features/product/ProductList/ProductList";
import { products } from "../../../../data/mockData";
import ProductListItem from "../../../../features/product/ProductList/ProductListItem";

const BestDeals = () => {
  const productItems = products?.filter(
    (product) => product.isBestDeal === true
  );

  return (
    <div className="comp-sc-best-deals">
      <div className="container">
        <div className="seg-head">
          <Title titleText={"Best Deals"} />
          <Countdown />
          <Link to="/" className="link link-secondary">
            <span className="link-text">Browse All Product</span>
            <span className="link-icon">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
        <div className="seg-body">
          <div className="seg-gridbox">
            <div className="elem-gbox-l">
              <ProductListItem
                productItem={productItems[0]}
                viewDescription={true}
                viewRating={true}
                viewButtons={false}
              />
              <div className="item-btns item-btns-lg">
                <button type="button" className="item-btn btn-wishlist">
                  <Heart size={24} />
                </button>
                <button type="button" className="item-btn btn-addtocart">
                  <ShoppingCartSimple size={24} />
                  <span className="btn-text">add to cart</span>
                </button>
                <button type="button" className="item-btn btn-view">
                  <Eye size={24} />
                </button>
              </div>
            </div>
            <div className="elem-gbox-r">
              <ProductList viewGap={false} productItems={productItems?.slice(1, 9)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
