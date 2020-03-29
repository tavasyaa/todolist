import React from 'react';
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';

// for each todo, display an h3
class Todos extends React.Component {
  // when box is checked in TodoItem.js, it calls the function it gets from props, which is this:

  render() {
  return this.props.todos.map((todo) => (
  	// We're passing markComplete down from App to Todos to TodoItem, if you don't want to do this learn about Redux!
	<TodoItem key =  {todo.id} todo = {todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo} />
	  	))
  }
}

// PropTypes, this is just good practice to define props used
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;
