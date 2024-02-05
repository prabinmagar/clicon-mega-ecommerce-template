import PropTypes from "prop-types";
import "./ProductList.scss";
import { Eye, Heart, ShoppingCartSimple, Star } from "@phosphor-icons/react";
import { useContext } from "react";
import { ProductModalContext } from "../../../context/ProductModalContext";

const ProductListItem = ({ productItem, viewRating, viewDescription }) => {
  const tags = productItem?.promotion?.type;

  const { dispatch: modalDispatch } = useContext(ProductModalContext);

  const openProdModal = () => {
    modalDispatch({ type: "OPEN_PROD_MODAL" });
  };

  return (
    <div className="comp-product-item">
      <div className="segment-product-item">
        <div className="product-item-img">
          <img src={productItem.images[0]} alt="" />

          <div className="product-item-btns">
            <button type="button" className="product-item-btn btn-wishlist">
              <Heart size={24} />
            </button>
            <button type="button" className="product-item-btn btn-add-to-cart">
              <ShoppingCartSimple size={24} />
            </button>
            <button
              type="button"
              onClick={openProdModal}
              className="product-item-btn btn-view"
            >
              <Eye size={24} />
            </button>
          </div>
        </div>
        <div className="product-item-tags">
          {tags.length > 0 &&
            tags.map((tag, index) => (
              <div
                key={index}
                className={`product-item-tag ${tag
                  ?.toLowerCase()
                  .replace(" ", "-")}`}
              >
                {productItem?.promotion?.discountPercentage > 0 &&
                  tag === "off" && (
                    <span>
                      {productItem?.promotion?.discountPercentage}% &nbsp;
                    </span>
                  )}
                {tag}
              </div>
            ))}
        </div>
        <div className="product-item-info">
          {viewRating && (
            <div className="product-item-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="rating-icon">
                  <Star size={16} weight="fill" />
                </span>
              ))}
              <span className="rating-val">({productItem.ratings || 0})</span>
            </div>
          )}
          <h3 className="product-item-ttl">{productItem.name}</h3>
          <div className="product-item-price">
            {productItem.originalPrice > 0 && (
              <span className="price-old">${productItem.originalPrice}</span>
            )}
            <span className="price-new">${productItem.price}</span>
          </div>
          {viewDescription && (
            <div className="product-item-desc">{productItem.description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;

ProductListItem.propTypes = {
  productItem: PropTypes.object.isRequired,
  viewRating: PropTypes.bool,
  viewDescription: PropTypes.bool,
};
