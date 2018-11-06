import React, { Component } from 'react';



export default class InputTemperature extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      "inputTemp": this.props.inputTemp,
      "inputDim": this.props.inputDim,
      "targetDim": this.props.targetDim,
      "studentInput": this.props.studentInput
    }
  }

  handleInputTemperature = (e) => {
    console.log(e.target.value)
    this.setState({ inputTemp: e.target.value })
  }

  handleStudentInput = (e) => {
    this.setState({studentInput: e.target.value})
  }

  handleInputDimension = (e) => {
    console.log("dim->", e.target.value)
    this.setState({ inputDim: e.target.value })
  }

  handleOutputDimension = (e) => {
    console.log("dim->", e.target.value)
    this.setState({ targetDim: e.target.value })
  }

  handleTabKey = () => {
    console.log("key hit")
    let elm = {}
    elm.inputTemp = this.state.inputTemp
    elm.inputDim = this.state.inputDim
    elm.targetDim = this.state.targetDim
    elm.studentInput = this.state.studentInput
    
    this.props.moreEntries(elm)
  }

  render = () => {
    
    return (
          <tr>
            <td><input type="text" pattern="\d+.[\d,]" maxLength="6" onChange={this.handleInputTemperature}></input></td>
            <td><select onChange={this.handleInputDimension}>
              <option>Fahrenheit</option>
              <option>Celsius</option>
              <option>Rankine</option>
              <option>Kelvin</option>
            </select></td>

            <td><input type="text" maxLength="8"></input></td>
            <td><select 
                onChange={this.handleOutputDimension}
                onKeyDown={this.handleTabKey}>
              <option>Fahrenheit</option>
              <option>Celsius</option>
              <option>Rankine</option>
              <option>Kelvin</option>
            </select></td>
            <td><label id="row_output" ></label></td>
          </tr>
    )
  }
}