import SupportTop from "../../components/pages/support/SupportTop/SupportTop";
import Assistance from "../../components/pages/support/Assistance/Assistance";
import PopularTopics from "../../components/pages/support/PopularTopics/PopularTopics";
import Contact from "../../components/pages/support/Contact/Contact";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";

const SupportScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Customer Support",
      link: "/support",
    },
  ];

  return (
    <div className="pg-support">
      <Breadcrumb breadData={breadData} />
      <SupportTop />
      <Assistance />
      <PopularTopics />
      <Contact />
    </div>
  );
};

export default SupportScreen;
