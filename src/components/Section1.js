import React from "react";
import Section2 from "./Section2";

const Section1 = (props) => {
  return (
    <div>
      <hr />
      SECTION 1
      <Section2 
        //   name={props.name}
        //   age={props.age}
        //   add={props.add}
        //   subtract={props.subtract}
      />
      <hr />
    </div>
  );
};

export default Section1;
