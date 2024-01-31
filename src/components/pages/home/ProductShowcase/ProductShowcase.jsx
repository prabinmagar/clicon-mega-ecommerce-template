import ProductList from "../../../../features/product/ProductList/ProductList";
import "./ProductShowcase.scss";
import { PropTypes } from "prop-types";

const ProductShowcase = ({ productShowcaseData }) => {
  console.log(productShowcaseData);
  return (
    <div className="comp-showcase">
      <div className="container">
        <div className="seg-gridbox">
          {productShowcaseData?.map((showcaseItem) => {
            return (
              <div className="elem-gbox-col" key={showcaseItem.id}>
                <h4 className="elem-gbox-ttl">{showcaseItem.title}</h4>
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
