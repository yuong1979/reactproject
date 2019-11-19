import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


export class Alerts extends Component {

	static propTypes = {
		error: PropTypes.object.isRequired,
	    message: PropTypes.object.isRequired  
	}


	// componentDidMount(){
	// 	this.props.alert.show("it works")
	// }


	//componentDidUpdate - when this function receives a new prop componentdidupdate will run
	componentDidUpdate(prevProps){
		const { error, alert, message } = this.props;

		//the componentdidupdate runs if any if the props inside is different from the previous prop - such as prop error or prop message

		if (error !== prevProps.error) {

			// console.log(error)

			//the join() function is to turn the array into a string
			if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`)

			if (error.msg.email) alert.error(`Email: ${error.msg.name.join()}`)

			if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`)

			if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.email.join())

			if (error.msg.username) alert.error(error.msg.username.join())

		}

		if (message !== prevProps.message) {

			if(message.deleteLead) alert.success(message.deleteLead)

			if(message.addLead) alert.success(message.addLead)

			if(message.passwordNotMatch) alert.error(message.passwordNotMatch)


			// alert.error(message.status)

		}

	}


	render() {
		return <Fragment />;
			}

}



const mapStateToProps = (state) => ({

	error: state.errors,
	message: state.messages

})

export default connect(mapStateToProps)(withAlert(Alerts));


