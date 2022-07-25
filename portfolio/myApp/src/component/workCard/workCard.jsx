import "./workCard.css"
function WorkCard(props){
   const { work, className} = props
   console.log("classname", className)
    return(
        <>
       
          
            <div className={"work-box"} style={{backgroundColor:`${work.className}`}}>
              <strong>
                <h4> {work.title} </h4>
              </strong>
              <p> {work.description} </p>
              <img src={work.src} alt="img" className="workImg" />
            </div>
         
        
        </>
    );
}
export default WorkCard;