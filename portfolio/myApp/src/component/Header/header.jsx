import "./header.css";
import Logo from "../images/logo(2).png";
import Tabs from "../tabs/tab";

function Header() {
 
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="/"><img src={Logo} alt="logo" className="sign" /></a>
        </div>
        <Tabs className="tabs" />
        <div className="contact">
          <a href="tel:08010004457" ><img
            src="https://www.svgrepo.com/show/70503/phone-call.svg"
            alt="phone"
            className="phone"
          /></a>
        </div>
      </div>
    </>
  );
}

export default Header;
