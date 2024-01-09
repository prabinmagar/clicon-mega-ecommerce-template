import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const LayoutContainer = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
