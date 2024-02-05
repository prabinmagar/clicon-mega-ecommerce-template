import { Plus } from "@phosphor-icons/react/dist/ssr";
import "./Collapsible.scss";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { Minus } from "@phosphor-icons/react";
import { faqData } from "../../../../data/mockData";

const Collapsible = () => {
  return (
    <div className="comp-faq-collapsible">
      <div className="segment-faq-collapsible">
        <div className="faq-collapsible-list">
          {faqData?.map((faqData) => {
            return <CollapsibleItem key={faqData.id} faqData={faqData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;

const CollapsibleItem = ({ faqData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapsible = () => setIsOpen((prevData) => !prevData);

  return (
    <div className="faq-collapsible-item">
      <div
        className={`faq-collapsible-head ${isOpen ? "active" : ""}`}
        onClick={() => handleCollapsible()}
      >
        <p className="collapsible-head-ttl">{faqData.title}</p>
        <button type="button" className="collapsible-icon-btn">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </button>
      </div>
      <div className={`faq-collapsible-body ${isOpen ? "show" : ""}`}>
        <div
          className="content-stylings"
          dangerouslySetInnerHTML={{
            __html: faqData.content,
          }}
        ></div>
      </div>
    </div>
  );
};

CollapsibleItem.propTypes = {
  faqData: PropTypes.object,
  defaultActive: PropTypes.bool,
};
