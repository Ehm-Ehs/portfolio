import Tabs from "../tabs/tab";
import "./contactUs.css";
function ContactUs() {
  return (
    <>
      <div className="contact-us" id="contactus">
        <div className="hi">
          <h3>Let's make something amazing together.</h3>
          <h3 className="contactLinks">
            Start by <a href="mailto:salamimariam239@gmail.com?" className="contact-link" > saying hi</a>
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
      <div className="footer">
        <div>Copyright@2022</div>
        <div className="footer-content">
          <p className="cookie-policy">Policy</p>
          <p className="cookie-policy">Cookies</p>
                </div>
      </div>
    </>
  );
}

export default ContactUs;
