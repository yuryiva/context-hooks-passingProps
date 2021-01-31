import React from "react";

const Section5 = (props) => {
  return (
    <div>
      SECTION 5 <br />
      Name: {props.name}
      <br />
      Age: {props.age}
      <br/>
      <button onClick={props.add}>+</button>
      <button onClick={props.subtract}>-</button>
    </div>
  );
};

export default Section5;
