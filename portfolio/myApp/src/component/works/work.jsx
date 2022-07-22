import WorkCard from "../workCard/workCard";
import "./work.css";


function Work() {
    const works = [
        {
          title: "Web Design",
          description: " Event Management E-commerce",
          src: "../images/home.jpg",
          id: 1,
          className:"blue"
        },
        {
          title: "Web Design",
          description: " Event Management E-commerce",
          src: "../images/food.jpg",
          id: 2,
          className:"yellow"
        },
        {
          title: "Web Design",
          description: " Event Management E-commerce",
          src: "../images/home.jpg",
          id: 3,
          className:"orange"
        },
      ];
  return (
    <>
      <div className="work">
        <div className="work-h">
          <div>
            <strong><h3>My Latest Work</h3></strong>
            <p>Perfect Solutions Provided</p>
          </div>
          <a href="#" className="work-link">
            <strong>Explore More Works</strong>
          </a>
        </div>
        <div className="work-tab">
        {works.map((work, index) => (
            <WorkCard key={index} work={work}  />
))}
        </div>
      </div>
    </>
  );
}

export default Work;
