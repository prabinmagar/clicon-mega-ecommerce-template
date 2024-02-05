import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import ProductShowcase from "../../components/pages/home/ProductShowcase/ProductShowcase";
import ProductTabs from "../../components/pages/productDetails/ProductTabs/ProductTabs";
import { products } from "../../data/mockData";
import ProductDetails from "../../features/product/ProductDetails/ProductDetails";
import "./ProductDetailsScreen.scss";

const ProductDetailsScreen = () => {
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
    {
      text: "Mackbook Pro",
      link: "/shop/grid/electronics/mackbook_pro",
    },
  ];

  const productShowcaseData = [
    {
      id: 1,
      title: "related products",
      products: products.slice(13, 16),
    },
    {
      id: 2,
      title: "product accessories",
      products: products.slice(16, 19),
    },
    {
      id: 3,
      title: "niche products",
      products: products.slice(19, 22),
    },
    {
      id: 4,
      title: "featured products",
      products: products.slice(22, 25),
    },
  ];

  return (
    <div className="pg-product-details">
      <Breadcrumb breadData={breadData} />
      <section className="segment-product-details">
        <div className="container">
          <ProductDetails />
        </div>
      </section>
      <ProductTabs />
      <ProductShowcase productShowcaseData={productShowcaseData} />
    </div>
  );
};

export default ProductDetailsScreen;
