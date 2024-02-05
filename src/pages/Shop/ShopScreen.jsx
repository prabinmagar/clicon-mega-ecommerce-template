import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import ProductShop from "../../components/pages/shop/ProductShop/ProductShop";
import ProductFilter from "../../features/product/ProductFilter/ProductFilter";
import "./ShopScreen.scss";

const ShopScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Shop",
      link: "/shop",
    },
    {
      text: "Shop Grid",
      link: "/shop/grid",
    },
    {
      text: "Electronics Device",
      link: "/shop/grid/electronics",
    },
  ];
  return (
    <div className="pg-shop">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-shop-gridbox">
          <ProductFilter />
          <ProductShop />
        </div>
      </div>
    </div>
  );
};

export default ShopScreen;
  