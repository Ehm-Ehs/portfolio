import "./skills.css";
import Desktop from "../images/desktop.svg"
function Skills() {
  return (
    <>
      <div className="skill">
        <div className="leftDown">
          <img src={Desktop} alt="website" className="website" />
          <div className="skillset">
            <strong>
              <h3>Web Design</h3>
            </strong>
            <p>3 project</p>
          </div>
        </div>
        <div className="right">
          <strong>
            <h3>What do i help</h3>
          </strong>
          <p>i will help you build your website to be fuctional, </p>
          <p>bring your information and digital product to live </p>
          <div className="leftDown">
            <div>
              <strong>
                <h3>3+</h3>
                <p>Project Completed</p>
              </strong>
            </div>
            <div>
              <strong>
                <h3>2+</h3>
                <p>Happy Client</p>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
