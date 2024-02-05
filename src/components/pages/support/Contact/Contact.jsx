import { ChatTeardropDots, PhoneCall } from "@phosphor-icons/react";
import "./Contact.scss";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const Contact = () => {
  return (
    <div className="comp-support-contact">
      <div className="container">
        <div className="segment-support-contact">
          <div className="support-contact-badge">contact us</div>
          <h3 className="support-contact-ttl">
            Don&apos;t find your answer. <br /> Contact with us.
          </h3>
          <div className="support-contact-gridbox">
            <div className="contact-gridbox-call">
              <div className="contact-gridbox-icon">
                <PhoneCall size={48} color="var(--celes-blue)" weight="duotone" />
              </div>
              <div className="contact-gridbox-content">
                <h4 className="contact-gridbox-ttl">Call us now</h4>
                <p className="contact-gridbox-text">
                  We are available online from 9:00 AM to 5:00 PM (GMT95:45)
                  Talk with use now
                </p>
                <p className="contact-gridbox-info">+1-202-555-0126</p>
                <div className="contact-gridbox-btn">
                  <span className="btn-text">call now</span>
                  <span className="btn-icon">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-gridbox-chat">
              <div className="contact-gridbox-icon">
                <ChatTeardropDots size={48} color="#02db22" weight="duotone" />
              </div>
              <div className="contact-gridbox-content">
                <h4 className="contact-gridbox-ttl">Call us now</h4>
                <p className="contact-gridbox-text">
                  We are available online from 9:00 AM to 5:00 PM (GMT95:45)
                  Talk with use now
                </p>
                <p className="contact-gridbox-info">Support@clicon.com</p>
                <div className="contact-gridbox-btn">
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
