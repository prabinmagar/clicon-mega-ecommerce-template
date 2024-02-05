import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import AskSupport from "../../components/pages/faq/AskSupport/AskSupport";
import Collapsible from "../../components/pages/faq/Collapsible/Collapsible";
import "./FaqScreen.scss";

const FaqScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Pages ",
      link: "/pages",
    },
    {
      text: "FAQs",
      link: "/faq",
    },
  ];

  return (
    <div className="pg-help">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-help-gridbox">
          <div className="help-gridbox-faq">
            <h3 className="gridbox-faq-ttl">Frequently Asked Questions</h3>
            <Collapsible />
          </div>
          <div className="help-gridbox-ask">
            <AskSupport />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqScreen;
