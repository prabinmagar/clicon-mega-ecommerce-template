import OrderHistory from "../../../features/order/OrderHistory/OrderHistory";
import Pagination from "../../../components/common/Pagination/Pagination";
import "./OrderHistoryScreen.scss";

const OrderHistoryScreen = () => {
  return (
    <div className="pg-order-history">
      <div className="segment-order-history">
        <div className="order-history-head">
          <h4 className="order-history-ttl">order history</h4>
        </div>
        <div className="order-history-data">
          <OrderHistory />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryScreen;
