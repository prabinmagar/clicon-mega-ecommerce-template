import {
  ArrowsCounterClockwise,
  ClockClockwise,
  Gear,
  Heart,
  List,
  MapPinLine,
  Notebook,
  ShoppingCartSimple,
  SignOut,
  Stack,
  Storefront,
  X,
} from "@phosphor-icons/react";
import "./Menu.scss";
import { Link, useLocation } from "react-router-dom";
import routeConstants from "../../../../constants/routeConstants";
import { useState } from "react";

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();

  const handleMenuVisibility = () => setIsMenuVisible((prevVal) => !prevVal);

  return (
    <div className="comp-dashboard-menu">
      <div className={`segment-dashboard-menu ${isMenuVisible ? "show" : ""}`}>
        <div className="dashboard-menu-list">
          <Link
            to={routeConstants.DASHBOARD}
            className={`dashboard-menu-item ${
              location.pathname === routeConstants.DASHBOARD ? "active" : ""
            }`}
          >
            <span className="menu-item-icon">
              <Stack size={20} />
            </span>
            <span className="menu-item-text">Dashboard</span>
          </Link>
          <Link
            to={routeConstants.ORDER_HISTORY}
            className={`dashboard-menu-item ${
              location.pathname.startsWith(routeConstants.ORDER_HISTORY)
                ? "active"
                : ""
            }`}
          >
            <span className="menu-item-icon">
              <Storefront size={20} />
            </span>
            <span className="menu-item-text">Order History</span>
          </Link>
          <Link to={routeConstants.TRACK_ORDER} className="dashboard-menu-item">
            <span className="menu-item-icon">
              <MapPinLine size={20} />
            </span>
            <span className="menu-item-text">track order</span>
          </Link>
          <Link to={routeConstants.CART} className="dashboard-menu-item">
            <span className="menu-item-icon">
              <ShoppingCartSimple size={20} />
            </span>
            <span className="menu-item-text">shopping cart</span>
          </Link>
          <Link to={routeConstants.WISHLIST} className="dashboard-menu-item">
            <span className="menu-item-icon">
              <Heart size={20} />
            </span>
            <span className="menu-item-text">wishlist</span>
          </Link>
          <Link to={routeConstants.COMPARE} className="dashboard-menu-item">
            <span className="menu-item-icon">
              <ArrowsCounterClockwise size={20} />
            </span>
            <span className="menu-item-text">compare</span>
          </Link>
          <Link
            to={routeConstants.CARDS_ADDRESS}
            className={`dashboard-menu-item ${
              location.pathname === routeConstants.CARDS_ADDRESS ? "active" : ""
            }`}
          >
            <span className="menu-item-icon">
              <Notebook size={20} />
            </span>
            <span className="menu-item-text">cards & address</span>
          </Link>
          <Link
            to={routeConstants.BROWSE_HISTORY}
            className={`dashboard-menu-item ${
              location.pathname === routeConstants.BROWSE_HISTORY
                ? "active"
                : ""
            }`}
          >
            <span className="menu-item-icon">
              <ClockClockwise size={20} />
            </span>
            <span className="menu-item-text">browsing history</span>
          </Link>
          <Link
            to={routeConstants.SETTING}
            className={`dashboard-menu-item ${
              location.pathname === routeConstants.SETTING ? "active" : ""
            }`}
          >
            <span className="menu-item-icon">
              <Gear size={20} />
            </span>
            <span className="menu-item-text">setting</span>
          </Link>
          <Link className="dashboard-menu-item">
            <span className="menu-item-icon">
              <SignOut size={20} />
            </span>
            <span className="menu-item-text">log out</span>
          </Link>
        </div>
      </div>
      <button
        type="button"
        className="dashboard-menu-toggle-btn"
        onClick={handleMenuVisibility}
      >
        {isMenuVisible ? <X size={25} /> : <List size={28} />}
      </button>
    </div>
  );
};

export default Menu;
