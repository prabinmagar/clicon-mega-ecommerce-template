import CartList from "../../features/cart/Cart/CartList/CartList";
import "./CartScreen.scss";
import CartSummary from "../../components/pages/cart/CartSummary/CartSummary";
import Coupon from "../../components/pages/cart/Coupon/Coupon";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";

const CartScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Shopping Cart",
      link: "/cart",
    },
  ];

  return (
    <div className="pg-cart">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-cart-gridbox">
          <div className="cart-gridbox-left">
            <h3 className="cart-gridbox-ttl">Shopping Card</h3>
            <CartList />
          </div>
          <div className="cart-gridbox-right">
            <CartSummary />
            <Coupon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
