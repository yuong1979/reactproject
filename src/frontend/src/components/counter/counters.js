import React, {Component, Fragment} from 'react';
import Counter from './counter'
// import HeaderCounter from '../layout/navbar/headercounter'
import HeaderCounter from './layout/navbar/headercounter'


class Counters extends Component {

	state = {
		counters : [

			{id:1, value:0},
			{id:2, value:5},
			{id:3, value:0},
			{id:4, value:0},

		]
	}



//targetting only one item
handleIncrement = (id) => {

	const newcounters = this.state.counters.map(counter =>
			{
	 			if (counter.id === id) {
	 				counter.value = counter.value + 1
	 			}
	 			return counter
			}
		)


	this.setState({
		counters: newcounters
	})

}

handleDelete = (id) => {

	this.setState({
		counters: this.state.counters.filter(counter =>
			{
				if (counter.id != id) {
					return counter
				}
			}
		)
	})
}



handleReset = () => {
	const newcounters = this.state.counters.map(counter => 
			{
				counter.value = 0
				return counter
			}
		)
	this.setState({counters : newcounters})
}


totalCounter = () => {

	const count = this.state.counters.filter(count => 
		{return (count.value > 0)}
		)

	const countlength = count.length

	return countlength
}


	render() {


		console.log(this.countIncrement)


		return (

				<div>

				<HeaderCounter totalCounter = {this.totalCounter()} />

				<button onClick={this.handleReset} className="btn btn-primary btn-sm">Reset</button>

				{this.state.counters.map(counter =>

				// <p key={counter.id}>{counter.value}</p>

				<Counter 
					key={counter.id} 
					counter={counter} 
					handleIncrement={this.handleIncrement} 
					handleDelete={this.handleDelete}
				/>

					)}

				</div>
		)
	}
}

export default Counters;



