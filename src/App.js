import React, { Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
import { EMPLOYEES } from './shared/employees';
import { BrowserRouter } from 'react-router-dom';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        employees: EMPLOYEES
      };
    }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
