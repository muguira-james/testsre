import React from 'react'
import PropTypes from 'prop-types';

import './TemperatureDimension.css'

class TemperatureDimension extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputTemp: props.inputTempDim != null ? props.inputTempDim.inputTemp : "",
            dimension: props.inputTempDim != null ? props.inputTempDim.dimension : "",
            textColor: { color: '#000000' }
        }
        // console.log("tempDim->", props)
    }
    static propTypes = {
        inputTempDim: PropTypes.shape({
            inputTemp: PropTypes.number,
            dimension: PropTypes.string
        }),
        changeNumEditor: PropTypes.func,
        changeDimEditor: PropTypes.func
    }
    
    handleInputChange = (e) => {
        let n = e.target.value
        if (isNaN(parseFloat(n))) {
            this.setState({ textColor: { color: '#FF0000' } })
        } else {
            this.setState({ textColor: { color: '#000000' } })
        }
        this.setState({ inputTemp: n })

        // if no function prop was passed test that and skip the call
        if (this.props.changeNumEditor !== undefined) 
            this.props.changeNumEditor(n)  
    }
    handleSelectChange = (e) => {
        let d = e.target.value
        console.log(this, d)
        this.setState({ dimension: d })

        // again, if no function prop was passed skip the call
        if (this.props.changeDimEditor !== undefined) 
            this.props.changeDimEditor(d)
    }
    render = () => {

        return (
            <div >
                <input
                    className="col"
                    type="text"
                    style={this.state.textColor}
                    onChange={this.handleInputChange}
                    placeholder={this.state.inputTemp}>
                </input>

                <select 
                    value={this.state.dimension} 
                    className="col" 
                    onChange={this.handleSelectChange}
                >
                    <option>Fahrenheit</option>
                    <option>Celsius</option>
                    <option>Kelvin</option>
                    <option>Rankine</option>
                </select>

            </div>
        )
    }
}




export default TemperatureDimension