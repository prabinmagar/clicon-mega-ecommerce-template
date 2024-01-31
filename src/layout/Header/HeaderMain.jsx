import { Link } from "react-router-dom";
import "./Header.scss";
import {
  Heart,
  MagnifyingGlass,
  ShoppingCartSimple,
  User,
} from "@phosphor-icons/react";
import { Images } from "../../assets/images";
import SignInModal from "../Modal/SignInModal/SignInModal";
import { useEffect, useRef, useState } from "react";
import CartModal from "../Modal/CartModal/CartModal";
import "./HeaderMain.scss";

const HeaderMain = () => {
  const [signinModal, setSigninModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const signinRef = useRef(false);
  const cartRef = useRef(false);

  const handleSigninModal = () => {
    setSigninModal(!signinModal);
  };

  const handleCartModal = () => {
    setCartModal(!cartModal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target;
      if (
        signinRef.current &&
        !signinRef.current.contains(event.target) &&
        !clickedElement.closest(".icolink-user")
      ) {
        setSigninModal(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target;
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        !clickedElement.closest(".icolink-cart")
      ) {
        setCartModal(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="comp-header-main">
      <div className="container">
        <div className="seg-header-main">
          <Link to="/" className="elem-brand">
            <img src={Images.Logo} alt="" />
          </Link>
          <div className="elem-search-form">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="input-control"
                  placeholder="Search for anything ..."
                />
                <button className="input-btn">
                  <MagnifyingGlass size={20} />
                </button>
              </div>
            </form>
          </div>
          <div className="elem-shop-controls">
            <ul className="icolink-list">
              <li className="icolink-item icolink-cart">
                <Link to="/" className="icolink">
                  <ShoppingCartSimple
                    size={32}
                    onClick={() => handleCartModal()}
                  />
                  <span className="cart-count">2</span>
                </Link>
                <div ref={cartRef}>{cartModal && <CartModal />}</div>
              </li>
              <li className="icolink-item">
                <Link to="/" className="icolink">
                  <Heart size={32} />
                </Link>
              </li>
              <li className="icolink-item icolink-user">
                <Link className="icolink" onClick={() => handleSigninModal()}>
                  <User size={32} />
                </Link>
                <div ref={signinRef}>{signinModal && <SignInModal />}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
