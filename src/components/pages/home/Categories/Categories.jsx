import "./Categories.scss";
import { categories } from "../../../../data/mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Title from "../../../common/Title/Title";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const Categories = () => {
  const customPrevIcon = <ArrowLeft size={24} />;
  const customNextIcon = <ArrowRight size={24} />;

  return (
    <div className="comp-categories">
      <div className="container">
        <div className="segment-categories-head">
          <Title titleText={"Shop with categories"} />
        </div>
        <div className="segment-categories-slider">
          <Swiper
            spaceBetween={18}
            loop={true}
            slidesPerView={6}
            modules={[Pagination, Navigation, A11y, Autoplay]}
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
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            <div className="custom-sw-prev">{customPrevIcon}</div>
            <div className="custom-sw-next">{customNextIcon}</div>
            {categories?.map((category) => {
              return (
                <SwiperSlide key={category.id}>
                  <div className="categories-item">
                    <div className="categories-item-img">
                      <img src={category.image[0]} alt="" />
                    </div>
                    <div className="categories-item-content">
                      <h4 className="categories-item-ttl">{category.name}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Categories;
