import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';


class TodoItems extends Component {


getStyle = () => {

	if (this.props.todos.completed === false)

	{

	return {textDecoration: 'line-through'}
	
	} else {

	return {textDecoration: 'none'}
	
	}

}





	render() {


	const { title, id } = this.props.todos

		// console.log(this.props)

		return (
			<div style={this.getStyle()}>
			<p>
				<input type="checkbox"  onChange={this.props.markComplete.bind(this, id)} />{' '}

				{ title }

				<button onClick={this.props.delTodo.bind(this, id)} style={btnstyle}>X</button>
			</p>
			</div>
		)
	}
}


const btnstyle = {

	// backgroundColor: 'red',
	background: 'red',
	color: 'white',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right',

}


TodoItems.propTypes = {
	todos: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
}

const testStyle = {
	backgroundColor: 'red'
}


export default TodoItems;


