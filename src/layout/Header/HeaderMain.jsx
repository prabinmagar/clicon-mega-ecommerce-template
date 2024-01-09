import { Link } from "react-router-dom";
import { Images } from "../../assets/images/images";
import "./Header.scss";
import { Heart, MagnifyingGlass, ShoppingCartSimple, User } from "@phosphor-icons/react";

const HeaderMain = () => {
  return (
    <div className="comp-header-main">
      <div className="container">
        <div className="seg-main">
          <div className="elem-brand">
            <img src={Images.Logo} alt="" />
          </div>
          <div className="elem-search-form">
            <form action="">
              <div className="input-group">
                <input type="text" className="input-control" placeholder="Search for anything ..." />
                <button className="btn"><MagnifyingGlass size={20} /></button>
              </div>
            </form>
          </div>
          <div className="elem-shop-controls">
            <ul className="icolink-list">
              <li className="icolink-item">
                <Link to="/" className="icolink icolink-cart">
                  <ShoppingCartSimple size={32} />
                  <span className="cart-count">2</span>
                </Link>
              </li>
              <li className="icolink-item">
                <Link to="/" className="icolink">
                  <Heart size={32} />
                </Link>
              </li>
              <li className="icolink-item">
                <Link to="/" className="icolink">
                  <User size={32} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
