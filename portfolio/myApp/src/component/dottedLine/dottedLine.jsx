import "./dottedLine.css";
function DottedLine(props) {
  return (
    <>
      <div className="dotted">
        <div className="container">
          <div className="dashed-line">
            <div className={props.className}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DottedLine;
