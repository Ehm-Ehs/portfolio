import DottedLine from "../dottedLine/dottedLine";
import "./experience.css";

function Experience() {
  const experiences = [
    { heading: "Self Employed, FCT", date: "April 2022 - July 2022", id: 1 },
    { heading: "Lorem Ipsum", date: "April 2032 - July 2012", id: 2 },
    { heading: "Lorem Ipsum", date: "April 2052 - July 2072", id: 3 },
  ];
  const positions = [
    {
      title: "Lorem Ipsum",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,libero recusandae quidem incidunt quibusdam expedita provident suscipit quia! Ad eaque nihil eius dicta quod inventore fugiat mollitia maiores odio! Esse",
      color: "orange-circle",
    },
    {
      title: "Lorem Ipsum",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,libero recusandae quidem incidunt quibusdam expedita provident suscipit quia! Ad eaque nihil eius dicta quod inventore fugiat mollitia maiores odio! Esse",
      color: "yellow-circle",
    },
    {
      title: "Lorem Ipsum",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,libero recusandae quidem incidunt quibusdam expedita provident    suscipit quia! Ad eaque nihil eius dicta quod inventore fugiat mollitia maiores odio! Esse",
      color: "blue-circle",
    },
  ];
  return (
    <>
      <h1 className="work"> My Work Experiences</h1>
      <div className="experience experiences ">
        <div className="companies">
          {experiences.map((experience) => (
            <div className="company-name" key={experience.id}>
              <h3 className="heading"> {experience.heading} </h3>
              <p className="writings"> {experience.date} </p>
            </div>
          ))}
        </div>

        <div className="position">
          {positions.map((position) => (
            <div className="position-name" key={position.id}>
              <div className="dot">
                <DottedLine className={position.color} />
              </div>
              <div className="p-writeup">
                <h3 className="heading"> {position.title} </h3>
                <p className="p-writings"> {position.body} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
