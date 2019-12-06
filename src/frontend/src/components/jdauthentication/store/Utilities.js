// export const updateObject = (oldObject, updatedProperties) => {

// 	return {
// 		...oldObject,
// 		...updatedProperties
// 	}

// }

export const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


// setup config with token - helper function

export const tokenConfig = getState => {


	// get token from the state
	const token = getState().auth.token


	//headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	//if token exists, add to headers
	if (token) {
		config.headers['Authorisation'] = `Token ${token}`;

	}


	var csrftoken = getCookie('XSRF-TOKEN');
	config.headers['X-CSRFToken'] = `${csrftoken}`;

	return config

}

