// import React, { Component } from "react";
import React, { useState } from "react";

// It creates our context object, later we will use it to define our Provider or Consumer
// We need to export it because when we use the Consumer, it will be in a different file
export const MyContext = React.createContext();

// We create a class component that will store
// the global state of the app and the methods we use
// class MyProvider extends Component {
//   state = {
//     name: "TOMMY",
//     age: 33,
//   };

//   addAction = () => {
//     this.setState({
//       age: this.state.age + 1,
//     });
//   };

//   subtractAction = () => {
//     this.setState({
//       age: this.state.age - 1,
//     });
//   };
//   render() {

const initialState = {
  name: "CHIKA",
  age: 18,
};

const MyProvider = (props) => {
  const [state, setState] = useState(initialState);

  const addAction = () => setState({
    name: 'SUPER-CHIKA',
    age: state.age + 1,
  });

  const subtractAction = () => setState({
    name: 'CHIKKKA',
    age: state.age - 1,
  });

  return (
    <MyContext.Provider
      value={{
        state: state,
        addAction: addAction,
        subtractAction: subtractAction,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
  //}
};

export default MyProvider;
