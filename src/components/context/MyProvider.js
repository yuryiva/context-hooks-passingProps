import React, { Component } from "react";

// It creates our context object, later we will use it to define our Provider or Consumer
// We need to export it because when we use the Consumer, it will be in a different file
export const MyContext = React.createContext()


// We create a class component that will store 
// the global state of the app and the methods we use
class MyProvider extends Component {
  state = {
    name: "TOMMY",
    age: 33,
  };

  addAction = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  subtractAction = () => {
    this.setState({
      age: this.state.age - 1,
    });
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          addAction: this.addAction,
          subtractAction: this.subtractAction,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
