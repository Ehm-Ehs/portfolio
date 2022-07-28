import Tabs from "../tabs/tab";
import "./contactUs.css";
function ContactUs() {
  return (
    <>
      <div className="contact-us" id="contactus">
        <div className="hi">
          <h3>Let's make something amazing together.</h3>
          <h3 className="contactLinks">
            Start by <a href="#" className="contact-link"> saying hi</a>
          </h3>
        </div>

        <div className="info">
          <div className="address">
            <strong>
              <p> Information</p>
            </strong>
            <p>Citec Villas</p>
          </div>
          <Tabs className="tab1"/>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
