import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"



const PrivateRoute = ({ component: Component, auth, ...rest }) => {


	return (

		<Route 


		{...rest}

		render = { props => {

			if (auth.isLoading) {
				return <h2>Loading..</h2>
			}

			else if (!auth.isAuthenticated) {
				return <Redirect to="/login" />

			} else {

				console.log('there is an issue here, it will redirect to login and then remove the token failing the authentication')

				console.log(Component)
				return <Component {...props} />

			}

		}}

		/>


		)

}


const mapStateToProps = (state) => ({

	auth: state.auth

})


export default connect(mapStateToProps)(PrivateRoute)



// const PrivateRoute = ({ component: Component, auth, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => {
//       if (auth.isLoading) {
//         return <h2>Loading...</h2>;
//       } else if (!auth.isAuthenticated) {
//         return <Redirect to="/login" />;
//       } else {
//         return <Component {...props} />;
//       }
//     }}
//   />
// );

// const mapStateToProps = state => ({
//   auth: state.auth
// });