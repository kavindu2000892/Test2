import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <>
        <p>Count New Here: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button><br/>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default Counter;
