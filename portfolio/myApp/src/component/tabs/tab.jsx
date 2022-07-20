import "./tab.css";

function Tabs(props){
    const tabs = [
        { title: "Services", id: 1 },
        { title: "Works", id: 2 },
        { title: "Notes", id: 3 },
        { title: "Experience", id: 4 },
      ];
    return(
        <>
        <div className={props.className}>
          {tabs.map((tab) => (
            <div className="tab" key={tab.id}>
              <div className="tab-title">{tab.title}</div>
            </div>
          ))}
        </div>
        </>
    );
}

export default Tabs;


