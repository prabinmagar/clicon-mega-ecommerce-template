import { Link } from "react-router-dom";
import "./CategoryPopup.scss";
import { ArrowRight, CaretRight } from "@phosphor-icons/react";
import ProductList from "../../../features/product/ProductList/ProductList";
import { products } from "../../../data/mockData";
import { Images } from "../../../assets/images";
import { forwardRef, useState } from "react";

const CATEGORIES = [
  {
    id: 1,
    name: "Computer & Laptop",
    subCategories: ["Acer", "Lenevo", "Macbook", "Asus", "Dell", "Toshiba"],
  },
  {
    id: 2,
    name: "Computer Accessories",
    subCategories: [
      "Mouse",
      "Keyboard",
      "Webcam",
      "Joystick",
      "Hard Disk",
      "SSD",
      "Charger",
      "Battery",
    ],
  },
  {
    id: 3,
    name: "Smartphone",
    subCategories: [
      "iPhone",
      "Samsung",
      "Realme",
      "Xiaomi",
      "Techo",
      "Oppo",
      "Vivo",
      "Redmi",
      "Coolpad",
      "Oneplus",
      "Huwawei",
      "Infinix",
    ],
  },
  {
    id: 4,
    name: "Headphones",
    subCategories: [],
  },
  {
    id: 5,
    name: "Mobile Accessories",
    subCategories: [
      "Charger",
      "Battery",
      "Display screen",
      "Earphone",
      "Mobile cover",
      "Glass",
    ],
  },
  {
    id: 6,
    name: "Gaming Console",
    subCategories: [],
  },
  {
    id: 7,
    name: "Camera & Photo",
    subCategories: ["Canon", "Sony"],
  },
  {
    id: 8,
    name: "TV & Homes Appliances",
    subCategories: [
      "Heater",
      "AC",
      "Cooler",
      "Fan",
      "Microoven",
      "Table Heater",
    ],
  },
  {
    id: 9,
    name: "Watches & Accessories",
    subCategories: ["Wrist band", "iWatch"],
  },
  {
    id: 11,
    name: "Wearable Technology",
    subCategories: [],
  },
];

const CategoryPopup = forwardRef(function CategoryPopup(props, ref) {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseEnter2 = (subCategory) => {
    setHoveredSubCategory(subCategory);
  };

  const handleMouseLeave = () => setHoveredCategory(null);
  const handleMouseLeave2 = () => setHoveredSubCategory(null);

  return (
    <div
      className={`comp-category-popup`}
      ref={ref}
      onMouseLeave={handleMouseLeave}
    >
      <div className="seg-cats">
        <div className="cat-list">
          {CATEGORIES?.map((category) => {
            return (
              <Link
                key={category.id}
                className="cat-item"
                onMouseEnter={() => handleMouseEnter(category)}
              >
                <span className="cat-item-text">{category.name}</span>
                <span className="cat-item-icon">
                  <CaretRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {hoveredCategory && (
        <div className="seg-subcats" onMouseLeave={handleMouseLeave2}>
          <div className="subcat-list">
            {CATEGORIES?.find((category) => category.id === hoveredCategory.id)
              ?.subCategories?.length > 0 ? (
              CATEGORIES?.find(
                (category) => category.id === hoveredCategory.id
              )?.subCategories?.map((subCategory, index) => {
                return (
                  <Link
                    key={index}
                    className="subcat-item"
                    onMouseEnter={() => handleMouseEnter2(subCategory)}
                  >
                    {subCategory}
                  </Link>
                );
              })
            ) : (
              <div>No any categories found!</div>
            )}
          </div>

          {hoveredSubCategory && (
            <div className="subcat-feats">
              <div className="feats-gbox-prods">
                <h3 className="feats-gbox-ttl">
                  featured {hoveredSubCategory}
                </h3>
                <ProductList
                  productItems={products?.slice(0, 3)}
                  viewGap={true}
                  viewList={true}
                />
              </div>
              <div className="feats-gbox-prod">
                <div className="prod-img">
                  <img src={Images.CatPopupProduct} alt="" />
                </div>
                <h3 className="prod-ttl">21% Discount</h3>
                <p className="prod-text">
                  Escape the noise, it&apos;s time to hear the magic with Xiaomi
                  Earbuds.
                </p>
                <div className="prod-price">
                  <p className="price-lbl">Starting price:</p>
                  <span className="price-val">$99 USD</span>
                </div>
                <button className="btn btn-primary">
                  <span className="btn-text">shop now</span>
                  <span className="btn-icon">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default CategoryPopup;
