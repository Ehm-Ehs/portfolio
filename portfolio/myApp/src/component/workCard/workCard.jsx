import "./workCard.css"
function WorkCard(props){
   const { work, className} = props
   console.log("classname", className)
    return(
        <>
       
          
            <div className={"work-box"} style={{backgroundColor:`${work.className}`}}>
              <div className="worktext"><strong>
                <h4 className="workText"> {work.title} </h4>
              </strong>
              <p className="workText"> {work.description} </p></div>
              <img src={work.src} alt="img" className="workImg" />
            </div>
         
        
        </>
    );
}
export default WorkCard;