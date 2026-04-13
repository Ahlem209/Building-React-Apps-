import React, { Component } from "react";

// Étape 1 : définir le type du state
interface CounterState {
  count: number;
}

// Étape 2 : typer la classe
class Counter extends Component<{}, CounterState> {
  
  // Étape 3 : initialiser le state
  state: CounterState = {
    count: 0,
  };

  // Étape 4 : méthode increment
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Étape 5 : render
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Export correct
export default Counter;