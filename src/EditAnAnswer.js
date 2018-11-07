import React from 'react';


const errorStyle = {
  color: '#ff0000'
}
const correctStyle = {
  color: '#000000'
}

export default class EditAnAnswer extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     "inputTemp": props.anAnswer.inputTemp,
  //     "inputDim": props.anAnswer.inputDim,
  //     "targetDim": props.anAnswer.targetDim,
  //     "studentInput": props.anAnswer.studentInput,
  //     "valid": props.anAnswer.valid,
  //     "validStyle": errorStyle
  //   }
  // }
  constructor(props) {
    super(props)
    this.state = {
      
      "inputTemp": null,
      "inputDim": 'Fahrenheit',
      "targetDim": 'Fahrenheit',
      "studentInput": null,
      "valid": null,
      "currentIndex": props.currentIndex
    }
  }

  handleInputTemperature = (e) => {
    console.log(e.target.value)
    this.setState({ inputTemp: e.target.value })
  }

  handleStudentInput = (e) => {
    console.log("student->", e.target.value)
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

  calcFahrenheitToCelsius = (entry) => { return (entry - 32) * (5/9) }
  calcFahrenheitToKelvin = (entry) => { return (entry - 32) * (5/9) + 273.15 }
  calcFahrenheitToRankine = (entry) => { return (entry + 459.67) }

  calcCelsiusToFahrenheit = (entry) => { return (entry * (9/5) + 32) }
  calcCelsiusToKelvin = (entry) => { return (entry + 273.15) }
  calcCelsiusToRankine = (entry) => { return (entry * (9/5) + 491.57) }

  calcKelvinToFahrenheit = (entry) => { return (entry - 273.15) * (9/5) + 32}
  calcKelvinToCelsius = (entry) => { return (entry - 273.15) }
  calcKelvinToRankine = (entry) => { return (entry) }

  calcRankineToFahrenheit = (entry) => { return (entry - 459.67) }
  calcRankineToCelsius = (entry) => { return (entry - 491.67) * (5/9) } 
  calcRankineToKelvin = (entry) => { return (entry * (5/9)) }

  editInputs = () => {
    console.log("in editor")
    let correctValue = null

    if ( isNaN(parseFloat(this.state.studentInput)) ) {
      // not a num - error, turn field red
      console.log("student not a num->", this.state.studentInput)
      document.getElementById('studentInput').style.color = '#ff0000'
      this.setState({valid: 'invalid'})

      return
    } else {
      document.getElementById('studentInput').style.color = '#000000'
      this.setState({valid: 'correct'})
    }

    let studentRounded = Math.round(this.state.studentInput)
    if (isNaN(studentRounded)) {
      document.getElementById('validIndicator').style.color = '#ff0000'
      document.getElementById('studentInput').style.color = '#ff0000'
      this.setState( { valid: 'invalid' } )
      return
    }

    if ((this.state.inputDim === "Fahrenheit") && (this.state.targetDim === "Celsius")) {
      correctValue = this.calcFahrenheitToCelsius(this.state.inputTemp)
    } else if ((this.state.inputDim === "Fahrenheit") && (this.state.targetDim === "Kelvin")) {
      correctValue = this.calcFahrenheitToKelvin(this.state.inputTemp)
    } else if ((this.state.inputDim === "Fahrenheit") && (this.state.targetDim === "Rankine")) {
      correctValue = this.calcFahrenheitToRankine(this.state.inputTemp)
    } else if ((this.state.inputDim === "Celsius") && (this.state.targetDim === "Fahrenheit")) {
      correctValue = this.calcCelsiusToFahrenheit(this.state.inputTemp)
    } else if ((this.state.inputDim === "Celsius") && (this.state.targetDim === "Kelvin")) {
      correctValue = this.calcCelsiusToKelvin(this.state.inputTemp)
    } else if ((this.state.inputDim === "Celsius") && (this.state.targetDim === "Rankine")) {
      correctValue = this.calcCelsiusToRankine(this.state.inputTemp)
    } else if ((this.state.inputDim === "Kelvin") && (this.state.targetDim === "Fahrenheit")) {
      correctValue = this.calcKelvinToFahrenheit(this.state.inputTemp)
    } else if ((this.state.inputDim === "Kelvin") && (this.state.targetDim === "Celsius")) {
      correctValue = this.calcKelvinToCelsius(this.state.inputTemp)
    } else if ((this.state.inputDim === "Kelvin") && (this.state.targetDim === "Rankine")) {
      correctValue = this.calcKelvinToRankine(this.state.inputTemp)
    } else if ((this.state.inputDim === "Rankine") && (this.state.targetDim === "Fahrenheit")) {
      correctValue = this.calcRankineToFahrenheit(this.state.inputTemp)
    } else if ((this.state.inputDim === "Rankine") && (this.state.targetDim === "Celsius")) {
      correctValue = this.calcRankineToCelsius(this.state.inputTemp)
    } else if ((this.state.inputDim === "Rankine") && (this.state.targetDim === "Kelvin")) {
      correctValue = this.calcRankineToKelvin(this.state.inputTemp)
    } else {
      console.log("invalid dim: ", this.state.inputDim, this.state.targetDim)
    }

    let correctRound = Math.round(correctValue)
    console.log("correct value = ", correctValue, correctRound, studentRounded)

    if ( isNaN(correctRound)) {
      // input temp is not a number
      document.getElementById('validIndicator').style.color = '#ff0000'
      document.getElementById('problemInput').style.color = '#ff0000'
      this.setState( { valid: 'invalid' } )
      
      return

    } else {
      // input temp is a number!
      document.getElementById('problemInput').style.color = '#000000'
      this.setState( {valid: 'correct' } )
    }

    if (studentRounded !== correctRound) {
      console.log("error comp1->", studentRounded, correctRound)
      document.getElementById('validIndicator').style.color = '#ff0000'
      this.setState( { valid: 'incorrect' } )
      
    } else {
      document.getElementById('validIndicator').style.color = '#000000'
      this.setState( { valid: 'correct' } )
    }
    
  }
  handleEdits = () => {
    console.log("tab key hit")
    
    this.editInputs()
  }

  clearEditor = () => {
    document.getElementById('problemInput').value = ""
    document.getElementById('problemDim').value = "Fahrenheit"
    document.getElementById('studentInput').value = ""
    document.getElementById('targetDim').value = "Fahrenheit"

    this.setState( { 
      inputTemp: null, 
      inputDim: 'Fahrenheit', 
      targetDim: 'Fahrenheit', 
      studentInput: null, 
      valid: null, 
      currentIndex: null
    })

  }
  handleAdd = () => {
    let elm = {}
    
    elm.inputTemp = this.state.inputTemp
    elm.inputDim = this.state.inputDim
    elm.targetDim = this.state.targetDim
    elm.studentInput = this.state.studentInput
    elm.valid = this.state.valid
    console.log("elm->", this.state.valid, elm)
    this.props.addEntry(elm, this.state.currentIndex)
    this.clearEditor()
  }
  render = () => {
    let styleIndicator = null

    if (this.state.valid === 'correct') {
      styleIndicator = correctStyle
    } else if ((this.state.valid === 'incorrect') || (this.state.valid === 'invalid')) {
      styleIndicator = errorStyle
    }
    console.log("style->", styleIndicator)
    return (
          <tr>
            <td><input id="problemInput" type="text" size='6'  pattern="\d+.[\d,]" maxLength="6" onChange={this.handleInputTemperature}></input></td>

            <td><select id="problemDim" onChange={this.handleInputDimension}>
              <option>Fahrenheit</option>
              <option>Celsius</option>
              <option>Rankine</option>
              <option>Kelvin</option>
            </select></td>

            <td><input id="studentInput" type="text" color='#00ff00' onChange={this.handleStudentInput}></input></td>

            <td><select id="targetDim" onChange={this.handleOutputDimension}>
              <option>Fahrenheit</option>
              <option>Celsius</option>
              <option>Rankine</option>
              <option>Kelvin</option>
            </select></td>

            <button onClick={this.handleEdits} >check</button>
            <td><label id="validIndicator" style={{ styleIndicator }}  >{this.state.valid}</label></td>
            <button onClick={this.handleAdd}>more</button>
          </tr>
    )
  }
}
/*
<td><button onClick={this.handleAdd}>more</button></td>
*/