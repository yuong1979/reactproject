import React, {Component, Fragment} from 'react';
import TodoItems from './TodoItems'
import PropTypes from 'prop-types';



class Todos extends Component {



	render() {

		// console.log(this.props.todonow)



		return (
			this.props.todonow.map((todo) => (

				<TodoItems key={todo.id} todos={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete}/>

			))
		)
		
	}

}

Todos.propTypes = {
	todonow: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
}


export default Todos;


// import React, {Component, Fragment} from 'react';

// class App extends Component {

// 	render() {
// 		return (
// 				<div className="container">

// 				</div>
// 		)
// 	}
// }

// export default App;




	// <TodoItems todo={todo} />

	// <TodoItems key={todo.id} todos={todo} />

	// <h3 key={todo.id}>{todo.title}</h3>
