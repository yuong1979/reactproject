import React, {Component, Fragment} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import uuid from 'uuid'
// import HeaderToDo from '../layout/navbar/headertodo'
import HeaderToDo from './layout/navbar/headertodo'



class TodoDash extends Component {


		state = {
			todos: [
				{
					id: uuid.v4(),
					title: 'take out trash',
					completed: false,
				},
				{
					id: uuid.v4(),
					title: 'dinner with wife',
					completed: true,
				},
				{
					id: uuid.v4(),
					title: 'meeting with boss',
					completed: false,
				},
			]
		}


markComplete = (id) => {
	this.setState({
		todos: this.state.todos.map(todo => {

			if(todo.id === id) {todo.completed = !todo.completed}

		return todo
		})
	})
}


delTodo = (id) => {

	this.setState({
		todos: [...this.state.todos.filter(todo => {
			
				if(todo.id !== id) {return true}
			}

			)]
	})
}


addTodo = (title) => {


	const todo = { 
		id: uuid.v4(),
		title: title,
		completed: false,
	}

	this.setState({

		todos: [...this.state.todos, todo]

	})

}


	render() {


		return (

				<div className="App">

				<div className="Container">
				<HeaderToDo />

				<AddTodo addTodo = {this.addTodo}/>

					<Todos todonow={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>

				</div>
				</div>

		)
	}

}


export default TodoDash;





