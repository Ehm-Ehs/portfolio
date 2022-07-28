import "./tab.css";
// import { HashLink  as Link} from 'react-router-hash-link';

function Tabs(props){
    const tabs = [
        { title: "Skills", link:"#skill",id: 1 },
        { title: "Works", link:"#work", id: 2 },
        { title: "Experience",link:"#experience", id: 3},
        { title: "Contact me", link:"#contactus", id: 4 }
      ];
    return(
        <>
        <div className={props.className}>
          {tabs.map((tab) => (
            <div className="tab" key={tab.id}>
              <div className="tab-title  tab-link"><a href={tab.link} className="link">{tab.title}</a></div>
            </div>
          ))}
        </div>
        </>
    );
}

export default Tabs;


