import { ChatTeardropDots, PhoneCall } from "@phosphor-icons/react";
import "./Contact.scss";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const Contact = () => {
  return (
    <div className="comp-contact">
      <div className="container">
        <div className="seg-contact">
          <div className="elem-contact-badge">contact us</div>
          <h3 className="elem-contact-ttl">
            Don&apos;t find your answer. <br /> Contact with us.
          </h3>
          <div className="elem-contact-gridbox">
            <div className="elem-gbox-call">
              <div className="elem-gbox-icon">
                <PhoneCall size={48} color="#2da5f3" weight="duotone" />
              </div>
              <div className="elem-gbox-content">
                <h4 className="elem-gbox-ttl">Call us now</h4>
                <p className="elem-gbox-text">
                  We are available online from 9:00 AM to 5:00 PM (GMT95:45)
                  Talk with use now
                </p>
                <p className="elem-gbox-info">+1-202-555-0126</p>
                <div className="elem-gbox-btn">
                  <span className="btn-text">call now</span>
                  <span className="btn-icon">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </div>
            <div className="elem-gbox-chat">
              <div className="elem-gbox-icon">
                <ChatTeardropDots size={48} color="#02db22" weight="duotone" />
              </div>
              <div className="elem-gbox-content">
                <h4 className="elem-gbox-ttl">Call us now</h4>
                <p className="elem-gbox-text">
                  We are available online from 9:00 AM to 5:00 PM (GMT95:45)
                  Talk with use now
                </p>
                <p className="elem-gbox-info">Support@clicon.com</p>
                <div className="elem-gbox-btn">
                  <span className="btn-text">contact us</span>
                  <span className="btn-icon">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
