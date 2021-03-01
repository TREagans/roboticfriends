import React, { Component } from 'react';

class ErrorBoundary extends Component {

	state = {
		hasError: false
	};

  // new lifecycle method for error-handling
  // similar to try/catch block in JS
  componentDidCatch(error, info) {

    // if error was caught, set state to true
    this.setState({ hasError: true });
  }

	render() {
    // check for error
    if (this.state.hasError) {

      // return a default state
      return <h1>Dammit. That Sucks</h1>;
    }

    return this.props.children;
	}
}

export default ErrorBoundary;
