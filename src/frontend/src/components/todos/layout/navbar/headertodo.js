import React, {Component, Fragment} from 'react';

// using functional components
function HeaderToDo() {

	return (

		<header>
			<h2 style={headerStyle}>To do list now </h2>
		</header>
	)
}

const headerStyle = {

	background: '#333',
	color: 'white',
	textAlign:'center',
	padding:'10px'
}


export default HeaderToDo;
