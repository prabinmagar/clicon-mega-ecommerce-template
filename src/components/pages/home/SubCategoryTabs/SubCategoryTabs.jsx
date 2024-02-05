import { ArrowRight } from "@phosphor-icons/react";
import "./SubCategoryTabs.scss";
import { Images } from "../../../../assets/images";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import { products } from "../../../../data/mockData";
import Title from "../../../common/Title/Title";
import { Link } from "react-router-dom";
import ProductList from "../../../../features/product/ProductList/ProductList";

const SubCategoryTabs = () => {
  const categories = new Set(products.map((product) => product.category));
  let [selectedCategory] = categories.values(); // be default first one
  const selectedCategoryProducts = products?.filter(
    (product) => product.category === selectedCategory
  );
  const subCategories = [
    "All Products",
    ...new Set(
      selectedCategoryProducts
        .map((product) => product.subCategory)
        .filter((subCategory) => subCategory !== "")
    ),
  ]; // excluding the empty string to be considered as category

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  const filteredSubCatsProducts =
    selectedTab === 0
      ? selectedCategoryProducts
      : selectedCategoryProducts.filter(
          (product) => product.subCategory === subCategories[selectedTab]
        );

  return (
    <div className="comp-subfeatured-tabs">
      <div className="container">
        <div className="segment-gridbox">
          <div className="subfeatured-gridbox-tabs">
            <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
              <div className="subfeatured-tabs-head">
                <Title titleText={selectedCategory} />
                <TabList>
                  <div className="subfeatured-tabs-btns">
                    {subCategories.slice(0, 5)?.map((tabHead, index) => (
                      <Tab key={index}>
                        <button
                          type="button"
                          className={`subfeatured-tab-btn ${
                            selectedTab === index ? "active" : ""
                          }`}
                        >
                          {tabHead}
                        </button>
                      </Tab>
                    ))}
                  </div>
                </TabList>
                <Link to="/" className="link link-primary">
                  <span className="link-text">Browse All Product</span>
                  <span className="link-icon">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
              <div className="subfeatured-tabs-body">
                {subCategories.slice(0, 5)?.map((subCategory, index) => (
                  <TabPanel key={index}>
                    <ProductList
                      productItems={filteredSubCatsProducts?.slice(0, 8)}
                      viewRating={true}
                      viewGap={true}
                    />
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </div>
          <div className="subfeatured-gridbox-offers">
            <div className="offers-t">
              <div className="offers-content">
                <img
                  src={Images.FeaturedAccessories}
                  alt=""
                  className="offers-img"
                />
                <h3 className="text-lg">Xiaomi True Wireless Earbuds</h3>
                <p className="text-sm">
                  Escape the noise, it&apos;s time to hear the magic with Xiaomi
                  Earbuds.
                </p>

                <div className="text-offers">
                  <span className="offers-label">Only for: </span>
                  <span className="offers-price">$299 USD</span>
                </div>
                <button className="btn btn-primary">
                  <span className="btn-text">shop now</span>
                  <span className="btn-icon">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
            <div className="offers-b">
              <div className="offers-content">
                <div className="offers-badge">summer sales</div>
                <h3 className="text-lg">37% discount</h3>
                <p className="text-md">
                  only for <span>SmartPhone</span> product
                </p>
                <button className="btn btn-secondary">
                  <span className="btn-text">shop now</span>
                  <span className="btn-icon">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryTabs;
