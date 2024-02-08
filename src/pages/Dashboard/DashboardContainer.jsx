import { Outlet } from "react-router-dom";
import Menu from "../../components/pages/dashboard/Menu/Menu";
import "./DashboardContainer.scss";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";

const breadData = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "User Account",
    link: "/user_account",
  },
  {
    text: "Dashboard",
    link: "/dashboard",
  },
];

const DashboardContainer = () => {
  return (
    <div className="pg-dashboard">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-dashboard-gridbox">
          <div className="dashboard-gridbox-menu">
            <Menu />
          </div>
          <div className="dashboard-gridbox-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
