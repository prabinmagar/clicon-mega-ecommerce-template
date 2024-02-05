import { cart } from "../../../../data/mockData";
import "./CartList.scss";
import CartListItem from "../CartListItem.jsx/CartListItem";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const CartList = () => {
  return (
    <div className="comp-cart-list">
      <div className="segment-cart-list">
        <div className="cart-list-table scrollbar">
          <table>
            <thead>
              <tr>
                <th>products</th>
                <th>price</th>
                <th>quantity</th>
                <th>sub-total</th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart[0]?.items?.map((cartItem) => {
                  return (
                    <CartListItem
                      key={cartItem.productId}
                      cartItem={cartItem}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="cart-list-foot">
          <Link to="/" className="btn btn-secondary btn-outline">
            <span className="btn-icon">
              <ArrowLeft size={16} />
            </span>
            <span className="btn-text">return to shop</span>
          </Link>

          <Link to="/" className="btn btn-secondary btn-outline">
            <span className="btn-text">update cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartList;
