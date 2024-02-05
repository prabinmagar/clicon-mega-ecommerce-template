import "./ProductList.scss";
import PropTypes from "prop-types";
import ProductListItem from "./ProductListItem";

const ProductList = ({
  productItems,
  viewRating,
  viewDescription,
  viewGap,
  viewList,
}) => {
  return (
    <div className="comp-product-list">
      <div
        className={`segment-product-list ${viewGap ? "gap" : ""} ${
          viewList ? "list-view" : ""
        }`}
      >
        {productItems?.map((product) => {
          return (
            <ProductListItem
              key={product.id}
              productItem={product}
              viewRating={viewRating}
              viewDescription={viewDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

ProductList.propTypes = {
  productItems: PropTypes.array,
  viewRating: PropTypes.bool,
  viewDescription: PropTypes.bool,
  viewGap: PropTypes.bool,
  viewList: PropTypes.bool,
};

ProductListItem.defaultProps = {
  viewRating: false,
  viewDescription: false,
  viewGap: false,
  viewList: false,
};
