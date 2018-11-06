import React, { Component } from 'react';

import './App.css';
import InputTemperature from './InputTemperature';

let ProblemNumber = [
  {
    "inputTemp": 0,
    "inputDim": "Fahrenheit",
    "targetDim": "Fahrenheit",
    "studentInput": "0"
  }
]

class App extends Component {

  handleMoreEntries = (e) => {
    console.log("hit the key")
    let pn = ProblemNumber
    pn.push(e)
    this.setState( {ProblemNumber: pn} )
  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <th>Input</th>
            <th>Dimensions</th>
            <th>Student Response</th>
            <th>Dimensions</th>
            <th>Ouptut</th>
          </tr>
          {
            ProblemNumber.map(j => {
              return (<InputTemperature problems={ProblemNumber[j]} moreEntries={this.handleMoreEntries} />)
            })
          }
          
    
        </table>

      </div>
    );
  }
}

export default App;
