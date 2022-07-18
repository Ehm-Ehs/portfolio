import "./header.css";
import Logo from "../images/logo.png";

function Header() {
  const tabs = [
    { title: "Services", id: 1 },
    { title: "Works", id: 2 },
    { title: "Notes", id: 3 },
    { title: "Experience", id: 4 },
  ];
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="logo" className="sign" />
        </div>
        <div className="tabs">
          {tabs.map((tab) => (
            <div className="tab" key={tab.id}>
              <div className="tab-title">{tab.title}</div>
            </div>
          ))}
        </div>
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
