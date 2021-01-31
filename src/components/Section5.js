import React, { useContext } from "react";
// This component will be consuming our context
// so we need to import it in order to use it
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

// This component will be wrapped in our context.
// Consumer so we have access to the global state and methods declared there.
// It only accepts a child a function that will return some html,
// this function has as an argument the value of our consumer (which stores the state and our methods)

// const Section5 = () => (
//   <MyContext.Consumer>
//     {(value) => (
//   <div>
//     SECTION 5 <br />
//     Name: {value.state.name}
//     <br />
//     Age: {value.state.age}
//     <br />
//     <button onClick={value.addAction}>+</button>
//     <button onClick={value.subtractAction}>-</button>
//   </div>
//     )}
//   </MyContext.Consumer>
// );

const Section5 = () => {
  const context = useContext(MyContext);

  return (
    <div>
      SECTION 5 <br />
      Name: {context.state.name}
      <br />
      Age: {context.state.age}
      <br />
      <button onClick={context.addAction}>+</button>
      <button onClick={context.subtractAction}>-</button>
    </div>
  );
};

export default Section5;
