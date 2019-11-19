import React, {Component, Fragment} from 'react';

// using functional components
class Counter extends Component {

state = {
	// value: this.props.counter.value,

	tags: [
			// "tag 1",
			// "tag 2",
			// "tag 3",
	]

}



getBadgeClasses = () => {

	if (this.state.value > 0){
		return "badge badge-primary m-2"
	}	else {
		return "badge badge-warning m-2"
	}

}





renderTags = () => {
	if (this.state.tags.length > 0) {
		return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
	}
}


	render(){


		const testStyle = {
			backgroundColor : "lightgrey"
		}


		return (

			<div style={testStyle}>
			
			<b>{this.props.counter.id}</b>

			{this.renderTags()}

				<span className={this.getBadgeClasses()}> {this.props.counter.value}</span>
				<button onClick={this.props.handleIncrement.bind(this, this.props.counter.id)} className="btn btn-secondary btn-sm">Increment </button>

				<button onClick={this.props.handleDelete.bind(this, this.props.counter.id)} className="btn btn-danger btn-sm">Delete </button>

			</div>

		)

	}

}






export default Counter;




