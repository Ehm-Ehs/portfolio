import "./skills.css";
import Desktop from "../images/desktop.svg";
function Skills() {
  return (
    <>
      <div className="skill" id="skill" >
        <div className="skill-left">
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
            <h3 className="right-h">What do i help</h3>
          </strong>
          <p className="lorem">
            i will help you build your website to be fuctional,bring your
            information and digital product to live.
          </p>
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            atque, voluptatibus odio illum earum illo architecto! Quisquam
            inventore ratione dolore vitae amet, harum unde, consequatur laborum
            autem dolorum accusantium possimus! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nobis quasi omnis quibusdam numquam
            porro est quidem explicabo animi, dolorum similique rem? Nesciunt
            neque illo libero fugit pariatur quam ab ut.
          </p>

          <div className="leftDown">
            <div className="left-downRight">
              <strong>
                <h3 className="skill-year">3+</h3>
                <p>Project Completed</p>
              </strong>
            </div>
            <div className="left-downRight">
              <strong>
                <h3 className="skill-year">2+</h3>
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
