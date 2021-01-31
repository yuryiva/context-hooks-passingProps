import React from "react";
import { MyContext } from "./context/MyProvider";

// const Section5 = (props) => {
//   return (
//     <div>
//       SECTION 5 <br />
//       Name: {props.name}
//       <br />
//       Age: {props.age}
//       <br/>
//       <button onClick={props.add}>+</button>
//       <button onClick={props.subtract}>-</button>
//     </div>
//   );
// };

const Section5 = () => (
  <MyContext.Consumer>
    {(value) => (
      <div>
        SECTION 5 <br />
        Name: {value.state.name}
        <br />
        Age: {value.state.age}
        <br />
        <button onClick={value.addAction}>+</button>
        <button onClick={value.subtractAction}>-</button>
      </div>
    )}
  </MyContext.Consumer>
);
export default Section5;
