import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductDetailModal from "../Modal/ProductDetailModal/ProductDetailModal";

const LayoutContainer = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <Footer />
      <ProductDetailModal />
    </div>
  );
};

export default LayoutContainer;
