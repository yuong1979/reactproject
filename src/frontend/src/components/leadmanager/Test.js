import React, { Component, Fragment } from 'react'
import AlertTemplate from 'react-alert-template-basic'
import { connect } from 'react-redux'
// import * as actions from '../store/actions/auth'
import * as actions from './store/actions/test'
import axios from 'axios'
import {getTests, getLeads} from './store/actions/leads'
import { Link, Redirect } from 'react-router-dom'


export class Test extends Component {


	state = {
	  test: 'original',
	  input1: '',
	  input2: '',
	  quantity: '',
	  vehicleB: '',
	  vehicleC: '',	  
	  vehicle: '',
	  gender: '',
	  employed: '',
	  male: '',
	  female: '',
	  others: '',

	}


	componentDidMount() {

		this.props.Initialize()
		// // replacing leads with a bunch of array
		// this.props.getTests()

	}



	componentDidUpdate(prevProps) {

		const { test } = this.props;
		// console.log(this.props.test.testleads)
		// console.log(prevProps.test.testleads)

		if (test !== prevProps.test) {
			console.log("The testleads update has been detected")
		}
		// console.log(prevProps)
		// console.log('component has updated')
		// this.props.test2()
	}





	test1 = (id, id2) => {

		console.log(id)
		console.log(id2)
	}

	test2 = (event, id) => {
		event.preventDefault()
		//update props with a new number
		this.props.gettest2("update to 34")
	}



	onChange1 = e => (
		this.setState({
		input1 : e.target.value
	})
	);

	onSubmit1 = e => {
		e.preventDefault();
		this.props.Update(this.state.input1)
		this.setState({
			input1:"",
		})
	}

	onChange2 = e => (

		this.setState({
		input2 : e.target.value
	})
	);



	onChangeQ = (e) => {
	this.setState({
		quantity : e.target.value
	})
	//redirect user
	};

	onSubmitQ = (e) => {
	e.preventDefault();
	this.props.LoadQuantity(this.state.quantity)
		this.setState({
			quantity:"",
		})
	};


	onClickB = (e) => {
	this.setState({ vehicleB : e.target.checked })
	};

	onClickC = (e) => {
	this.setState({ vehicleC : e.target.checked })
	};

	onClickE = (e) => {
	this.setState({ employed : e.target.checked })
	};


	onClickM = (e) => {
	this.setState({ male : e.target.checked })
	this.setState({ female : false })
	this.setState({ others : false })
	this.props.LoadGender("Male")
	};

	onClickF = (e) => {
	this.setState({ male : false })
	this.setState({ female : e.target.checked })
	this.setState({ others : false })
	this.props.LoadGender("Female")
	};

	onClickO = (e) => {
	this.setState({ male : false })
	this.setState({ female : false })
	this.setState({ others : e.target.checked })
	this.props.LoadGender("Others")
	};





	onSubmitF = (e, input1, input2) => {
		e.preventDefault();

		let vehicledetails = ""


		if ((this.state.vehicleB === true) && (this.state.vehicleC === true)){
			vehicledetails = "Bike and Car"						
		} else if ((this.state.vehicleB === true) && (this.state.vehicleC === false)) {
			vehicledetails = "Bike Only"
		} else if ((this.state.vehicleB === false) && (this.state.vehicleC === true)) {
			vehicledetails = "Car Only"
		} else {
			vehicledetails = "No bike and no car"
		}

		this.props.LoadFinance(vehicledetails, this.state.employed)


		this.setState({
			vehicle: "",
			employed: "",
		})
	};





	test3 = () => {
		console.log('test3')
	}

	test4 = (event) => {
		console.log(event)
		console.log(event.target)
		console.log(event.target.value)
		console.log(event.target.name)
		console.log(event.target.id)
	}


	// change the button based on the this.state

	// change the font color based on this.this.props


		changemployment = () => {
			if (this.props.test.employed === true) {
				return "yes"
			} else if (this.props.test.employed === false) {
				return "no"
			} else {
				return ""
			}
		}

		buttonappear = () => {

			if (this.props.test.testgender === true) {
				return "yes"
			} else {
				return "no"
			}

		}


	render() {

		console.log(this.props)

		// console.log(this.props.test.testleads)

			{/* launch error in red when the value is unacceptable */}
			
			{/* launch alert when a certain type is selected */}

			{/* show a new button if a certain type is selected */}

		const { input1, input2, quantity, employed, vehicleB, vehicleC } = this.state



		// const testStyle = {
		// 	backgroundColor : "lightgrey"
		// }

		//redirecting user 
		if (this.state.quantity > 5) {
		return <Redirect to="/" />
		}


		//inserting variables into the html
		// let errormessage = null;
		// if (this.props.error) {
		// 	errormessage = (
		// 		<p>{this.props.error.message}</p>
		// 		)
		// }


		let male = null;
		if (this.state.male === true) {
			male = (
				<p>Male</p>
				)
		}

		let female = null;
		if (this.state.female === true) {
			female = (
				<p>Female</p>
				)
		}

		let others = null;
		if (this.state.others === true) {
			others = (
				<p>Others</p>
				)
		}



		let buttonapp = null;
		if (this.state.others === true) {
			buttonapp = (
				<div><button>Show button gender is others</button></div>
				)
		}


		const testStyle = {
			display : "inline-flex",
			backgroundColor : "lightgrey",
			// padding: "15",
			// margin: "5"
		}

		const box = {
			color : "red",
			padding: "2%",
			margin: "2%"
		}

		return (
			<Fragment>





			
			
			

			<p>{this.props.test.testleads}</p>

			<form className="form-group" onSubmit={this.onSubmit1}>
				<input className="form-control" onChange={this.onChange1} type="text" name="input1" value={input1}/>
				<button className="btn btn-primary">Update Props</button>
			</form>


			<p>{this.state.input2}</p>

			<form className="form-group">
				<input className="form-control" onChange={() => this.onChange2(event)} type="text" name="input2" value={input2}/>
				<button className="btn btn-primary">Update State</button>
			</form>

			<br/>

			<p>Quantity: {this.props.test.quantity}</p>

			<form className="form-group" onSubmit={this.onSubmitQ}>
			  Quantity (between 1 and 5):
			  <input className="form-control" onChange={() => this.onChangeQ(event, "test number")} type="number" name="quantity" min="1" max="5" value={quantity} />
			  <br/>
			  <button className="btn btn-primary">Submit quantity</button>
			</form>

			<br/>

			<p>vehicle: {this.props.test.vehicle}</p>

			<p>Employment: {this.changemployment()}</p>

			<form className="form-group" onSubmit={this.onSubmitF}>
			  <input type="checkbox" onClick={() => this.onClickB(event)} name="vehicle1" value={vehicleB} /> I have a bike
			  <br/>
			  <input type="checkbox" onClick={() => this.onClickC(event)} name="vehicle2" value={vehicleC} /> I have a car
			  <br/><br/>
			  <input type="checkbox" onClick={() => this.onClickE(event)} name="employed"  value={employed} /> Employed
			  <br/><br/>
			  <button className="btn btn-primary">Submit finance</button>
			</form>

			<br/>

			<div style={testStyle}>Gender: 
			<div style={box}>{male}</div> 
			<div style={box}>{female}</div>
			<div style={box}>{others}</div>
			</div>

			{buttonapp}

			<br/>

			<form className="form-group">
			  <input type="radio" onClick={() => this.onClickM(event)} name="gender" value="male" /> Male<br/>
			  <input type="radio" onClick={() => this.onClickF(event)} name="gender" value="female" /> Female<br/>
			  <input type="radio" onClick={() => this.onClickO(event)} name="gender" value="other" /> Other
			</form>



			<br/>
			<button name='3' value='3' id='3' onClick={() => this.test3()}>test3</button>
			<br/>
			<button name='4' value='4' id='4' onClick={this.test3}>test4</button>

		{/* 
			<button name='1' value='1' id='1' onClick={this.test1.bind(this, "test1", "test2")}>test1</button>
			<button name='2' value='2' id='2' onClick={event => this.test2(event, "test2")}>test2</button>
			<button name='3' value='3' id='3' onClick={() => this.test3()}>test3</button>			
			<button name='4' value='4' id='4' onClick={(event) => this.test4(event)}>test4</button>
		*/}




			</Fragment>
			)
	}
}



const mapStateToProps = (state) => ({

	test: state.testleads,
	error: state.errors,
	message: state.messages

})


const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignup: () => dispatch(actions.authCheckState())
    Initialize: () => dispatch(actions.loadInitial()),
    Update: (id) => dispatch(actions.loadUpdate(id)),
    LoadQuantity: (no) => dispatch(actions.LoadQuantity(no)),
    LoadFinance: (input1, input2) => dispatch(actions.LoadFinance(input1, input2)),
    LoadGender: (input) => dispatch(actions.LoadGender(input)),
    getTests: () => dispatch(getTests()),

  }
}




// getTests

export default connect(mapStateToProps, mapDispatchToProps)(Test);

// const mapStateToProps = (state) => ({

// 	error: state.errors,
// 	message: state.messages

// })

// export default connect(mapStateToProps)(withAlert(Alerts));


// <form onSubmit={this.handleFormSubmit.bind(this, event, this.props.requestType, this.props.articleID)}>


// Do you think there will be millions of coins in the future or only a few




			// <form name="tester2" onSubmit={this.onSubmit2}>
			// 	<input onChange={this.onChange2} type="text" name="tester2" />
			// 	<button name='1' value='1' id='1' onClick={this.test1.bind(this, "test1", "test2")}>Update Props 2</button>
			// </form>



// today to dos

// send excel to shaun
// buy the shoes for mom and dad
// get the test react working for signing up
// get the nice graphics implemented on your test
// check out google analytics
// try on the videos recording
// try google search console and make sure everything is optimized
// if you have time try to do the https for nusoil.com
// inform fuyek to start working on your finance
// scedule a time to go to singapore sme and ask them how to reach out to people who want to develop apps for their business
// collect laptop for ma
// send email to aws asking them how to launch react on elastic beanstalk
// clean up my desktop
// research the buying of harborlights



