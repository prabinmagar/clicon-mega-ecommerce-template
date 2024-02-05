import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import SignInForm from "../../components/pages/sign/SignForm/SignInForm";
import SignUpForm from "../../components/pages/sign/SignForm/SignUpForm";
import "./SignScreen.scss";

const SignScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "User Account",
      link: "/user",
    },
    {
      text: "Sign In",
      link: "/sign",
    },
  ];

  return (
    <div className="pg-sign">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-sign-tabs">
          <Tabs>
            <div className="tabs-head">
              <TabList>
                <Tab>
                  <button type="button" className="tab-head">
                    sign in
                  </button>
                </Tab>
                <Tab>
                  <button type="button" className="tab-head">
                    sign up
                  </button>
                </Tab>
              </TabList>
            </div>
            <div className="tabs-body">
              <TabPanel>
                <div className="tab-body">
                  <SignInForm />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-body">
                  <SignUpForm />
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SignScreen;
