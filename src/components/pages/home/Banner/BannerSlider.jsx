import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { ArrowRight } from "@phosphor-icons/react";
import "./Banner.scss";
import { Images } from "../../../../assets/images";

const BannerSlider = () => {
  return (
    <div className="comp-banner-slider">
      <Swiper
        slidesPerView={1}
        modules={[Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="banner-item">
            <div className="banner-item-l">
              <p className="banner-item-text-t">the best place to play</p>
              <h3 className="banner-item-ttl">Xbox Consoles</h3>
              <div className="banner-item-text">
                Save up to 50% on select Xbox games. Get 3 months of PC Game
                Pass for $2 USD.
              </div>
              <button className="btn btn-primary">
                <span className="btn-text">shop now</span>
                <span className="btn-icon">
                  <ArrowRight size={24} />
                </span>
              </button>
            </div>
            <div className="banner-item-r">
              <div className="banner-item-img">
                <img src={Images.Banner1} alt="" />
                <div className="banner-item-tag price">$299</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-item">
            <div className="banner-item-l">
              <p className="banner-item-text-t">the best place to play</p>
              <h3 className="banner-item-ttl">Xbox Consoles</h3>
              <div className="banner-item-text">
                Save up to 50% on select Xbox games. Get 3 months of PC Game
                Pass for $2 USD.
              </div>
              <button className="btn btn-primary">
                <span className="btn-text">shop now</span>
                <span className="btn-icon">
                  <ArrowRight size={24} />
                </span>
              </button>
            </div>
            <div className="banner-item-r">
              <div className="banner-item-img">
                <img src={Images.Banner1} alt="" />
                <div className="banner-item-tag price">$299</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-item">
            <div className="banner-item-l">
              <p className="banner-item-text-t">the best place to play</p>
              <h3 className="banner-item-ttl">Xbox Consoles</h3>
              <div className="banner-item-text">
                Save up to 50% on select Xbox games. Get 3 months of PC Game
                Pass for $2 USD.
              </div>
              <button className="btn btn-primary">
                <span className="btn-text">shop now</span>
                <span className="btn-icon">
                  <ArrowRight size={24} />
                </span>
              </button>
            </div>
            <div className="banner-item-r">
              <div className="banner-item-img">
                <img src={Images.Banner1} alt="" />
                <div className="banner-item-tag price">$299</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
