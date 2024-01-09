import { Route, Routes } from "react-router-dom";
import routeConstants from "../constants/routeConstants";
import LayoutContainer from "../layout/LayoutContainer/LayoutContainer";
import { Home, Cart, NotFound, SignIn, SignUp } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routeConstants.ROOT} element={<LayoutContainer />}>
        <Route path={routeConstants.HOME} element={<Home />} />
        <Route path={routeConstants.CART} element={<Cart />} />
        {/* auth routes */}
        <Route path={routeConstants.SIGN_IN} element={<SignIn />} />
        <Route path={routeConstants.SIGN_UP} element={<SignUp />} />
      </Route>
      <Route path={routeConstants.PAGE_NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
