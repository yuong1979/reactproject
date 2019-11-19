
import * as actionTypes from './actionTypes'
import axios from 'axios'


//these are events
// methods that will take place on recieving actions
export const authStart = () => {
	// console.log('actions auth start')
	return {
		type: actionTypes.AUTH_START
	}
}


export const authSuccess = (token) => {
	// console.log('actions auth success', token)
	return {
		type: actionTypes.AUTH_SUCCESS,
		token: token
	}
}

export const authFail = (error) => {
	// console.log('actions auth fail', error)
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	}
}

export const logout = () => {
	// localStorage.removeItem('user')
	localStorage.removeItem('expirationDate')
	// console.log('log out')
	return {
		type: actionTypes.AUTH_LOGOUT
	}

}











const checkAuthTimeout = (expirationTime) => {
	return (dispatch) => {
	// console.log('actions checkAuthTimeout - expire', expirationTime)

		setTimeout(() => {

			dispatch(logout())

		}, expirationTime * 1000)
	}
}




export const authLogin = (username, password) => {

	return (dispatch) => {
	// console.log('actions authLogin', username, password)
		//try running without dispatch because it looks like dispatch just runs the function

		dispatch(authStart())
		axios.post('http://localhost:8000/rest-auth/login/', {
			username: username, 
			password: password
		})
		.then(res => {
			const token = res.data.key
			//timeout in 60 minutes
			const expirationDate = new Date(new Date().getTime() + 3600 * 1000)

			// //timeout in 5 seconds
			// const expirationDate = new Date(new Date().getTime() + 5 * 1000)

            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);

			dispatch(authSuccess(token))
			dispatch(checkAuthTimeout(3600))

			// console.log('auth login success')


		}).catch(err => {
			dispatch(authFail(err))

		})
	}
}





export const authSignup = (username, email, password1, password2) => {

	return (dispatch) => {
		// console.log('actions authSignup', username, email, password1, password2)
		dispatch(authStart())
		axios.post('http://localhost:8000/rest-auth/registration/', {
			username: username,
			email: email,
			password1: password1,
			password2: password2
		})
		.then(res => {
			const token = res.data.key
			// console.log(token)
			const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);

			dispatch(authSuccess(token))
			dispatch(checkAuthTimeout(3600))

		}).catch(err => {
			dispatch(authFail(err))
		})
	}
}






export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');

		console.log('actions authCheckState', token)



        if (token === undefined) {
            dispatch(logout());

        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {

    	        console.log('log out', expirationDate)

                dispatch(logout());
            } else {

                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );

	            console.log('success', expirationDate)

            }
        }





    }
}








// class Article extends Component {

// 	render() {


// 		return (
// 				<div className="container">


// 					<h1>{this.props.article.id}</h1>
// 					<h1>{this.props.article.title}</h1>

// 					<a href={`#/article/${this.props.article.id}`}> {this.props.article.title} </a>

// 				</div>
// 		)
// 	}
// }

// export default Article;