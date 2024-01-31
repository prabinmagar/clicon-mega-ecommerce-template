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
    <div className="comp-prodtabs">
      <div className="container">
        <div className="seg-prodtabs">
          <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
            <div className="tabs-head">
              <TabList>
                {TABS_HEAD?.map((tabHead, index) => (
                  <Tab key={index}>
                    <button type="button" className={`tab-head`}>
                      {tabHead}
                    </button>
                  </Tab>
                ))}
              </TabList>
            </div>
            <div className="tabs-body">
              <TabPanel key={0}>
                <div className="tab-body tab-body-des">
                  <div className="elem-tab-des">
                    <h4 className="tab-elem-ttl">Description</h4>
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
                  <div className="elem-tab-feat">
                    <h4 className="tab-elem-ttl">Feature</h4>
                    <ul className="tab-ft-list">
                      <li className="tab-ft-item">
                        <span className="item-icon">
                          <Medal size={16} weight="bold" />
                        </span>
                        <span className="item-txt">Free 1 Year Warranty</span>
                      </li>
                      <li className="tab-ft-item">
                        <span className="item-icon">
                          <Truck size={16} weight="bold" />
                        </span>
                        <span className="item-txt">
                          Free Shipping & Fasted Delivery
                        </span>
                      </li>
                      <li className="tab-ft-item">
                        <span className="item-icon">
                          <Handshake size={16} weight="bold" />
                        </span>
                        <span className="item-txt">
                          100% Money-back guarantee
                        </span>
                      </li>
                      <li className="tab-ft-item">
                        <span className="item-icon">
                          <Headphones size={16} weight="bold" />
                        </span>
                        <span className="item-txt">24/7 Customer support</span>
                      </li>
                      <li className="tab-ft-item">
                        <span className="item-icon">
                          <CreditCard size={16} weight="bold" />
                        </span>
                        <span className="item-txt">Secure payment method</span>
                      </li>
                    </ul>
                  </div>
                  <div className="elem-tab-shipinfo">
                    <h4 className="tab-elem-ttl">Shipping Information</h4>
                    <ul className="tab-shif-list">
                      <li className="tab-shif-item">
                        <span className="item-lbl">Courier: </span>
                        <span className="item-val">
                          2-4 days, free shipping
                        </span>
                      </li>
                      <li className="tab-shif-item">
                        <span className="item-lbl">Local Shipping: </span>
                        <span className="item-val">up to one week, $19.00</span>
                      </li>
                      <li className="tab-shif-item">
                        <span className="item-lbl">UPS Ground Shipping: </span>
                        <span className="item-val">4-6 days, $29.00</span>
                      </li>
                      <li className="tab-shif-item">
                        <span className="item-lbl">
                          Unishop Global Export:{" "}
                        </span>
                        <span className="item-val">3-4 days, $39.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
              <TabPanel key={1}>
                <div className="tab-body">
                  <h4 className="tab-elem-ttl">Additional Information</h4>
                </div>
              </TabPanel>
              <TabPanel key={2}>
                <div className="tab-body">
                  <h4 className="tab-elem-ttl">Specification</h4>
                </div>
              </TabPanel>
              <TabPanel key={3}>
                <div className="tab-body">
                  <h4 className="tab-elem-ttl">Review</h4>
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
