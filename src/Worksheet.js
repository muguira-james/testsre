import React from 'react'


import './Worksheet.css'

import ProblemItem from './ProblemItem';

let problemItems = [
	{
		Given: {
			inputTemp: 212,
			dimension: "Fahrenheit"
		},
		Convert: {
			inputTemp: 100,
			dimension: "Celsius"
		}
	},
	{
		Given: {
			inputTemp: 209,
			dimension: "Fahrenheit"
		},
		Convert: {
			inputTemp: 100,
			dimension: "Celsius"
		}
	}

]

// the following is a default or blank object with fields filled in
//
// it is used: when user clicks "addItem" button, add this item to the list
// then the user can change it.
const item = {
	Given: {
		inputTemp: 212,
		dimension: "Fahrenheit"
	},
	Convert: {
		inputTemp: 100,
		dimension: "Celsius"
	}
}

class Worksheet extends React.Component {

	handleAddItem = () => {
		
		let pi = problemItems
		pi.push(item)
		this.setState({problemItems: pi})

	}
	render = () => {
		return (
			<div>
				<div>
					<header>
						<p>Temperature and Heat Conversion Worksheet</p>
					</header>
					<nav>
						<button className="nav-add-item-button" onClick={this.handleAddItem}>add item</button>
					</nav>
				</div>
				{
					problemItems.map((item, index) => {
						return (
							<ProblemItem 
								key={index}
								inputTempDim={item.Given}
								convertedTempDim={item.Convert}
							/>
						)
					})
				}


			</div>

		)
	}
}

export default Worksheet