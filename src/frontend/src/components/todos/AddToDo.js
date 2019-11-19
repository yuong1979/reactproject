import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'


class AddTodo extends Component {

	state = {
		title: ''
	}


	onchange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.addTodo(this.state.title)

		this.setState({ title : '' })

	}


	render() {


		// console.log(this.state.title)

		return (

			<form style={{display: 'flex'}} onSubmit={this.onSubmit}>

			<input type="text" onChange={this.onchange} name="title" placeholder="Put in your to do" style={{flex: '10', paddding: '5px'}}/>

			<input type="submit" name="" value="Submit" className="btn" style={{flex: '1'}}/>

			</form>


		)
	}
}

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired,
}

export default AddTodo;
