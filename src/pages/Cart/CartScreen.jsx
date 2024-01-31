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
        <div className="seg-cart-gridbox">
          <div className="elem-gbox-l">
            <h3 className="elem-gbox-ttl">Shopping Card</h3>
            <CartList />
          </div>
          <div className="elem-gbox-r">
            <CartSummary />
            <Coupon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
