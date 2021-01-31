import React from "react";
import Section5 from "./Section5";

const Section4 = (props) => {
  return (
    <div>
      <hr />
      SECTION 4
      <Section5
        name={props.name}
        age={props.age}
        add={props.add}
        subtract={props.subtract}
      />
      <hr />
    </div>
  );
};

export default Section4;
