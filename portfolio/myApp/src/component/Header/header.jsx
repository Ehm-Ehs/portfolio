import "./header.css";
import Logo from "../images/logo.png";
import Tabs from "../tabs/tab";

function Header() {
 
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="logo" className="sign" />
        </div>
        <Tabs className="tabs" />
        <div className="contact">
          <p>08010004557</p>
          <div className="contact-icon">
          <button className="call"><img
            src="https://www.svgrepo.com/show/70503/phone-call.svg"
            alt="phone"
            className="phone"
          /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
