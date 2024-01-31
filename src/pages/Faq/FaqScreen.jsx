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
    <div className="pg-faq">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="seg-faq-gridbox">
          <div className="elem-gbox-l">
            <h3 className="elem-faq-ttl">Frequently Asked Questions</h3>
            <Collapsible />
          </div>
          <div className="elem-gbox-r">
            <AskSupport />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqScreen;
