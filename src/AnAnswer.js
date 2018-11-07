import React from 'react';

export default class AnAnswer extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
      "inputTemp": props.anAnswer.inputTemp,
      "inputDim": props.anAnswer.inputDim,
      "targetDim": props.anAnswer.targetDim,
      "studentInput": props.anAnswer.studentInput,
      "valid": props.anAnswer.valid,
    }
  }
  

  render = () => {
 
    return (
          <tr>
            <td><label>{this.state.inputTemp}</label></td>

            <td><label>{this.state.inputDim}</label></td>

            <td><label >{this.state.studentInput}</label></td>

            <td><label >{this.state.targetDim}</label></td>

            
            <td><label  >{this.state.valid}</label></td>
            
          </tr>
    )
  }
}
/*
<td><button onClick={this.handleAdd}>more</button></td>
*/