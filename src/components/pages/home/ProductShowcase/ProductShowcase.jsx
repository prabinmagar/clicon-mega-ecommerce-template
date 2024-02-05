import ProductList from "../../../../features/product/ProductList/ProductList";
import "./ProductShowcase.scss";
import { PropTypes } from "prop-types";

const ProductShowcase = ({ productShowcaseData }) => {
  return (
    <div className="comp-showcase">
      <div className="container">
        <div className="segment-showcase-gridbox">
          {productShowcaseData?.map((showcaseItem) => {
            return (
              <div className="showcase-gridbox-col" key={showcaseItem.id}>
                <h4 className="showcase-gridbox-ttl">{showcaseItem.title}</h4>
                <ProductList
                  productItems={showcaseItem.products}
                  viewGap={true}
                  viewList={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;

ProductShowcase.propTypes = {
  productShowcaseData: PropTypes.array,
};
