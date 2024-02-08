import { Link } from "react-router-dom";
import DashboardTop from "../../../components/pages/dashboard/DashboardTop/DashboardTop";
import PaymentOption from "../../../components/pages/dashboard/PaymentOption/PaymentOption";
import "./DashboardMainScreen.scss";
import OrderHistory from "../../../features/order/OrderHistory/OrderHistory";
import { products } from "../../../data/mockData";
import ProductListItem from "../../../features/product/ProductList/ProductListItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const DashboardMainScreen = () => {
  const customPrevIcon = <ArrowLeft size={24} />;
  const customNextIcon = <ArrowRight size={24} />;

  return (
    <div className="pg-dashboard-main">
      <DashboardTop />
      <PaymentOption />
      <div className="dboard-main-recent-orders">
        <div className="recent-orders-head">
          <h3 className="recent-orders-ttl">recent orders</h3>
          <Link to="" className="link link-primary">
            <span className="link-text">View All</span>
            <span className="link-icon">
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>
        <OrderHistory />
      </div>

      <div className="dboard-main-browse-history">
        <div className="browse-history-head">
          <h3 className="browse-history-ttl">Browsing history</h3>
          <Link to="" className="link link-primary">
            <span className="link-text">View All</span>
            <span className="link-icon">
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>

        <div className="browse-history-slider">
          <Swiper
            spaceBetween={0}
            loop={false}
            slidesPerView={4}
            modules={[Pagination, Navigation, A11y, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".custom-sw-next",
              prevEl: ".custom-sw-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            <div className="custom-sw-prev">{customPrevIcon}</div>
            <div className="custom-sw-next">{customNextIcon}</div>
            {products?.slice(0, 8)?.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductListItem productItem={product} viewRating={true} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainScreen;
