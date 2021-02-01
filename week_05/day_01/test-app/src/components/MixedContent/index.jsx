import React from 'react';


const MixedContent = (props) => (
  <div className="MixedContent">
    <h1>{props.mytitle}</h1>
    <img src={props.myimage} />
    <p>{props.mytext}</p>
  </div>

)



export default MixedContent;
