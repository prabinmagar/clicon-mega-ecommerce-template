import { Plus } from "@phosphor-icons/react/dist/ssr";
import "./Collapsible.scss";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { Minus } from "@phosphor-icons/react";

const FAQ_DATA = [
  {
    id: 1,
    title: "Suspendisse ultrices pharetra libero sed interdum.",
    content: `<p>
    Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in.
    Morbi aliquet pulvinar orci non vulputate. Donec aliquet
    ullamcorper gravida. Interdum et malesuada fames ac ante ipsum
    primis in faucibus. Sed molestie accumsan dui, non iaculis
    magna mattis id. Ut consectetur massa at viverra euismod.
    Interdum et malesuada fames ac ante ipsum primis in faucibus.
    Praesent eget sem purus.
  </p>
  <ul>
    <li>
      Vivamus sed est non arcu porta aliquet et vitae nulla.
    </li>
    <li>
      Integer et lacus vitae justo fermentum rutrum. In nec
      ultrices massa.
    </li>
    <li>
      Proin blandit nunc risus, at semper turpis sagittis nec.
    </li>
    <li>Quisque ut dolor erat.</li>
  </ul>`,
  },
  {
    id: 2,
    title: "Fusce molestie condimentum facilisis.",
    content: `<p>
    Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in.
  </p>`,
  },
  {
    id: 3,
    title: "Quisque quis nunc quis urna tempor lobortis vel non orci.",
    content: `<p>
    Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in.
    Morbi aliquet pulvinar orci non vulputate. Donec aliquet
    ullamcorper gravida. Interdum et malesuada fames ac ante ipsum
    primis in faucibus. Sed molestie accumsan dui, non iaculis
    magna mattis id. Ut consectetur massa at viverra euismod.
    Interdum et malesuada fames ac ante ipsum primis in faucibus.
    Praesent eget sem purus.
  </p>`,
  },
  {
    id: 4,
    title:
      "Donec rutrum ultrices ante nec malesuada. In accumsan eget nisi a rhoncus.",
    content: ` <p>
    Interdum et malesuada fames ac ante ipsum primis in faucibus.
    Sed molestie accumsan dui, non iaculis magna mattis id. Ut
    consectetur massa at viverra euismod. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Praesent eget sem
    purus.
  </p>`,
  },
  {
    id: 5,
    title: "Nulla sed sapien maximus, faucibus massa vitae.",
    content: `<p>
    Morbi aliquet pulvinar orci non vulputate. Donec aliquet
    ullamcorper gravida. Interdum et malesuada fames ac ante ipsum
    primis in faucibus. Sed molestie accumsan dui, non iaculis
    magna mattis id. Ut consectetur massa at viverra euismod.
    Interdum et malesuada fames ac ante ipsum primis in faucibus.
    Praesent eget sem purus.
  </p>`,
  },
];

const Collapsible = () => {
  return (
    <div className="comp-faq-collap">
      <div className="seg-faq-collap">
        <div className="faq-collap-list">
          {FAQ_DATA?.map((faqData) => {
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
    <div className="faq-collap-item">
      <div
        className={`faq-collap-head ${isOpen ? "active" : ""}`}
        onClick={() => handleCollapsible()}
      >
        <p className="collap-head-ttl">{faqData.title}</p>
        <button type="button" className="collap-icobtn">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </button>
      </div>
      <div className={`faq-collap-body ${isOpen ? "show" : ""}`}>
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
