import { Route, Routes } from "react-router-dom";
import routeConstants from "../constants/routeConstants";
import LayoutContainer from "../layout/LayoutContainer/LayoutContainer";
import {
  Home,
  Cart,
  NotFound,
  Sign,
  Shop,
  ProductDetails,
  TrackOrder,
  TrackOrderDetails,
  Compare,
  Wishlist,
  Checkout,
  CheckoutSuccess,
  ForgotPassword,
  ResetPassword,
  Verify,
  Faq,
  About,
  Support,
  Blog,
  BlogDetails,
  DashboardContainer,
  DashboardMain,
  OrderHistory,
  OrderHistoryDetails,
  CardsAddress,
  Setting,
  BrowseHistory,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routeConstants.ROOT} element={<LayoutContainer />}>
        <Route path={routeConstants.HOME} element={<Home />} />
        <Route path={routeConstants.SHOP} element={<Shop />} />
        <Route
          path={routeConstants.PRODUCT_DETAILS}
          element={<ProductDetails />}
        />
        <Route path={routeConstants.CART} element={<Cart />} />
        <Route path={routeConstants.TRACK_ORDER} element={<TrackOrder />} />
        <Route
          path={routeConstants.TRACK_ORDER_DETAILS}
          element={<TrackOrderDetails />}
        />
        <Route path={routeConstants.COMPARE} element={<Compare />} />
        <Route path={routeConstants.WISHLIST} element={<Wishlist />} />
        <Route path={routeConstants.CHECKOUT} element={<Checkout />} />
        <Route
          path={routeConstants.CHECKOUT_SUCCESS}
          element={<CheckoutSuccess />}
        />
        <Route path={routeConstants.ABOUT} element={<About />} />
        <Route path={routeConstants.SUPPORT} element={<Support />} />
        <Route path={routeConstants.BLOG} element={<Blog />} />
        <Route path={routeConstants.BLOG_DETAIL} element={<BlogDetails />} />

        {/* auth routes */}
        <Route path={routeConstants.SIGN} element={<Sign />} />
        <Route
          path={routeConstants.FORGOT_PASSWORD}
          element={<ForgotPassword />}
        />
        <Route
          path={routeConstants.RESET_PASSWORD}
          element={<ResetPassword />}
        />
        <Route path={routeConstants.MAIL_VERIFY} element={<Verify />} />
        <Route path={routeConstants.FAQ} element={<Faq />} />

        {/* dashboard */}
        <Route path={routeConstants.DASHBOARD} element={<DashboardContainer />}>
          <Route path={routeConstants.DASHBOARD} element={<DashboardMain />} />
          <Route
            path={routeConstants.ORDER_HISTORY}
            element={<OrderHistory />}
          />
          <Route
            path={routeConstants.ORDER_HISTORY_DETAILS}
            element={<OrderHistoryDetails />}
          />
          <Route
            path={routeConstants.CARDS_ADDRESS}
            element={<CardsAddress />}
          />
          <Route path={routeConstants.SETTING} element={<Setting />} />
          <Route
            path={routeConstants.BROWSE_HISTORY}
            element={<BrowseHistory />}
          />
        </Route>

        <Route path={routeConstants.PAGE_NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
