import { Component } from "react";
import Section1 from "./components/Section1";

import MyProvider from "./components/context/MyProvider";
class App extends Component {
  
  // We no longer need this when we use context since the state and methods will be in the context component
  // state = {
  //   name: "JOHN",
  //   age: 33,
  // };

  // addAction = () => {
  //   this.setState({
  //     age: this.state.age + 1,
  //   });
  // };

  // subtractAction = () => {
  //   this.setState({
  //     age: this.state.age - 1,
  //   });
  // };

  render() {
    return (

      //This component is no longer need to pass props 
      // since the state is already in the context
      // {/* <Section1
      //   name={this.state.name}
      //   age={this.state.age}
      //   add={this.addAction}
      //   subtract={this.subtractAction}
      // /> */}

      <MyProvider>
      <div>
        <Section1 />
        </div>
      </MyProvider>
    );
  }
}

export default App;
