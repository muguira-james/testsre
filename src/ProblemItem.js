import React from 'react'
import PropTypes from 'prop-types';

import TemperatureDimension from './TemperatureDimension'

class ProblemItem extends React.Component {
    constructor(props) {
        super(props)

        // it is ok if I don't have these props,
        // the user will input temp and dimension
        this.state = {
            correctIndicator: 'correct',
            inTemp: props.inputTempDim != null ? props.inputTempDim.inputTemp : "",
            inDim: props.inputTempDim != null ? props.inputTempDim.dimension : "",

            cTemp: props.convertedTempDim != null ? props.convertedTempDim.inputTemp : "",
            cDim: props.convertedTempDim != null ? props.convertedTempDim.dimension : ""
        }
    }

    static propTypes = {
        inputTempDim: PropTypes.shape({
            dimension: PropTypes.String,
            inputTemp: PropTypes.number
        }),
        convertedTempDim: PropTypes.shape({
            inputTemp: PropTypes.number,
            dimension: PropTypes.string
        })
    }

    calcFahrenheitToCelsius = (entry) => { return (entry - 32) * (5 / 9) }
    calcFahrenheitToKelvin = (entry) => { return (entry - 32) * (5 / 9) + 273.15 }
    calcFahrenheitToRankine = (entry) => { return (entry + 459.67) }

    calcCelsiusToFahrenheit = (entry) => { return (entry * (9 / 5) + 32) }
    calcCelsiusToKelvin = (entry) => { return (entry + 273.15) }
    calcCelsiusToRankine = (entry) => { return (entry * (9 / 5) + 491.57) }

    calcKelvinToFahrenheit = (entry) => { return (entry - 273.15) * (9 / 5) + 32 }
    calcKelvinToCelsius = (entry) => { return (entry - 273.15) }
    calcKelvinToRankine = (entry) => { return (entry) }

    calcRankineToFahrenheit = (entry) => { return (entry - 459.67) }
    calcRankineToCelsius = (entry) => { return (entry - 491.67) * (5 / 9) }
    calcRankineToKelvin = (entry) => { return (entry * (5 / 9)) }

    editInputs = (inTemp, inDim, cTemp, cDim) => {
        if (isNaN(parseFloat(inTemp))) {
            this.setState({ correctIndicator: 'invalid' })
            return
        }
        if (isNaN(parseFloat(cTemp))) {
            this.setState({ correctIndicator: 'invalid' })
            return
        }

        let correctValue = null
        if ((inDim === "Fahrenheit") && (cDim === "Celsius")) {
            correctValue = this.calcFahrenheitToCelsius(inTemp)

        } else if ((inDim === "Fahrenheit") && (cDim === "Kelvin")) {
            correctValue = this.calcFahrenheitToKelvin(inTemp)

        } else if ((inDim === "Fahrenheit") && (cDim === "Rankine")) {
            correctValue = this.calcFahrenheitToRankine(inTemp)

        } else if ((inDim === "Celsius") && (cDim === "Fahrenheit")) {
            correctValue = this.calcCelsiusToFahrenheit(inTemp)

        } else if ((inDim === "Celsius") && (cDim === "Kelvin")) {
            correctValue = this.calcCelsiusToKelvin(inTemp)

        } else if ((inDim === "Celsius") && (cDim === "Rankine")) {
            correctValue = this.calcCelsiusToRankine(inTemp)

        } else if ((inDim === "Kelvin") && (cDim === "Fahrenheit")) {
            correctValue = this.calcKelvinToFahrenheit(inTemp)

        } else if ((inDim === "Kelvin") && (cDim === "Celsius")) {
            correctValue = this.calcKelvinToCelsius(inTemp)

        } else if ((inDim === "Kelvin") && (cDim === "Rankine")) {
            correctValue = this.calcKelvinToRankine(inTemp)

        } else if ((inDim === "Rankine") && (cDim === "Fahrenheit")) {
            correctValue = this.calcRankineToFahrenheit(inTemp)

        } else if ((inDim === "Rankine") && (cDim === "Celsius")) {
            correctValue = this.calcRankineToCelsius(inTemp)

        } else if ((inDim === "Rankine") && (cDim === "Kelvin")) {
            correctValue = this.calcRankineToKelvin(inTemp)
        }

        let correctRound = Math.round(correctValue)

        if (isNaN(correctRound)) {
            this.setState({ correctIndicator: 'invalid' })
            return
        }
        let cTempRound = Math.round(cTemp)
        if (isNaN(parseFloat(cTempRound))) {
            this.setState({ correctIndicator: 'invalid' })
            return
        }
        if (cTempRound !== correctRound) {
            this.setState({ correctIndicator: 'incorrect' })
        } else {
            this.setState({ correctIndicator: 'correct' })
        }
        console.log("exiting editor")
    }
    handleInputNumChange = (n) => {
        this.setState({ inTemp: n })
        this.editInputs(n, this.state.inDim, this.state.cTemp, this.state.cDim)
    }
    handleInputDimChange = (d) => {
        this.setState({ inDim: d })
        this.editInputs(this.state.inTemp, d, this.state.cTemp, this.state.cDim)
    }
    handleConvertNumChange = (n) => {
        this.setState({ cTemp: n })
        this.editInputs(this.state.inTemp, this.state.inDim, n, this.state.cDim)
    }
    handleConvertDimChange = (d) => {
        this.setState({ cDim: d })
        this.editInputs(this.state.inTemp, this.state.inDim, this.state.cTemp, d)
    }
    render = () => {
        return (
            <div className="flex-grid">

                <TemperatureDimension
                    inputTempDim={this.props.inputTempDim}
                    changeNumEditor={this.handleInputNumChange}
                    changeDimEditor={this.handleInputDimChange}
                />

                <TemperatureDimension
                    inputTempDim={this.props.convertedTempDim}
                    changeNumEditor={this.handleConvertNumChange}
                    changeDimEditor={this.handleConvertDimChange}
                />
                <label>{this.state.correctIndicator}</label>
            </div>
        )

    }
}


export default ProblemItem