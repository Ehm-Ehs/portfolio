import "./intro.css";
import Fem from "../images/intro.png"

function Intro() {
  return (
    <>
      <div className="intro">
        <div className="left">
          <h1 className="naming">
            Hey there, I'm <span className="name">Mariam</span>
          </h1>
          <strong>
          
            <p className="email">salamimariamkofoworola@gmail.com</p>
          </strong>
          <div className="experience email">
            <h1 className="num">4</h1>
            <div className="years">
              <strong>
                <p className="age">months</p>
                <p className="age">experience</p>
              </strong>
            </div>
          </div>
        </div>
        <img src={Fem} alt="fem"/>
        <div className="right">
          <em><p className="right-text">
            I'm a front web developer with a passion for
          <br/> building beautiful and functional websites.</p></em>
        </div>
      </div>
    </>
  );
}

export default Intro;
