import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads, deleteLead, getTests } from '../leadmanager/store/actions/leads'


export class Leads extends Component {

	static propTypes = {
		leads: PropTypes.array.isRequired,
		getLeads: PropTypes.func.isRequired,
		deleteLead: PropTypes.func.isRequired,
	};


	componentDidMount(){
		//this getlead function populates the state with the latest leads so that they can be extracted by mapStateToProps
		this.props.getLeads();

		// // testing if I can gettests
		// this.props.getTests()


	}

	render() {


		return (


			<Fragment>

				<h1>Leads List</h1>

				<table className="table table-striped">


				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Message</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{ this.props.leads.map(lead => (
						<tr key = {lead.id}>

							<td>{lead.id}</td>
							<td>{lead.name}</td>
							<td>{lead.email}</td>
							<td>{lead.message}</td>
							<td><button onClick={this.props.deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm">Delete</button></td>

						</tr>
						)) }
				</tbody>

				</table>


			</Fragment>

			)
	}
}

//the below maps the state that is inside reducers (initial state) into the props
const mapStateToProps = state => ({
	leads: state.leads.leads,

})

const mapDispatchToProps = dispatch => {
  return {
    getLeads: () => dispatch(getLeads()),
    deleteLead: () => dispatch(deleteLead()),
    getTests: () => dispatch(getTests())

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Leads);

// older version based on traversy media
// export default connect(mapStateToProps, { getLeads, deleteLead, getTests })(Leads);