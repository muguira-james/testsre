import React, { Component } from 'react';

import './App.css';
import EditAnAnswer from './EditAnAnswer';
import AnAnswer from './AnAnswer';


// let ProblemNumber = []

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ProblemNumber: [
        
      ],
    }
  }
  handleAdd = (e) => {
    let pn = this.state.ProblemNumber
    console.log("edit an entry->", e, this.state.ProblemNumber)
    
    pn.push(e)

    this.setState({ ProblemNumber: pn })
  }

  handleEdits = (e, indx) => {
    
  }

  render() {
    console.log("pn->", this.state.ProblemNumber)
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Input</th>
              <th>Dimension</th>
              <th>Student Response</th>
              <th>Dimension</th>
              <th></th>
              <th>Output</th>
              
            </tr>
          </thead>
          <tbody>
            {
              <EditAnAnswer
                
                addEntry={this.handleAdd}
                editEntry={this.handleEdits}
              />

            }
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Input</th>
              <th>Dimension</th>
              <th>Student Response</th>
              <th>Dimension</th>
              
              <th>Output</th>
              
            </tr>
          </thead>
          <tbody>
            {
              this.state.ProblemNumber.map((elem) => {
                return (
                  <AnAnswer anAnswer={elem}/>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;


/*
{
          "indx": 0,
          "inputTemp": 0,
          "inputDim": "Fahrenheit",
          "targetDim": "Fahrenheit",
          "studentInput": "0",
          "valid": ""
        }
        */