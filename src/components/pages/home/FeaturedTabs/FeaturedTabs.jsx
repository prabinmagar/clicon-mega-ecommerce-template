import { ArrowRight } from "@phosphor-icons/react";
import { Images } from "../../../../assets/images";
import "./FeaturedTabs.scss";
import Title from "../../../common/Title/Title";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { products } from "../../../../data/mockData";
import ProductList from "../../../../features/product/ProductList/ProductList";

const FeaturedTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const productItems = products?.filter(
    (product) => product.isFeatured === true
  );

  const categories = [
    "All Products",
    ...new Set(productItems.map((product) => product.category)),
  ];

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  const filteredProducts =
    selectedTab === 0
      ? productItems
      : productItems.filter(
          (product) => product.category === categories[selectedTab]
        );

  return (
    <div className="comp-featured-tabs">
      <div className="container">
        <div className="segment-gridbox">
          <div className="featured-gridbox-offers">
            <div className="offers-content">
              <h4 className="text-md">computer & accessories</h4>
              <h2 className="text-lg">32% Discount</h2>
              <p className="text-sm">For all electronic products</p>
              <div className="text-offers">
                <span className="offers-label">Offers ends in:</span>
                <span className="offers-deadline">ends of christmas</span>
              </div>
              <button className="btn btn-primary">
                <span className="btn-text">shop now</span>
                <span className="btn-icon">
                  <ArrowRight size={22} />
                </span>
              </button>
            </div>
            <img className="offers-img" src={Images.FeaturedOffers} alt="" />
          </div>
          <div className="featured-gridbox-tabs">
            <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
              <div className="featured-tabs-head">
                <Title titleText={"Featured Products"} />
                <TabList>
                  <div className="featured-tabs-btns">
                    {categories?.map((tabHead, index) => (
                      <Tab key={index}>
                        <button
                          type="button"
                          className={`featured-tab-btn ${
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
              <div className="featured-tabs-body">
                {categories?.map((category, index) => (
                  <TabPanel key={index}>
                    <ProductList
                      productItems={filteredProducts}
                      viewRating={true}
                      viewGap={true}
                    />
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTabs;
