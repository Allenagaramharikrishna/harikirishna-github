import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  incrementNumber = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementNumber = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Count :{this.state.count}</h1>
        <button className="btn btn-info ms-3" onClick={this.incrementNumber}>
          Increment
        </button>
        <button className="btn btn-info ms-3" onClick={this.decrementNumber}>
          Decrement
        </button>
      </div>
    );
  }
}
