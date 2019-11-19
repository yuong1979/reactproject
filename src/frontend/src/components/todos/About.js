import React, {Component, Fragment} from 'react';

// using functional components
function About() {

	return (

		<React.Fragment>

		<h2 style={headerStyle}>the to do list</h2>
		<p>This is a todo list</p>
		<p>This is a todo list</p>
		<p>This is a todo list</p>
		<p>This is a todo list</p>

		</React.Fragment>
	)
}

const headerStyle = {

	background: '#333',
	color: 'white',
	textAlign:'center',
	padding:'10px'
}



export default About;
