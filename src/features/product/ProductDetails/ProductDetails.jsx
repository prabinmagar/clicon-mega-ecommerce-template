import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  ArrowLeft,
  ArrowRight,
  ArrowsCounterClockwise,
  CaretDown,
  Copy,
  FacebookLogo,
  Heart,
  Minus,
  PinterestLogo,
  Plus,
  ShoppingCartSimple,
  Star,
  TwitterLogo,
} from "@phosphor-icons/react";
import { Images } from "../../../assets/images";
import "./ProductDetails.scss";

const PREVIEW_IMAGES = [
  Images.Preview1,
  Images.Preview2,
  Images.Preview3,
  Images.Preview4,
  Images.Preview5,
  Images.Preview6,
  Images.Preview7,
  Images.Preview8,
];

const ProductDetails = () => {
  const [previewActiveIndex, setPreviewActiveIndex] = useState(0);
  const customPrevIcon = <ArrowLeft size={24} />;
  const customNextIcon = <ArrowRight size={24} />;
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePreviewSlider = (idx) => setPreviewActiveIndex(idx);
  const [qtyValue, setQtyValue] = useState(1);

  const handleQtyIncrement = () => {
    setQtyValue((prevVal) => ++prevVal);
  };

  const handleQtyDecrement = () => {
    if (qtyValue > 1) {
      setQtyValue((prevVal) => --prevVal);
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({
      x,
      y,
    });
  };

  return (
    <div className={`comp-product-view`}>
      <div className="segment-product-view">
        <div className="product-view-img">
          <div className="product-view-active" onMouseMove={handleMouseMove}>
            <figure
              style={{
                backgroundImage: `url(${PREVIEW_IMAGES[previewActiveIndex]})`,
                backgroundPosition: `${position.x}% ${position.y}%`,
              }}
            >
              <img src={PREVIEW_IMAGES[previewActiveIndex]} alt="" />
            </figure>
          </div>
          <div className="product-view-slider">
            <Swiper
              spaceBetween={8}
              slidesPerView={2}
              modules={[Pagination, Navigation, A11y]}
              loop={true}
              navigation={{
                nextEl: ".custom-sw-next",
                prevEl: ".custom-sw-prev",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                420: {
                  slidesPerView: 3,
                },
                480: {
                  slidesPerView: 4,
                },
                600: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 6,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1400: {
                  slidesPerView: 6,
                },
              }}
            >
              <div className="custom-sw-prev">{customPrevIcon}</div>
              <div className="custom-sw-next">{customNextIcon}</div>
              {PREVIEW_IMAGES?.map((preview, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => handlePreviewSlider(index)}
                >
                  <div
                    className={`product-view-item ${
                      index === previewActiveIndex ? "active" : ""
                    }`}
                  >
                    <div className="product-view-item-wrap">
                      <img src={preview} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="product-view-detail">
          <div className="product-view-rate-and-feed">
            <div className="product-view-rate">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="rate-icon">
                  <Star size={16} weight="fill" />
                </span>
              ))}
              <span className="rate-val">4.7 Star Rating</span>
            </div>
            <div className="product-view-feed">
              <span>(21, 671 User feedback)</span>
            </div>
          </div>
          <h3 className="product-view-ttl">
            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB
            SSD Storage) - Space Gray
          </h3>
          <div className="product-view-mdata">
            <div className="product-view-mdata-item sku">
              <span className="product-view-mdata-label">Sku:</span>
              <span className="product-view-mdata-val">A26471</span>
            </div>
            <div className="product-view-mdata-item avail">
              <span className="product-view-mdata-label">Availability:</span>
              <span className="product-view-mdata-val instock">In Stock</span>
            </div>
            <div className="product-view-mdata-item brand">
              <span className="product-view-mdata-label">Brand:</span>
              <span className="product-view-mdata-val">Apple</span>
            </div>
            <div className="product-view-mdata-item cat">
              <span className="product-view-mdata-label">Category:</span>
              <span className="product-view-mdata-val">
                Electronics Devices
              </span>
            </div>
          </div>
          <div className="product-view-price">
            <span className="price-new">$1699</span>
            <span className="price-old">$1999.00</span>
            <span className="price-off">21% off</span>
          </div>
          <div className="product-view-blocks">
            <div className="product-view-block color">
              <p className="product-view-block-ttl">Color</p>
              <div className="color-list">
                <div className="color-item">
                  <input type="radio" name="color" />
                  <span className="color-border"></span>
                </div>
                <div className="color-item">
                  <input type="radio" name="color" />
                  <span className="color-border"></span>
                </div>
              </div>
            </div>

            <div className="product-view-block size">
              <p className="product-view-block-ttl">Size</p>
              <div className="size-select">
                <div className="select-wrap">
                  <select>
                    <option value="">14-inch Liquid Retina XDR display</option>
                    <option value="">21-inch Liquid Retina XDR display</option>
                    <option value="">15-inch Liquid Retina XDR display</option>
                  </select>
                  <span className="select-icon">
                    <CaretDown size={16} weight="bold" />
                  </span>
                </div>
              </div>
            </div>

            <div className="product-view-block memory">
              <p className="product-view-block-ttl">Memory</p>
              <div className="size-select">
                <div className="select-wrap">
                  <select>
                    <option value="">16GB Unified Memory</option>
                    <option value="">10GB Unified Memory</option>
                    <option value="">12GB Unified Memory</option>
                  </select>
                  <span className="select-icon">
                    <CaretDown size={16} weight="bold" />
                  </span>
                </div>
              </div>
            </div>

            <div className="product-view-block storage">
              <p className="product-view-block-ttl">Storage</p>
              <div className="size-select">
                <div className="select-wrap">
                  <select>
                    <option value="">1TV SSD Storage</option>
                    <option value="">1TV SSD Storage</option>
                    <option value="">1TV SSD Storage</option>
                  </select>
                  <span className="select-icon">
                    <CaretDown size={16} weight="bold" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="product-view-btns">
            <div className="product-view-qty-btns">
              <button
                type="button"
                className="qty-inc-btn"
                onClick={() => handleQtyDecrement()}
              >
                <Minus size={18} />
              </button>
              <span className="qty-val">
                {qtyValue < 10 ? `0${qtyValue}` : qtyValue}
              </span>
              <button
                type="button"
                className="qty-dec-btn"
                onClick={() => handleQtyIncrement()}
              >
                <Plus size={18} />
              </button>
            </div>
            <button
              type="button"
              className="product-view-addtocart-btn btn btn-primary"
            >
              <span className="btn-text">add to cart</span>
              <span className="btn-icon">
                <ShoppingCartSimple size={24} />
              </span>
            </button>
            <button
              type="button"
              className="product-view-buynow-btn btn btn-primary btn-outline"
            >
              <span className="btn-text">buy now</span>
            </button>
          </div>

          <div className="product-view-utils-and-social">
            <div className="product-view-utils">
              <div className="util-item">
                <span className="util-icon">
                  <Heart size={16} />
                </span>
                <div className="util-text">Add to Wishlist</div>
              </div>
              <div className="util-item">
                <span className="util-icon">
                  <ArrowsCounterClockwise size={16} />
                </span>
                <div className="util-text">Add to Compare</div>
              </div>
            </div>
            <div className="product-view-social">
              <p className="social-label">Share product:</p>
              <div className="social-list">
                <span className="social-item">
                  <Copy size={16} />
                </span>
                <span className="social-item">
                  <FacebookLogo size={16} weight="fill" />
                </span>
                <span className="social-item">
                  <TwitterLogo size={16} weight="fill" />
                </span>
                <span className="social-item">
                  <PinterestLogo size={16} weight="bold" />
                </span>
              </div>
            </div>
          </div>

          <div className="product-view-cards">
            <p className="card-label">100% Guarantee Safe Checkout</p>
            <div className="card-list">
              <div className="card-item">
                <img src={Images.CardAmericanX} alt="" />
              </div>
              <div className="card-item">
                <img src={Images.CardCirrus} alt="" />
              </div>
              <div className="card-item">
                <img src={Images.CardJcb} alt="" />
              </div>
              <div className="card-item">
                <img src={Images.CardMaestro} alt="" />
              </div>
              <div className="card-item">
                <img src={Images.CardMaster} alt="" />
              </div>
              <div className="card-item">
                <img src={Images.CardPayoneer} alt="" />
              </div>
              <div className="card-item">
                <img src={Images.CardPaypal} alt="" />
              </div>
              <div className="card-item">
                <img src={Images.CardVisa} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
