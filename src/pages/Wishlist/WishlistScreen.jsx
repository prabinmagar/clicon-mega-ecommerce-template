import { Link } from "react-router-dom";
import { products } from "../../data/mockData";
import "./WishlistScreen.scss";
import { ShoppingCartSimple, XCircle } from "@phosphor-icons/react";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";

const WishlistScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Wishlist",
      link: "/wishlist",
    },
  ];

  const wishProducts = products.slice(0, 6);

  const getPriceAfterDiscount = (price, discountPercent) => {
    return (price - (discountPercent * price) / 100).toFixed(2);
  };

  return (
    <div className="pg-wishlist">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="seg-wishlist">
          <div className="elem-wish-head">
            <h3>Wishlist</h3>
          </div>
          <div className="elem-wish-tbl">
            <table>
              <thead>
                <tr>
                  <th>products</th>
                  <th>price</th>
                  <th>stock status</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {wishProducts?.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <div className="tbl-prod">
                          <img
                            src={product.images[0]}
                            className="tbl-prod-img"
                            alt=""
                          />
                          <h4 className="tbl-prod-ttl">{product.name}</h4>
                        </div>
                      </td>
                      <td>
                        {product.promotion.discountPercentage === 0 ? (
                          <div className="tbl-new-price">
                            ${product.originalPrice}
                          </div>
                        ) : (
                          <div className="tbl-price">
                            <div className="tbl-old-price">
                              ${product.originalPrice}
                            </div>
                            <div className="tbl-new-price">
                              $
                              {getPriceAfterDiscount(
                                product.originalPrice,
                                product.promotion.discountPercentage
                              )}
                            </div>
                          </div>
                        )}
                      </td>
                      <td>
                        <div
                          className={`tbl-status ${
                            product.availability.inStock
                              ? "in-stock"
                              : "out-of-stock"
                          }`}
                        >
                          {product.availability.inStock
                            ? "in stock"
                            : "out of stock"}
                        </div>
                      </td>
                      <td>
                        <div className="tbl-btns">
                          <Link
                            to="/cart"
                            className={`btn btn-primary btn-addtocart ${
                              product.availability.inStock === false
                                ? "disabled"
                                : ""
                            }`}
                          >
                            <span className="btn-text">add to cart</span>
                            <span className="btn-icon">
                              <ShoppingCartSimple size={16} />
                            </span>
                          </Link>

                          <button type="button" className="btn-remove">
                            <XCircle size={24} weight="bold" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistScreen;
