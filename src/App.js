import { Component } from "react";
import Section1 from "./components/Section1";

class App extends Component {
  state = {
    name: "JOHN",
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
      <Section1
        name={this.state.name}
        age={this.state.age}
        add={this.addAction}
        subtract={this.subtractAction}
      />
    );
  }
}

export default App;
