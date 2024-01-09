import HeaderPromo from "./HeaderPromo";
import "./Header.scss";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <header className="comp-header">
      <HeaderPromo />
      <HeaderTop />
      <HeaderMain />
      <HeaderBottom />
    </header>
  );
};

export default Header;
