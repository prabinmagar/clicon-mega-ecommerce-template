import { Link } from "react-router-dom";
import OrderDetails from "../../../features/order/OrderDetails/OrderDetails";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Plus } from "@phosphor-icons/react";
import "./OrderDetailsScreen.scss";
import { useContext } from "react";
import { RatingModalContext } from "../../../context/RatingModalContext";
import RatingModal from "../../../layout/Modal/RatingModal/RatingModal";

const OrderDetailsScreen = () => {
  const { dispatch: modalDispatch } = useContext(RatingModalContext);

  const openRatingModal = () => {
    modalDispatch({
      type: "OPEN_RATING_MODAL",
    });
  };

  return (
    <div className="pg-order-details">
        <RatingModal />
      <div className="order-details-head">
        <div className="order-details-head-left">
          <Link to="/dashboard/order_history">
            <ArrowLeft size={24} />
          </Link>
          <h4 className="order-details-head-ttl">order details</h4>
        </div>
        <div className="order-details-head-right">
          <button
            type="button"
            className="link link-primary rating-modal-open-btn"
            onClick={openRatingModal}
          >
            <span className="link-text">Leave a Rating</span>
            <span className="link-icon">
              <Plus size={20} />
            </span>
          </button>
        </div>
      </div>
      <OrderDetails />
    </div>
  );
};

export default OrderDetailsScreen;
