// PENDING: this.Calculate
import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result).toString() || "")
      })
    } catch (e) {
      this.setState({
        result: 'error'
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  onClick = button => {
    switch(button) {
      case '=':
        this.calculate();
        break;
      case 'C':
        this.reset();
        break;
      case 'CE':
        this.backspace();
        break;
      default:
        this.setState({
          result: this.state.result + button
        });
    }

  }

  render() {
    return(
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
