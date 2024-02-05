import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./ProductTabs.scss";
import { useState } from "react";
import {
  CreditCard,
  Handshake,
  Headphones,
  Medal,
  Truck,
} from "@phosphor-icons/react";

const TABS_HEAD = [
  "description",
  "additional information",
  "specification",
  "review",
];

const ProductTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="comp-product-tabs">
      <div className="container">
        <div className="segment-product-tabs">
          <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
            <div className="product-tabs-head">
              <TabList>
                {TABS_HEAD?.map((tabHead, index) => (
                  <Tab key={index}>
                    <button type="button" className={`product-tab-head`}>
                      {tabHead}
                    </button>
                  </Tab>
                ))}
              </TabList>
            </div>
            <div className="product-tabs-panel">
              <TabPanel key={0}>
                <div className="product-tab-panel product-tab-panel-description">
                  <div className="product-tab-block description">
                    <h4 className="product-tab-panel-ttl">Description</h4>
                    <div className="content-stylings">
                      <p>
                        The most powerful MacBook Pro ever is here. With the
                        blazing-fast M1 Pro or M1 Max chip — the first Apple
                        silicon designed for pros — you get groundbreaking
                        performance and amazing battery life. Add to that a
                        stunning Liquid Retina XDR display, the best camera and
                        audio ever in a Mac notebook, and all the ports you
                        need. The first notebook of its kind, this MacBook Pro
                        is a beast. M1 Pro takes the exceptional performance of
                        the M1 architecture to a whole new level for pro users.
                      </p>
                      <p>
                        Even the most ambitious projects are easily handled with
                        up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural
                        Engine, and dedicated encode and decode media engines
                        that support H.264, HEVC, and ProRes codecs.
                      </p>
                    </div>
                  </div>
                  <div className="product-tab-block features">
                    <h4 className="product-tab-panel-ttl">Feature</h4>
                    <ul className="product-tab-features-list">
                      <li className="product-tab-features-item">
                        <span className="features-item-icon">
                          <Medal size={16} weight="bold" />
                        </span>
                        <span className="features-item-txt">
                          Free 1 Year Warranty
                        </span>
                      </li>
                      <li className="product-tab-features-item">
                        <span className="features-item-icon">
                          <Truck size={16} weight="bold" />
                        </span>
                        <span className="features-item-txt">
                          Free Shipping & Fasted Delivery
                        </span>
                      </li>
                      <li className="product-tab-features-item">
                        <span className="features-item-icon">
                          <Handshake size={16} weight="bold" />
                        </span>
                        <span className="features-item-txt">
                          100% Money-back guarantee
                        </span>
                      </li>
                      <li className="product-tab-features-item">
                        <span className="features-item-icon">
                          <Headphones size={16} weight="bold" />
                        </span>
                        <span className="features-item-txt">
                          24/7 Customer support
                        </span>
                      </li>
                      <li className="product-tab-features-item">
                        <span className="features-item-icon">
                          <CreditCard size={16} weight="bold" />
                        </span>
                        <span className="features-item-txt">
                          Secure payment method
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="product-tab-block ship">
                    <h4 className="product-tab-panel-ttl">
                      Shipping Information
                    </h4>
                    <ul className="product-tab-ship-list">
                      <li className="product-tab-ship-item">
                        <span className="ship-item-lbl">Courier: </span>
                        <span className="ship-item-val">
                          2-4 days, free shipping
                        </span>
                      </li>
                      <li className="product-tab-ship-item">
                        <span className="ship-item-lbl">Local Shipping: </span>
                        <span className="ship-item-val">
                          up to one week, $19.00
                        </span>
                      </li>
                      <li className="product-tab-ship-item">
                        <span className="ship-item-lbl">
                          UPS Ground Shipping:{" "}
                        </span>
                        <span className="ship-item-val">4-6 days, $29.00</span>
                      </li>
                      <li className="product-tab-ship-item">
                        <span className="ship-item-lbl">
                          Unishop Global Export:{" "}
                        </span>
                        <span className="ship-item-val">3-4 days, $39.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
              <TabPanel key={1}>
                <div className="product-tab-panel">
                  <h4 className="product-tab-panel-ttl">
                    Additional Information
                  </h4>
                </div>
              </TabPanel>
              <TabPanel key={2}>
                <div className="product-tab-panel">
                  <h4 className="product-tab-panel-ttl">Specification</h4>
                </div>
              </TabPanel>
              <TabPanel key={3}>
                <div className="product-tab-panel">
                  <h4 className="product-tab-panel-ttl">Review</h4>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
