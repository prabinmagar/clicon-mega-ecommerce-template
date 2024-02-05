import { Minus, Plus, XCircle } from "@phosphor-icons/react";
import "./CartListItem.scss";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const CartListItem = ({ cartItem }) => {
  const [qtyValue, setQtyValue] = useState(1);

  const getPriceAfterDiscount = (price, discountPercent) => {
    return (price - (discountPercent * price) / 100).toFixed(2);
  };

  const handleQtyIncrement = () => {
    setQtyValue((prevVal) => ++prevVal);
  };

  const handleQtyDecrement = () => {
    if (qtyValue > 1) {
      setQtyValue((prevVal) => --prevVal);
    }
  };

  useEffect(() => {
    setQtyValue(cartItem.quantity);
  }, [cartItem]);

  return (
    <>
      <tr key={cartItem.productId}>
        <td>
          <div className="table-product">
            <div className="table-remove-btn">
              <XCircle size={16} weight="bold" />
            </div>
            <div className="table-product-img">
              <img src={cartItem.images[0]} alt="" />
            </div>
            <h4 className="table-product-ttl">{cartItem.productName}</h4>
          </div>
        </td>
        <td>
          {cartItem.discountPercentage === 0 ? (
            <div className="table-new-price">{cartItem.price}</div>
          ) : (
            <div className="table-price">
              <div className="table-old-price">${cartItem.price}</div>
              <div className="table-new-price">
                $
                {getPriceAfterDiscount(
                  cartItem.price,
                  cartItem.discountPercentage
                )}
              </div>
            </div>
          )}
        </td>
        <td>
          <div className="table-qty">
            <button
              type="button"
              className="dec-qty-btn"
              onClick={() => handleQtyDecrement()}
            >
              <Minus size={16} weight="bold" />
            </button>
            <div className="qty-val">{qtyValue}</div>
            <button
              type="button"
              className="inc-qty-btn"
              onClick={() => handleQtyIncrement()}
            >
              <Plus size={16} weight="bold" />
            </button>
          </div>
        </td>
        <td>${cartItem.quantity * cartItem.price}</td>
      </tr>
    </>
  );
};

export default CartListItem;

CartListItem.propTypes = {
  cartItem: PropTypes.object,
};
