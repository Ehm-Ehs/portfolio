import "./intro.css";

function Intro() {
  return (
    <>
      <div className="intro">
        <div className="left">
          <h1 className="naming">
            Hey there, I'm <span className="name">Mariam</span>
          </h1>
          <strong>
            {" "}
            <p className="email">salamimariamkofoworola@gmail.com</p>
          </strong>
          <div className="experience">
            <h1 className="num">4</h1>
            <div className="years">
              <strong>
                <p className="age">months</p>
                <p className="age">experience</p>
              </strong>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="right-text">
            I'm a front web developer with a passion for
          <br/> building beautiful and functional websites.</p>
        </div>
      </div>
    </>
  );
}

export default Intro;
