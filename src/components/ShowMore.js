import { useState } from "react";

function ShowMore(props) {
  const [showmore, setShowmore] = useState(false);

  return (
    <p className="cardInfo">
      {showmore
        ? props.desc : props.desc.substring(0, 35 - 3)}
        <button onClick={()=>{setShowmore(!showmore)}}>...{showmore?"less":"more"}</button>
    </p>
  );
}
export default ShowMore;
