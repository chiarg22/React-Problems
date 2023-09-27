import { Component } from "react";

class CounterClass extends Component {
  state = {
    counter: 10,
  };

  _handleOnIncrement = () => {
    if(this.state.counter<100)
    this.setState({ counter: this.state.counter + 2 });
  };

  _handleOnDecrement = () => {
    if(this.state.counter>0)
    this.setState({ counter: this.state.counter - 2 });
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this._handleOnIncrement}>Increment</button>
        <button onClick={this._handleOnDecrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;